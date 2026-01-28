export const toursData = {
  'montserrat': {
    id: 'montserrat',
    title: {
      es: "Tour Monasterio de",
      en: "Monastery Tour of",
      it: "Tour Monastero di"
    },
    highlight: "Montserrat",
    badge: {
      es: "Tour Montaña y Cultura",
      en: "Mountain & Culture Tour",
      it: "Tour Montagna e Cultura"
    },
    description: {
      es: "Descubre la montaña sagrada de Cataluña. Un viaje inolvidable al Monasterio de Montserrat, hogar de la famosa Virgen Negra y la Escolanía más antigua de Europa.",
      en: "Discover Catalonia's sacred mountain. An unforgettable trip to the Montserrat Monastery, home of the famous Black Madonna and one of Europe's oldest boys' choirs.",
      it: "Scopri la montagna sacra della Catalogna. Un viaggio indimenticabile al Monastero di Montserrat, dimora della famosa Madonna Nera e del coro di voci bianche più antico d'Europa."
    },
    duration: "6 horas",
    capacity: "Max 7-8 pax",
    distance: "60 km",
    price: null, // Consultar precio
    image: "/img/optimized/Barcelona Montserrat-3-hero.webp",
    cardImage: "/img/optimized/Barcelona Montserrat-3-card.webp",
    itinerary: [
      { time: '09:00', desc: { es: 'Recogida en Barcelona', en: 'Pickup in Barcelona', it: 'Ritiro a Barcellona' } },
      { time: '10:00', desc: { es: 'Llegada a Montserrat', en: 'Arrival at Montserrat', it: 'Arrivo a Montserrat' } },
      { time: '12:30', desc: { es: 'Tiempo libre', en: 'Free time', it: 'Tempo libero' } },
      { time: '15:00', desc: { es: 'Regreso a Barcelona', en: 'Return to Barcelona', it: 'Ritorno a Barcellona' } }
    ]
  },
  'portaventura': {
    id: 'portaventura',
    title: {
      es: "Excursión a",
      en: "Excursion to",
      it: "Escursione a"
    },
    highlight: "PortAventura",
    badge: {
      es: "Parque Temático",
      en: "Theme Park",
      it: "Parco Divertimenti"
    },
    description: {
      es: "Disfruta de un día lleno de adrenalina y diversión en uno de los mejores parques temáticos de Europa. Ideal para familias y grupos de amigos.",
      en: "Enjoy a day full of adrenaline and fun at one of Europe's best theme parks. Perfect for families and groups of friends.",
      it: "Goditi una giornata piena di adrenalina e divertimento in uno dei migliori parchi a tema d'Europa. Ideale per famiglie e gruppi di amici."
    },
    duration: "8-10 horas",
    capacity: "Max 7-8 pax",
    distance: "110 km",
    price: null,
    image: "/img/optimized/portaventura-hero.webp",
    cardImage: "/img/optimized/portaventura-card.webp",
    itinerary: [
      { time: '09:00', desc: { es: 'Salida de Barcelona', en: 'Departure from Barcelona', it: 'Partenza da Barcellona' } },
      { time: '10:15', desc: { es: 'Llegada a PortAventura', en: 'Arrival at PortAventura', it: 'Arrivo a PortAventura' } },
      { time: '18:00', desc: { es: 'Regreso a Barcelona', en: 'Return to Barcelona', it: 'Ritorno a Barcellona' } }
    ]
  },
  'dali-museum': {
    id: 'dali-museum',
    title: {
      es: "Tour Museo",
      en: "Museum Tour",
      it: "Tour Museo"
    },
    highlight: "Dalí (Figueres)",
    badge: {
      es: "Arte y Cultura",
      en: "Art & Culture",
      it: "Arte e Cultura"
    },
    description: {
      es: "Sumérgete en el mundo surrealista de Salvador Dalí. Visita su teatro-museo en Figueres y descubre la genialidad del artista catalán más universal.",
      en: "Immerse yourself in the surreal world of Salvador Dalí. Visit his theatre-museum in Figueres and discover the genius of the most universal Catalan artist.",
      it: "Immergiti nel mondo surrealista di Salvador Dalí. Visita il suo teatro-museo a Figueres e scopri il genio dell'artista catalano più universale."
    },
    duration: "8 horas",
    capacity: "Max 7-8 pax",
    distance: "140 km",
    price: null,
    image: "/img/optimized/Tour-Museo-Dalí-2-hero.webp",
    cardImage: "/img/optimized/Tour-Museo-Dalí-2-card.webp", // Placeholder
    itinerary: [
      { time: '08:30', desc: { es: 'Salida de Barcelona', en: 'Departure from Barcelona', it: 'Partenza da Barcellona' } },
      { time: '10:30', desc: { es: 'Visita Museo Dalí', en: 'Dalí Museum Visit', it: 'Visita Museo Dalí' } },
      { time: '13:00', desc: { es: 'Tiempo libre / Comida', en: 'Free time / Lunch', it: 'Tempo libero / Pranzo' } },
      { time: '16:30', desc: { es: 'Regreso', en: 'Return', it: 'Ritorno' } }
    ]
  },
  'costa-brava': {
    id: 'costa-brava',
    title: {
      es: "Tour",
      en: "Tour",
      it: "Tour"
    },
    highlight: "Costa Brava",
    badge: {
      es: "Playas y Paisajes",
      en: "Beaches & Landscapes",
      it: "Spiagge e Paesaggi"
    },
    description: {
      es: "Recorre los pueblos costeros más bonitos: Lloret de Mar, Tossa de Mar y sus calas escondidas. Un paraíso mediterráneo a tu alcance.",
      en: "Explore the most beautiful coastal towns: Lloret de Mar, Tossa de Mar and their hidden coves. A Mediterranean paradise within reach.",
      it: "Esplora le più belle città costiere: Lloret de Mar, Tossa de Mar e le loro calette nascoste. Un paradiso mediterraneo a portata di mano."
    },
    duration: "8-9 horas",
    capacity: "Max 7-8 pax",
    distance: "80-100 km",
    price: null,
    image: "/img/optimized/Costa-Brava-hero.webp",
    cardImage: "/img/optimized/Costa-Brava-card.webp",
    itinerary: [
      { time: '09:00', desc: { es: 'Salida', en: 'Departure', it: 'Partenza' } },
      { time: '10:30', desc: { es: 'Lloret / Tossa de Mar', en: 'Lloret / Tossa de Mar', it: 'Lloret / Tossa de Mar' } },
      { time: '13:00', desc: { es: 'Comida frente al mar', en: 'Seaside Lunch', it: 'Pranzo sul mare' } },
      { time: '17:00', desc: { es: 'Regreso', en: 'Return', it: 'Ritorno' } }
    ]
  },
  'costa-dorada': {
    id: 'costa-dorada',
    title: {
      es: "Tour",
      en: "Tour",
      it: "Tour"
    },
    highlight: "Costa Dorada",
    badge: {
      es: "Sol y Patrimonio",
      en: "Sun & Heritage",
      it: "Sole e Patrimonio"
    },
    description: {
      es: "Visita Tarragona (antigua Tarraco romana) y las playas doradas de Sitges. Historia y relax en un mismo día.",
      en: "Visit Tarragona (ancient Roman Tarraco) and the golden beaches of Sitges. History and relaxation in one day.",
      it: "Visita Tarragona (antica Tarraco romana) e le spiagge dorate di Sitges. Storia e relax in un solo giorno."
    },
    duration: "8 horas",
    capacity: "Max 7-8 pax",
    distance: "100 km",
    price: null,
    image: "/img/optimized/costa-dorada-hero.webp",
    cardImage: "/img/optimized/costa-dorada-card.webp",
    itinerary: [
      { time: '09:00', desc: { es: 'Salida', en: 'Departure', it: 'Partenza' } },
      { time: '10:00', desc: { es: 'Sitges', en: 'Sitges', it: 'Sitges' } },
      { time: '12:00', desc: { es: 'Tarragona Romana', en: 'Roman Tarragona', it: 'Tarragona Romana' } },
      { time: '17:00', desc: { es: 'Regreso', en: 'Return', it: 'Ritorno' } }
    ]
  },
  'gaudi-tour': {
    id: 'gaudi-tour',
    title: {
      es: "Tour Arquitectura",
      en: "Architecture Tour",
      it: "Tour Architettura"
    },
    highlight: "Gaudí Completo",
    badge: {
      es: "Arte e Historia",
      en: "Art & History",
      it: "Arte e Storia"
    },
    description: {
      es: "Ruta exclusiva por las obras maestras de Antoni Gaudí: Sagrada Familia, Casa Batlló y Park Güell. Una inmersión total en el modernismo catalán.",
      en: "Exclusive route through Antoni Gaudí's masterpieces: Sagrada Familia, Casa Batlló, and Park Güell. A total immersion in Catalan modernism.",
      it: "Percorso esclusivo attraverso i capolavori di Antoni Gaudí: Sagrada Familia, Casa Batlló e Park Güell. Un'immersione totale nel modernismo catalano."
    },
    duration: "4-5 horas",
    capacity: "Max 7-8 pax",
    distance: "Tour Urbano",
    price: null,
    image: "/img/optimized/sagrada-familia-2-hero.webp",
    cardImage: "/img/optimized/sagrada-familia-2-card.webp",
    itinerary: [
      { time: '09:00', desc: { es: 'Sagrada Familia', en: 'Sagrada Familia', it: 'Sagrada Familia' } },
      { time: '11:00', desc: { es: 'Park Güell', en: 'Park Güell', it: 'Park Güell' } },
      { time: '13:00', desc: { es: 'Casa Batlló / La Pedrera', en: 'Casa Batlló / La Pedrera', it: 'Casa Batlló / La Pedrera' } }
    ]
  }
};
