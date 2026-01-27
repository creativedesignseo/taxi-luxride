
import sharp from 'sharp';
import heicConvert from 'heic-convert';
import { promises as fs } from 'fs';
import { watch } from 'fs';
import { join, parse, dirname } from 'path';
import { fileURLToPath } from 'url';

// Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RAW_DIR = join(__dirname, '../src/assets/raw');
const OUTPUT_DIR = join(__dirname, '../public/img/optimized');

// --- CONFIGURACIÓN DE PERFILES ---
const PERFILES = {
  'card': { width: 334, height: 250, fit: 'cover', position: 'center', quality: 90 },
  'hero': { width: 1920, height: 800, fit: 'cover', position: 'center', quality: 85 },
  'thumb': { width: 150, height: 150, fit: 'cover', position: 'center', quality: 85 },
  'mobile': { width: 600, height: 800, fit: 'cover', position: 'center', quality: 85 }
};

// --- UTILS ---
async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function processSingleFile(filename) {
  if (!/\.(jpg|jpeg|png|webp|avif|heic)$/i.test(filename)) return;

  const { name, ext } = parse(filename);
  const inputPath = join(RAW_DIR, filename);

  try {
    const inputStats = await fs.stat(inputPath);
    let needsProcessing = false;
    for (const profileName of Object.keys(PERFILES)) {
        const outputFilename = `${name}-${profileName}.webp`;
        const outputPath = join(OUTPUT_DIR, outputFilename);
        try {
            const outputStats = await fs.stat(outputPath);
            if (inputStats.mtimeMs > outputStats.mtimeMs) {
                needsProcessing = true;
                break;
            }
        } catch (e) {
            needsProcessing = true;
            break;
        }
    }

    if (!needsProcessing) return;

    console.log(`⚡ Procesando: ${filename}`);

    let imageBuffer;
    if (ext.toLowerCase() === '.heic') {
      console.log(`   🔄 Convirtiendo HEIC a buffer...`);
      const inputBuffer = await fs.readFile(inputPath);
      imageBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 1
      });
    } else {
      imageBuffer = inputPath;
    }

    // --- ANÁLISIS DE BRILLO DINÁMICO ---
    const stats = await sharp(imageBuffer).stats();
    // Calculamos la luminancia media (brillo percibido)
    // Usamos la fórmula estándar de luminancia: 0.2126*R + 0.7152*G + 0.0722*B
    const r = stats.channels[0].mean;
    const g = stats.channels[1].mean;
    const b = stats.channels[2].mean;
    const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
    
    let dynamicBrightness = 1.05; // Base (vibrante)
    let dynamicSaturation = 1.1;  // Base

    if (luminance < 100) {
      // Imagen oscura: subimos más el brillo
      dynamicBrightness = 1.20;
      console.log(`   💡 Detección: Imagen oscura (Luminancia: ${Math.round(luminance)}). Aplicando corrección de brillo +20%.`);
    } else if (luminance > 180) {
      // Imagen muy clara: bajamos ligeramente el brillo para no quemarla
      dynamicBrightness = 0.95;
      console.log(`   🕶️ Detección: Imagen muy clara (Luminancia: ${Math.round(luminance)}). Ajustando exposición -5%.`);
    } else {
      console.log(`   ✨ Detección: Brillo equilibrado (Luminancia: ${Math.round(luminance)}). Aplicando optimización estándar.`);
    }

    for (const [profileName, config] of Object.entries(PERFILES)) {
      const outputFilename = `${name}-${profileName}.webp`;
      const outputPath = join(OUTPUT_DIR, outputFilename);

      console.log(`   🔸 Generando ${profileName} (${config.width}x${config.height})...`);

      await sharp(imageBuffer)
        .resize({
            width: config.width,
            height: config.height,
            fit: config.fit,
            position: config.position
        })
        .modulate({
            brightness: dynamicBrightness,
            saturation: dynamicSaturation
        })
        .sharpen() // Añade nitidez
        .webp({ quality: config.quality })
        .toFile(outputPath);
    }
    console.log(`   ✅ ${filename} optimizado correctamente.`);

  } catch (error) {
    console.error(`❌ Error con ${filename}:`, error.message);
  }
}

async function processAll() {
  console.log('🏭 Escaneando directorio raw/ ...');
  const files = await fs.readdir(RAW_DIR);
  for (const file of files) {
    await processSingleFile(file);
  }
  console.log('✨ Escaneo inicial completado.\n');
}

async function main() {
  await ensureDir(RAW_DIR);
  await ensureDir(OUTPUT_DIR);

  const isWatchMode = process.argv.includes('--watch');

  if (isWatchMode) {
    console.log('👀 MODO ESCUCHA ACTIVADO');
    console.log('   Deja este proceso corriendo. Arrastra imágenes a src/assets/raw para procesarlas.');
    console.log('   Presiona CTRL+C para salir.\n');

    await processAll(); // Process existing first

    // Watcher
    let debounceTimer = null;
    watch(RAW_DIR, (eventType, filename) => {
      if (!filename) return;
      if (debounceTimer) clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(() => {
        processSingleFile(filename);
      }, 300); // 300ms debounce
    });

  } else {
    // Single Run
    await processAll();
  }
}

main();
