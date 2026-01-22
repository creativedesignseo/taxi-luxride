
import sharp from 'sharp';
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
  'card': { width: 334, height: 250, fit: 'cover', position: 'attention', quality: 85 },
  'hero': { width: 1920, height: 800, fit: 'cover', position: 'center', quality: 80 },
  'thumb': { width: 150, height: 150, fit: 'cover', position: 'center', quality: 80 },
  'mobile': { width: 600, height: 800, fit: 'cover', position: 'attention', quality: 80 }
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
  if (!/\.(jpg|jpeg|png|webp|avif)$/i.test(filename)) return;

  const { name } = parse(filename);
  const inputPath = join(RAW_DIR, filename);

  try {
    // Check if file exists (it might have been deleted)
    const inputStats = await fs.stat(inputPath);

    // Check availability checking timestamps
    let needsProcessing = false;
    for (const profileName of Object.keys(PERFILES)) {
        const outputFilename = `${name}-${profileName}.webp`;
        const outputPath = join(OUTPUT_DIR, outputFilename);
        try {
            const outputStats = await fs.stat(outputPath);
            // If original is newer than output, we need to process
            if (inputStats.mtimeMs > outputStats.mtimeMs) {
                needsProcessing = true;
                break;
            }
        } catch (e) {
            // Output doesn't exist
            needsProcessing = true;
            break;
        }
    }

    if (!needsProcessing) {
       // Silent skip or verbose if needed
       // console.log(`⏭️  Skipping ${filename} (already up to date)`);
       return;
    }

    console.log(`⚡ Procesando: ${filename} ...`);

    for (const [profileName, config] of Object.entries(PERFILES)) {
      const outputFilename = `${name}-${profileName}.webp`;
      const outputPath = join(OUTPUT_DIR, outputFilename);

      await sharp(inputPath)
        .resize({
            width: config.width,
            height: config.height,
            fit: config.fit,
            position: config.position === 'attention' ? sharp.strategy.attention : config.position
        })
        .webp({ quality: config.quality })
        .toFile(outputPath);
    }
    console.log(`   ✅ Completado!`);

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
