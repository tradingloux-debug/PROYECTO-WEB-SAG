import { Experience } from '../types/experience';

// Generated authentic assets
import heroCoatepeque from '../assets/images/hero_coatepeque_el_salvador_1791258093926.jpg';
import expSuchitoto from '../assets/images/exp_culture_suchitoto_1791258103725.jpg';
import expCoffee from '../assets/images/exp_coffee_apaneca_1791258112096.jpg';
import expSurf from '../assets/images/exp_adventure_surf_tunco_1791258121258.jpg';
import expSantaAna from '../assets/images/exp_nature_santa_ana_1791258129967.jpg';
import expTazumal from '../assets/images/exp_maya_tazumal_1791865355034.jpg';
import panoSantaAna from '../assets/images/pano360_santa_ana_v2.jpg';
import panoSurfTunco from '../assets/images/pano360_surf_tunco_v2.jpg';
import panoSuchitoto from '../assets/images/pano360_suchitoto_v2.jpg';
import panoCoatepeque from '../assets/images/pano360_coatepeque_v2.jpg';

export { panoSantaAna, panoSurfTunco, panoSuchitoto, panoCoatepeque };

export const DEMO_EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    slug: 'ascenso-volcan-santa-ana-ilamatepec',
    titleEs: 'Ascenso al Cráter Turquesa del Volcán Santa Ana (Ilamatepec)',
    titleEn: 'Summit Trek to the Emerald Crater of Santa Ana Volcano',
    shortDescriptionEs: 'Camina entre bosques de niebla y lava volcánica hasta contemplar la laguna de azufre esmeralda a 2,381 msnm.',
    shortDescriptionEn: 'Hike through cloud forests and volcanic terrain to reach the spectacular steaming emerald crater lake at 2,381m.',
    descriptionEs: 'El volcán Ilamatepec es el punto más alto de El Salvador y una de las postales naturales más asombrosas de Centroamérica. En esta experiencia guiada ascenderemos a ritmo pausado y seguro desde el Parque Nacional Los Volcanes, atravesando tres pisos térmicos hasta coronar la caldera activa donde reposa una deslumbrante laguna de agua termal turquesa con vistas al Lago de Coatepeque.',
    descriptionEn: 'The Ilamatepec Volcano is El Salvador’s highest peak and one of Central America’s most striking natural landmarks. Led by certified mountain hosts, you will ascend through pine-oak forests, volcanic gravel, and crater ridges to stand above the steaming turquoise sulfur lagoon, offering 360-degree vistas over Lake Coatepeque.',
    category: 'naturaleza',
    location: 'Parque Nacional Los Volcanes, Santa Ana',
    department: 'Santa Ana',
    coordinates: { lat: 13.8533, lng: -89.6306 },
    meetingPointEs: 'Entrada principal Parque Cerro Verde, Caseta de Guías Locales',
    meetingPointEn: 'Cerro Verde National Park main entrance, Local Guides kiosk',
    price: 45,
    currency: 'USD',
    priceRange: 'medio',
    duration: '5 horas',
    durationHours: 5,
    durationType: 'half_day',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas', 'grupos'],
    minPeople: 1,
    maxPeople: 12,
    images: [expSantaAna, heroCoatepeque],
    includedEs: [
      'Guía local certificado y guardaparque acompañante',
      'Entradas y permisos al Parque Nacional Los Volcanes',
      'Bastón de senderismo y kit básico de primeros auxilios',
      'Refrigerio ligero de frutas locales y agua purificada'
    ],
    includedEn: [
      'Certified local guide and national park escort',
      'National Park entrance fees and permits',
      'Trekking poles and basic first-aid support',
      'Light local fruit snack and refill water'
    ],
    notIncludedEs: [
      'Transporte hasta el Parque Cerro Verde',
      'Almuerzo completo posterior',
      'Propinas voluntarias al equipo'
    ],
    notIncludedEn: [
      'Transportation to Cerro Verde National Park',
      'Full lunch afterwards',
      'Voluntary gratuities'
    ],
    requirementsEs: [
      'Calzado cerrado con tracción (tenis de trail o botas de montaña)',
      'Chaqueta cortavientos o abrigo ligero para la cumbre (clima fresco y ventoso)',
      'Protector solar biodegradable y gafas de sol',
      'Condición física moderada (aprox. 8 km ida y vuelta con desnivel)'
    ],
    requirementsEn: [
      'Closed-toe footwear with grip (trail running shoes or hiking boots)',
      'Light windbreaker or layer for the windy summit',
      'Biodegradable sunscreen and sunglasses',
      'Moderate fitness level (approx. 8km roundtrip with elevation gain)'
    ],
    itinerary: [
      {
        time: '07:45',
        titleEs: 'Encuentro y registro en Cerro Verde',
        titleEn: 'Meet & briefing at Cerro Verde',
        descriptionEs: 'Bienvenida del guía, revisión de equipo y charla de seguridad previa.',
        descriptionEn: 'Welcome by lead guide, gear check, and safety briefing.'
      },
      {
        time: '08:15',
        titleEs: 'Inicio de la caminata hacia la base',
        titleEn: 'Trailhead hike towards the volcanic slope',
        descriptionEs: 'Descenso inicial por el bosque nuboso hacia la planicie de San Blas.',
        descriptionEn: 'Gentle descent through cloud forest towards the San Blas base.'
      },
      {
        time: '10:00',
        titleEs: 'Ascenso por la ladera rocosa',
        titleEn: 'Ascent along the rocky volcanic ridge',
        descriptionEs: 'Subida progresiva con paradas de hidratación y vistas panorámicas a Coatepeque.',
        descriptionEn: 'Progressive incline with hydration breaks and sweeping lake views.'
      },
      {
        time: '11:15',
        titleEs: 'Llegada al cráter y contemplación',
        titleEn: 'Summit crater arrival & viewpoint',
        descriptionEs: 'Tiempo para descansar, fotografías de la laguna turquesa y refrigerio.',
        descriptionEn: 'Rest time at the rim, panoramic photos of the sulfur lake, and trail snack.'
      },
      {
        time: '13:00',
        titleEs: 'Retorno seguro al punto de partida',
        titleEn: 'Safe descent back to Cerro Verde',
        descriptionEs: 'Regreso pausado y cierre de la experiencia.',
        descriptionEn: 'Guided descent back to the park baseline and wrap-up.'
      }
    ],
    featured: true,
    active: true,
    demoRating: 4.9,
    demoReviewsCount: 38,
    has360: true,
    virtualTour360Url: panoSantaAna,
    isLocalExperience: false
  },
  {
    id: 'exp-2',
    slug: 'ruta-del-cafe-apaneca-pupusa-workshop',
    titleEs: 'Ruta del Café de Especialidad y Masterclass de Pupusas',
    titleEn: 'Specialty Coffee Farm Cupping & Hands-on Pupusa Workshop',
    shortDescriptionEs: 'Recorre un beneficio tradicional en Apaneca, aprende a catar café Pacamara y prepara pupusas en comal de barro.',
    shortDescriptionEn: 'Tour a heritage high-altitude coffee farm, cup award-winning Pacamara beans, and craft pupusas over a clay comal.',
    descriptionEs: 'Una inmersión íntima en el corazón cafetalero de la cordillera Apaneca-Ilamatepec. Comenzaremos entre cafetos de sombra aprendiendo el proceso de cosecha y tostado artesanal, guiados por un catador certificado. Luego, en la cocina campestre de una familia local, aprenderás la técnica tradicional de palmear pupusas con maíz nixtamalizado y queso artesanal de la región.',
    descriptionEn: 'A sensory immersion into El Salvador’s highland coffee belt along the Ruta de las Flores. Guided by a certified roaster, explore shade-grown Pacamara fields and participate in a guided cupping table. Later, join a local culinary host to hand-knead and griddle traditional pupusas using heirloom maize on a wood-fired clay hearth.',
    category: 'gastronomia',
    location: 'Apaneca, Ruta de las Flores',
    department: 'Ahuachapán',
    coordinates: { lat: 13.8617, lng: -89.8039 },
    meetingPointEs: 'Café La Concordia, Parque Central de Apaneca',
    meetingPointEn: 'La Concordia Coffee Bar, Apaneca Central Plaza',
    price: 52,
    currency: 'USD',
    priceRange: 'medio',
    duration: '4 horas',
    durationHours: 4,
    durationType: 'half_day',
    languages: ['ES', 'EN'],
    groupType: ['parejas', 'familias', 'grupos'],
    minPeople: 2,
    maxPeople: 10,
    images: [expCoffee, expSuchitoto],
    includedEs: [
      'Visita guiada a finca cafetalera sostenible',
      'Sesión de cata y degustación de 3 métodos de extracción',
      'Taller práctico de pupusas con ingredientes frescos e ilimitados',
      'Bebida tradicional de temporada (horchata de morro o fresco de ensalada)',
      'Bolsa conmemorativa de 250g de café tostado en grano'
    ],
    includedEn: [
      'Guided walk through sustainable coffee plantation',
      'Cupping session & 3 artisan brew methods',
      'Hands-on pupusa making class with fresh ingredients',
      'Traditional seasonal beverage',
      'Take-home 250g bag of roasted specialty coffee'
    ],
    notIncludedEs: [
      'Transporte interdepartamental',
      'Bebidas alcohólicas adicionales',
      'Compras en tienda de souvenirs'
    ],
    notIncludedEn: [
      'Inter-department transit',
      'Additional alcoholic drinks',
      'Souvenir store purchases'
    ],
    requirementsEs: [
      'Ropa cómoda y suéter ligero (clima fresco en las montañas de Apaneca)',
      'Informar alergias alimentarias con anticipación (opciones vegetarianas y sin gluten disponibles)'
    ],
    requirementsEn: [
      'Comfortable casual clothing and light sweater (cool mountain weather)',
      'Advise dietary preferences in advance (vegetarian & gluten-free corn options available)'
    ],
    itinerary: [
      {
        time: '09:00',
        titleEs: 'Bienvenida con café de bienvenida',
        titleEn: 'Warm welcome brew in Apaneca',
        descriptionEs: 'Recepción en el parque y breve caminata hacia la finca patrimonial.',
        descriptionEn: 'Meet at the town plaza and short walk to the heritage farm.'
      },
      {
        time: '09:30',
        titleEs: 'Recorrido por los cafetales y secado',
        titleEn: 'Shade-grown plantation walk & drying patios',
        descriptionEs: 'Explicación del terroir volcánico, variedades Pacamara y secado en camas africanas.',
        descriptionEn: 'Learn about volcanic soil influence, bean varieties, and drying techniques.'
      },
      {
        time: '11:00',
        titleEs: 'Taller de cata y perfiles de sabor',
        titleEn: 'Barista cupping session',
        descriptionEs: 'Degustación guiada de notas florales y achocolatadas del grano salvadoreño.',
        descriptionEn: 'Interactive cupping exploring floral and caramel roast profiles.'
      },
      {
        time: '12:00',
        titleEs: 'Masterclass de pupusas en comal de barro',
        titleEn: 'Pupusa making class on wood-fired comal',
        descriptionEs: 'Aprende a palmear la masa, rellenar y cocinar con curtido artesanal y salsa casera.',
        descriptionEn: 'Master the hand-patting technique, stuffing, and eating with house-made curtido.'
      }
    ],
    featured: true,
    active: true,
    demoRating: 5.0,
    demoReviewsCount: 42,
    has360: true,
    virtualTour360Url: panoCoatepeque,
    isLocalExperience: true,
    localCategory: 'cafe',
    hostStory: {
      name: 'Doña Rosa y Familia Magaña',
      community: 'Apaneca, Ahuachapán',
      storyEs: 'Cultivadores de café de tercera generación en las faldas de la cordillera. Abren su casa para compartir la técnica tradicional del tueste y la receta familiar de pupusas de maíz criollo.',
      storyEn: 'Third-generation coffee farmers on mountain slopes. They welcome guests into their family kitchen to share ancestral roasting and hand-patted heirloom pupusas.',
      impactEs: 'Ingreso directo para familias productoras de café de altura sin intermediarios.',
      impactEn: 'Direct income to smallholder highland coffee farming families.'
    }
  },
  {
    id: 'exp-3',
    slug: 'clase-surf-atardecer-el-tunco',
    titleEs: 'Clase de Surf y Sesión de Atardecer en Playa El Tunco',
    titleEn: 'Private Surf Clinic & Sunset Session at El Tunco Beach',
    shortDescriptionEs: 'Aprende o perfecciona tu técnica con instructores locales certificados sobre la legendaria costa de Surf City.',
    shortDescriptionEn: 'Catch Pacific waves with certified local surf coaches along El Salvador’s world-renowned Surf City coastline.',
    descriptionEs: 'La Libertad es uno de los epicentros de surf más aclamados del mundo gracias a sus rompientes constantes y aguas cálidas todo el año. Ya seas principiante absoluto o busques corregir postura en olas point break, nuestros entrenadores salvadoreños te enseñarán lectura de corrientes, remada y equilibrio en la arena antes de entrar al agua durante la mejor marea de la tarde.',
    descriptionEn: 'El Salvador’s coastline boasts world-class Pacific swells and bath-warm waters. Whether catching your first foam or refining takeoffs, this experience pairs you with experienced local wave riders who focus on ocean safety, paddling mechanics, and stance balance, timing the session to catch the golden Pacific sunset.',
    category: 'aventura',
    location: 'Playa El Tunco, La Libertad',
    department: 'La Libertad',
    coordinates: { lat: 13.4939, lng: -89.3842 },
    meetingPointEs: 'Club de Surf Bocana, frente a la playa El Tunco',
    meetingPointEn: 'Bocana Surf Shack, beachfront El Tunco',
    price: 38,
    currency: 'USD',
    priceRange: 'economico',
    duration: '2.5 horas',
    durationHours: 2.5,
    durationType: 'hours',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas', 'grupos'],
    minPeople: 1,
    maxPeople: 6,
    images: [expSurf, heroCoatepeque],
    includedEs: [
      'Tabla de surf adecuada a tu estatura y nivel',
      'Licra de protección UV (rashguard)',
      'Instructor salvadoreño certificado (ratio máximo 1:3)',
      'Ducha de agua dulce y taquilla de seguridad',
      'Agua de coco fresca al finalizar'
    ],
    includedEn: [
      'Surfboard matched to your skill and size',
      'UV rashguard vest',
      'Certified local instructor (maximum 1:3 ratio)',
      'Freshwater rinse and secure lockers',
      'Fresh chilled coconut after the session'
    ],
    notIncludedEs: [
      'Fotografía profesional dentro del agua (disponible opcional in situ)',
      'Bebidas en bares de la playa',
      'Transporte desde San Salvador'
    ],
    notIncludedEn: [
      'In-water action photography (available as on-site add-on)',
      'Beachfront bar beverages',
      'Transit from San Salvador'
    ],
    requirementsEs: [
      'Saber nadar con soltura en aguas abiertas',
      'Traje de baño o short deportivo',
      'Protector solar apto para arrecifes (óxido de zinc)'
    ],
    requirementsEn: [
      'Comfortable swimming ability in open water',
      'Swimwear or athletic boardshorts',
      'Reef-safe sunscreen (mineral zinc)'
    ],
    itinerary: [
      {
        time: '15:30',
        titleEs: 'Ajuste de equipo y calentamiento',
        titleEn: 'Board fitting & sand warmup',
        descriptionEs: 'Elección de tabla según experiencia, calentamiento articular y seguridad marina.',
        descriptionEn: 'Board matching, dynamic stretching, and wave current safety briefing.'
      },
      {
        time: '16:00',
        titleEs: 'Práctica técnica en arena',
        titleEn: 'Sand pop-up mechanics',
        descriptionEs: 'Simulación del "pop-up", posición de pies y centro de gravedad.',
        descriptionEn: 'Drilling the take-off movement, stance alignment, and balance control.'
      },
      {
        time: '16:30',
        titleEs: 'Entrada al agua y captura de olas',
        titleEn: 'In-water coached surf session',
        descriptionEs: 'Práctica guiada en el agua con asistencia personalizada en cada serie de olas.',
        descriptionEn: 'Coached ocean session with hands-on wave pushing and real-time guidance.'
      },
      {
        time: '17:45',
        titleEs: 'Cierre al atardecer y coco frío',
        titleEn: 'Sunset cool down & fresh coconut',
        descriptionEs: 'Regreso a la orilla para disfrutar la puesta de sol sobre el peñón de El Tunco.',
        descriptionEn: 'Relax on the black sand beach with chilled coconut water at sunset.'
      }
    ],
    featured: true,
    active: true,
    demoRating: 4.8,
    demoReviewsCount: 29,
    has360: true,
    virtualTour360Url: panoSurfTunco
  },
  {
    id: 'exp-4',
    slug: 'suchitoto-historico-taller-indigo-anil',
    titleEs: 'Suchitoto Colonial y Taller Ancestral de Añil (Índigo)',
    titleEn: 'Heritage Suchitoto Walk & Ancestral Indigo Dyeing Workshop',
    shortDescriptionEs: 'Recorre calles empedradas de casas coloniales, vista al Lago Suchitlán y tiñe tu propia bufanda con oro azul salvadoreño.',
    shortDescriptionEn: 'Stroll cobblestone colonial streets above Lake Suchitlán and dye your own textile with Maya blue gold.',
    descriptionEs: 'Suchitoto es la capital cultural indiscutible de El Salvador. En este recorrido a pie descubriremos historias de arte, arquitectura colonial preservada y leyendas locales. Visitaremos un taller artesanal dedicado al rescate del añil (oro azul de los mayas), donde utilizarás extracto natural de la planta xiquilite para crear patrones tradicionales de teñido en una bufanda de algodón que te llevarás a casa.',
    descriptionEn: 'Suchitoto is El Salvador’s colonial and artistic crown jewel. Stroll quiet cobblestone streets lined with bougainvillea and historic portales overlooking Lake Suchitlán. At an artisan atelier, discover the ancient Maya alchemy of indigo (xiquilite). Learn fold-resist shibori techniques and dip-dye your own pure cotton keepsake in organic fermentation vats.',
    category: 'cultura',
    location: 'Suchitoto, Cuscatlán',
    department: 'Cuscatlán',
    coordinates: { lat: 13.9383, lng: -89.0278 },
    meetingPointEs: 'Frente a la Iglesia Santa Lucía, Plaza Central de Suchitoto',
    meetingPointEn: 'Santa Lucía Church steps, Central Plaza of Suchitoto',
    price: 48,
    currency: 'USD',
    priceRange: 'medio',
    duration: '3.5 horas',
    durationHours: 3.5,
    durationType: 'hours',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas', 'familias', 'grupos'],
    minPeople: 1,
    maxPeople: 8,
    images: [expSuchitoto, expCoffee],
    includedEs: [
      'Caminata cultural guiada por historiador local',
      'Taller práctico de teñido en añil 100% orgánico',
      'Bufanda o pañuelo de algodón puro para cada participante (te lo llevas)',
      'Degustación de café gourmet y quesadilla salvadoreña artesanal',
      'Acceso al mirador privado sobre el Lago Suchitlán'
    ],
    includedEn: [
      'Guided historical stroll with local cultural host',
      'Hands-on organic indigo dyeing workshop',
      'Pure cotton scarf/bandana to dye and take home',
      'Artisanal coffee tasting & traditional quesadilla cake',
      'Access to scenic Lake Suchitlán panorama overlook'
    ],
    notIncludedEs: [
      'Paseo en lancha por el lago (opcional disponible)',
      'Transporte ida y vuelta desde San Salvador'
    ],
    notIncludedEn: [
      'Lake boat ride (optional add-on)',
      'Inter-city transit from San Salvador'
    ],
    requirementsEs: [
      'Calzado cómodo para caminar sobre empedrado',
      'Ropa que no sea de gran valor (proporcionamos delantal protector para el teñido)',
      'Cámara fotográfica'
    ],
    requirementsEn: [
      'Comfortable walking shoes for cobblestones',
      'Casual clothes (protective aprons provided for dyeing)',
      'Camera or smartphone'
    ],
    itinerary: [
      {
        time: '09:30',
        titleEs: 'Punto de partida en la plaza colonial',
        titleEn: 'Meet at the colonial square',
        descriptionEs: 'Historia de la fundación de Suchitoto y visita a la emblemática iglesia Santa Lucía.',
        descriptionEn: 'Introduction to Suchitoto’s history and visit to Santa Lucía church.'
      },
      {
        time: '10:15',
        titleEs: 'Paseo por galerías y arquitectura',
        titleEn: 'Art galleries & architectural walk',
        descriptionEs: 'Exploración de casas señoriales, balcones de forja y leyendas del pueblo.',
        descriptionEn: 'Explore historic mansions, iron balconies, and local legends.'
      },
      {
        time: '11:00',
        titleEs: 'Taller de teñido con añil natural',
        titleEn: 'Indigo vatting & dyeing laboratory',
        descriptionEs: 'Aprende las técnicas de amarre y sumerge tu tejido en los toneles de tinte vegetal.',
        descriptionEn: 'Learn binding and shibori techniques, dipping your textile into the natural blue vat.'
      },
      {
        time: '12:30',
        titleEs: 'Lavado, revelado y merienda local',
        titleEn: 'Rinse reveal & local treat',
        descriptionEs: 'Desdoble de tu diseño único acompañado de café caliente y quesadilla tradicional.',
        descriptionEn: 'Unfold your blue pattern while enjoying warm coffee and Salvadoran quesadilla.'
      }
    ],
    featured: true,
    active: true,
    demoRating: 4.9,
    demoReviewsCount: 31,
    has360: true,
    virtualTour360Url: panoSuchitoto,
    isLocalExperience: true,
    localCategory: 'artesanias',
    hostStory: {
      name: 'Colectivo Artesanas del Añil',
      community: 'Suchitoto, Cuscatlán',
      storyEs: 'Mujeres artesanas que rescataron la técnica del xiquilite preservada desde tiempos precolombinos para fomentar el empleo digno en la comunidad.',
      storyEn: 'Women artisan cooperative reviving pre-Columbian xiquilite indigo extraction to generate dignified rural employment.',
      impactEs: 'Preservación de técnicas textiles originarias y sustento a artesanas locales.',
      impactEn: 'Preservation of indigenous natural textile arts and sustainable artisan livelihoods.'
    }
  },
  {
    id: 'exp-5',
    slug: 'cascadas-de-juayua-siete-cataratas',
    titleEs: 'Aventura en las Cascadas de Juayúa y Cañón Los Chorros',
    titleEn: 'Juayúa Waterfalls Trek & Los Chorros de la Calera Canyon',
    shortDescriptionEs: 'Senderismo acuático entre cafetales, piscinas naturales de manantial y rappel ligero en cascadas escondidas.',
    shortDescriptionEn: 'Canyon trek through lush coffee ravines to hidden spring-fed pools and guided waterfall swimming.',
    descriptionEs: 'Una refrescante expedición de montaña en las laderas de Juayúa. Atravesaremos senderos rodeados de helechos gigantes y pozas de agua cristalina alimentadas por nacimientos subterráneos. Incluye baño en las famosas cascadas de Los Chorros de la Calera y degustación de platillos tradicionales en la plaza de Juayúa.',
    descriptionEn: 'A refreshing highland canyon hike along the riverbeds of Juayúa. Walk beneath emerald canopies to discover turquoise volcanic spring pools formed by rock wall seepage. Swim in natural freshwater grottoes and savor local market dishes in the lively colonial mountain town.',
    category: 'aventura',
    location: 'Juayúa, Sonsonate',
    department: 'Sonsonate',
    coordinates: { lat: 13.8419, lng: -89.7469 },
    meetingPointEs: 'Parque Central de Juayúa, junto a la fuente de la sirena',
    meetingPointEn: 'Juayúa Central Plaza, beside the historic fountain',
    price: 35,
    currency: 'USD',
    priceRange: 'economico',
    duration: '4 horas',
    durationHours: 4,
    durationType: 'half_day',
    languages: ['ES', 'EN'],
    groupType: ['parejas', 'familias', 'grupos'],
    minPeople: 2,
    maxPeople: 10,
    images: [heroCoatepeque, expCoffee],
    includedEs: [
      'Guía montañista local con equipo de cuerdas de apoyo',
      'Chaleco salvavidas para pozas profundas (opcional)',
      'Bolsa seca impermeable para celulares',
      'Degustación de tamal de elote o yuca frita en el pueblo'
    ],
    includedEn: [
      'Local wilderness guide with support ropes',
      'Life vests for deep pools (optional)',
      'Waterproof dry pouch for phones',
      'Tasting of local corn tamal or yucca snack'
    ],
    notIncludedEs: [
      'Ropa de cambio (debes traerla)',
      'Transporte desde San Salvador'
    ],
    notIncludedEn: [
      'Change of dry clothes',
      'Transportation from San Salvador'
    ],
    requirementsEs: [
      'Zapatos de agua o calzado deportivo que se pueda mojar con buena suela',
      'Traje de baño puesto bajo la ropa de caminata',
      'Toalla y ropa seca para cambiarse al terminar'
    ],
    requirementsEn: [
      'Water shoes or grippy sneakers you don’t mind soaking',
      'Swimsuit worn under light trekking clothes',
      'Towel and a dry change of clothes'
    ],
    itinerary: [
      {
        time: '08:30',
        titleEs: 'Punto de encuentro y revisión de calzado',
        titleEn: 'Meet & gear check in Juayúa',
        descriptionEs: 'Revisión de calzado para agua y entrega de bolsas impermeables.',
        descriptionEn: 'Check water footwear and distribute dry bags.'
      },
      {
        time: '09:00',
        titleEs: 'Descenso por el cañón de la Calera',
        titleEn: 'Canyon descent through coffee hills',
        descriptionEs: 'Caminata entre cafetales y senderos sombreados hacia las vertientes.',
        descriptionEn: 'Hike through shade plantations towards natural river springs.'
      },
      {
        time: '10:15',
        titleEs: 'Baño en pozas de manantial y cascadas',
        titleEn: 'Spring pool swim & waterfall exploration',
        descriptionEs: 'Tiempo libre para nadar bajo las cortinas de agua y saltos controlados.',
        descriptionEn: 'Time to swim beneath natural rock water walls in crystal waters.'
      },
      {
        time: '12:00',
        titleEs: 'Regreso y refrigerio gastronómico',
        titleEn: 'Town return & food tasting',
        descriptionEs: 'Caminata de retorno al pueblo y degustación tradicional de la zona.',
        descriptionEn: 'Gentle walk back to town for a traditional warm bite.'
      }
    ],
    featured: true,
    active: true,
    demoRating: 4.7,
    demoReviewsCount: 24,
    has360: true,
    virtualTour360Url: panoCoatepeque
  },
  {
    id: 'exp-6',
    slug: 'parque-el-imposible-bosque-tropical',
    titleEs: 'Travesía Guiada por el Parque Nacional El Imposible',
    titleEn: 'Deep Canopy Guided Trek in El Imposible National Park',
    shortDescriptionEs: 'Adéntrate en la mayor reserva de biodiversidad de El Salvador: ríos vírgenes, desfiladeros y avistamiento de fauna.',
    shortDescriptionEn: 'Venture into El Salvador’s richest rainforest reserve: pristine canyons, crystal rivers, and rare birdwatching.',
    descriptionEs: 'El Imposible protege el ecosistema de bosque tropical seco más importante del país. Bautizado así por el histórico y peligroso cañón que cruzaban los cafetaleros a principios del siglo XX, hoy es un santuario biológico con más de 500 especies de mariposas, cascadas ocultas y miradores donde en días despejados se divisa el océano Pacífico.',
    descriptionEn: 'El Imposible is El Salvador’s ecological crown jewel. Named after the treacherous historical gorge once traversed by pack mules, it is now a protected reserve sheltering emerald toucanets, crystal mountain streams, and dramatic hanging ridges with distant views toward the Pacific coastline.',
    category: 'naturaleza',
    location: 'San Francisco Menéndez, Ahuachapán',
    department: 'Ahuachapán',
    coordinates: { lat: 13.8294, lng: -89.9667 },
    meetingPointEs: 'Centro de Visitantes Mixtepe, Parque Nacional El Imposible',
    meetingPointEn: 'Mixtepe Visitor Center, El Imposible National Park',
    price: 55,
    currency: 'USD',
    priceRange: 'medio',
    duration: '6 horas',
    durationHours: 6,
    durationType: 'full_day',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas', 'grupos'],
    minPeople: 2,
    maxPeople: 8,
    images: [heroCoatepeque, expSantaAna],
    includedEs: [
      'Guía guardaparque nativo de la comunidad',
      'Pase de ingreso y permisos oficiales de conservación',
      'Bastones de apoyo para senderismo',
      'Almuerzo campestre con ingredientes orgánicos locales'
    ],
    includedEn: [
      'Certified community park ranger guide',
      'Official park conservation entry permits',
      'Trekking poles for rocky terrain',
      'Rustic picnic lunch made with organic local ingredients'
    ],
    notIncludedEs: [
      'Transporte 4x4 hasta el centro de visitantes (se puede coordinar por separado)'
    ],
    notIncludedEn: [
      '4x4 transit to the remote park gate'
    ],
    requirementsEs: [
      'Excelente condición física para caminatas con desniveles pronunciados',
      'Botas de montaña con buen agarre',
      'Al menos 2 litros de agua por persona y repelente de insectos'
    ],
    requirementsEn: [
      'Good physical fitness for steep canyon inclines',
      'Sturdy hiking footwear with lug soles',
      'At least 2 liters of drinking water per person and insect repellent'
    ],
    itinerary: [
      {
        time: '07:30',
        titleEs: 'Registro en el centro de interpretación',
        titleEn: 'Check-in at Mixtepe Interpretation Center',
        descriptionEs: 'Presentación del mapa ecológico y normas de no dejar rastro.',
        descriptionEn: 'Ecological map orientation and leave-no-trace briefing.'
      },
      {
        time: '08:15',
        titleEs: 'Caminata al Mirador El Mulo',
        titleEn: 'Hike to El Mulo Panoramic Ridge',
        descriptionEs: 'Ascenso entre árboles gigantes de ceiba y observación de aves.',
        descriptionEn: 'Canopy walk under ancient ceiba trees with morning bird listening.'
      },
      {
        time: '11:00',
        titleEs: 'Descenso a la poza Los Enganches',
        titleEn: 'Descent to Los Enganches river pool',
        descriptionEs: 'Llegada al punto donde convergen dos ríos prístinos. Baño refrescante.',
        descriptionEn: 'Arrive at the junction of two mountain rivers for a cool swim.'
      },
      {
        time: '12:30',
        titleEs: 'Almuerzo campestre en la orilla',
        titleEn: 'Riverside picnic lunch',
        descriptionEs: 'Descanso gastronómico y recarga de energías.',
        descriptionEn: 'Fresh rustic lunch beside the gentle running stream.'
      },
      {
        time: '14:00',
        titleEs: 'Retorno gradual hacia la salida',
        titleEn: 'Ascent back to park headquarters',
        descriptionEs: 'Subida a paso constante con pausas interpretativas de botánica local.',
        descriptionEn: 'Paced ascent with stops learning about medicinal plants.'
      }
    ],
    featured: false,
    active: true,
    demoRating: 4.8,
    demoReviewsCount: 19,
    has360: true,
    virtualTour360Url: panoSantaAna
  },
  {
    id: 'exp-7',
    slug: 'centro-historico-san-salvador-arquitectura',
    titleEs: 'Renacer del Centro Histórico de San Salvador y Café Patrimonial',
    titleEn: 'San Salvador Historic District Walking Tour & Heritage Coffee',
    shortDescriptionEs: 'Descubre el Palacio Nacional, el Teatro, la colorida Iglesia El Rosario y tertulias en cafeterías de los años 30.',
    shortDescriptionEn: 'Explore the refurbished National Palace, National Theatre, stained-glass Rosario Church, and historic 1930s cafés.',
    descriptionEs: 'El Centro Histórico de San Salvador vive un renacimiento cultural vibrante. En este recorrido a pie con arquitectos e historiadores urbanos, recorrerás plazas abiertas, la revolucionaria iglesia El Rosario con su juego hipnótico de vitrales de colores, el majestuoso Palacio Nacional y las criptas históricas, culminando con café de altura en una terraza con vista a la Catedral.',
    descriptionEn: 'San Salvador’s historic downtown is experiencing a vibrant urban cultural renaissance. Led by local architecture storytellers, discover pedestrian plazas, the world-renowned El Rosario church illuminated by rainbow stained glass concrete arches, the National Palace halls, and a heritage rooftop espresso bar overlooking the Metropolitan Cathedral.',
    category: 'cultura',
    location: 'Centro Histórico, San Salvador',
    department: 'San Salvador',
    coordinates: { lat: 13.6989, lng: -89.1914 },
    meetingPointEs: 'Plaza Gerardo Barrios, frente a la estatua ecuestre',
    meetingPointEn: 'Gerardo Barrios Plaza, in front of the equestrian monument',
    price: 32,
    currency: 'USD',
    priceRange: 'economico',
    duration: '3 horas',
    durationHours: 3,
    durationType: 'hours',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas', 'familias', 'grupos'],
    minPeople: 1,
    maxPeople: 15,
    images: [expSuchitoto, heroCoatepeque],
    includedEs: [
      'Guía profesional especializado en historia urbana y arquitectura',
      'Entrada al Palacio Nacional y salas de exposición',
      'Entrada y visita explicativa a la Iglesia El Rosario',
      'Café de especialidad o bebida refrescante en terraza panorámica'
    ],
    includedEn: [
      'Professional guide specialized in urban history & architecture',
      'Entry tickets to the restored National Palace',
      'Entry and architectural tour of El Rosario Church',
      'Specialty coffee or cold craft drink on a scenic rooftop'
    ],
    notIncludedEs: [
      'Consumos adicionales en librerías o mercados de artesanías',
      'Transporte al punto de encuentro'
    ],
    notIncludedEn: [
      'Purchases at artisan craft markets',
      'Transit to downtown meeting point'
    ],
    requirementsEs: [
      'Ropa fresca, gorra o sombrero y gafas de sol',
      'Calzado cómodo para caminar en zonas peatonales'
    ],
    requirementsEn: [
      'Light breathable clothing, sunhat, and sunglasses',
      'Comfortable walking shoes for paved plazas'
    ],
    itinerary: [
      {
        time: '14:30',
        titleEs: 'Punto de encuentro en Plaza Gerardo Barrios',
        titleEn: 'Meet at Plaza Gerardo Barrios',
        descriptionEs: 'Introducción al trazado fundacional de la capital y sus transformaciones.',
        descriptionEn: 'Introduction to the historical civic layout and modern revitalizations.'
      },
      {
        time: '15:15',
        titleEs: 'Recorrido interior del Palacio Nacional',
        titleEn: 'National Palace staterooms tour',
        descriptionEs: 'Visita a los salones Rojo, Azul y Amarillo y sus patios interiores de estilo renacentista.',
        descriptionEn: 'Walk through the Red, Blue, and Yellow halls and neoclassical gardens.'
      },
      {
        time: '16:15',
        titleEs: 'Luz y arquitectura en Iglesia El Rosario',
        titleEn: 'Light & concrete sculpture at El Rosario',
        descriptionEs: 'Explicación del diseño del arquitecto Rubén Martínez y el efecto solar de sus vitrales.',
        descriptionEn: 'Learn about master sculptor Rubén Martínez’s iconic brutalist rainbow vault.'
      },
      {
        time: '17:00',
        titleEs: 'Atardecer con café en terraza patrimonial',
        titleEn: 'Rooftop golden hour coffee',
        descriptionEs: 'Conversación abierta degustando café salvadoreño con vista a las cúpulas de la ciudad.',
        descriptionEn: 'Casual conversation enjoying single-origin espresso with city plaza views.'
      }
    ],
    featured: false,
    active: true,
    demoRating: 4.9,
    demoReviewsCount: 35,
    has360: true,
    virtualTour360Url: panoSuchitoto
  },
  {
    id: 'exp-8',
    slug: 'kayak-aguas-termales-lago-coatepeque',
    titleEs: 'Expedición en Kayak y Aguas Termales en Lago de Coatepeque',
    titleEn: 'Coatepeque Volcanic Lake Kayak & Geothermal Hot Springs',
    shortDescriptionEs: 'Rema en las serenas aguas del lago de cráter volcánico y relájate en pozas termales naturales que brotan de la orilla.',
    shortDescriptionEn: 'Paddle across pristine volcanic crater waters and soak in naturally heated thermal vents along the shoreline.',
    descriptionEs: 'El lago de Coatepeque, formado en la caldera de un antiguo volcán colapsado, es famoso por sus aguas limpias y cambios de coloración turquesa. En esta tranquila aventura matutina navegaremos en kayaks dobles o individuales hacia ensenadas vírgenes donde afloran nacimientos de aguas termales volcánicas ricas en minerales curativos.',
    descriptionEn: 'Formed thousands of years ago in a collapsed volcanic caldera, Lake Coatepeque is renowned for its tranquil turquoise waters and majestic crater backdrop. Paddle double or single touring kayaks along quiet bay shorelines where mineral-rich geothermal hot springs bubble up directly through the sand.',
    category: 'naturaleza',
    location: 'Lago de Coatepeque, Santa Ana',
    department: 'Santa Ana',
    coordinates: { lat: 13.8697, lng: -89.5539 },
    meetingPointEs: 'Muelle privado Eco-Lodge Coatepeque, Ribera Sur',
    meetingPointEn: 'Eco-Lodge Coatepeque private dock, South Shore',
    price: 49,
    currency: 'USD',
    priceRange: 'medio',
    duration: '3.5 horas',
    durationHours: 3.5,
    durationType: 'hours',
    languages: ['ES', 'EN'],
    groupType: ['parejas', 'familias', 'grupos'],
    minPeople: 2,
    maxPeople: 10,
    images: [heroCoatepeque, expSantaAna],
    includedEs: [
      'Kayak sit-on-top de travesía, remo ergonómico y chaleco salvavidas homologado',
      'Guía acuático e instructor de remada',
      'Acceso exclusivo a pozas de agua termal natural',
      'Plato de frutas frescas tropicales y agua mineral'
    ],
    includedEn: [
      'High-quality touring kayak, paddle, and certified PFD life vest',
      'Lead waterman guide and paddling coaching',
      'Exclusive access to geothermal lakefront pools',
      'Tropical fruit platter and mineral water'
    ],
    notIncludedEs: [
      'Comida o bebidas adicionales en el restaurante del muelle',
      'Transporte terrestre al lago'
    ],
    notIncludedEn: [
      'Additional restaurant meals or drinks at the dock',
      'Ground transit to the lake'
    ],
    requirementsEs: [
      'Ropa de baño y camiseta con protección UV',
      'Protector solar biodegradable (para no alterar el ecosistema del lago)',
      'Gorra con cordón de sujeción'
    ],
    requirementsEn: [
      'Swimwear and UV protective shirt',
      'Biodegradable sunscreen to protect the freshwater ecosystem',
      'Hat with chin strap'
    ],
    itinerary: [
      {
        time: '08:30',
        titleEs: 'Llegada al muelle e instrucciones de remada',
        titleEn: 'Dockside arrival & paddling instruction',
        descriptionEs: 'Ajuste de chalecos, técnica de paleo eficiente y normas de seguridad en el lago.',
        descriptionEn: 'Life vest fitting, stroke mechanics, and lake navigation rules.'
      },
      {
        time: '09:00',
        titleEs: 'Navegación por la ensenada sur',
        titleEn: 'Scenic paddle across the south bay',
        descriptionEs: 'Remada tranquila con aguas en calma y vista frontal al volcán Santa Ana.',
        descriptionEn: 'Smooth glide with mirror-like morning waters beneath volcanic peaks.'
      },
      {
        time: '10:00',
        titleEs: 'Desembarque en pozas termales naturales',
        titleEn: 'Landfall at natural geothermal thermal vents',
        descriptionEs: 'Baño de inmersión en aguas cálidas y descanso en la orilla volcánica.',
        descriptionEn: 'Relaxing soak in mineral waters bubbling right into the shore.'
      },
      {
        time: '11:15',
        titleEs: 'Remada de retorno y refrigerio de frutas',
        titleEn: 'Return glide & tropical fruit snacks',
        descriptionEs: 'Paseo de vuelta al muelle principal y tiempo de relajación con vistas.',
        descriptionEn: 'Gentle paddle back to the club deck for chilled fruit and refreshments.'
      }
    ],
    featured: true,
    active: true,
    demoRating: 4.9,
    demoReviewsCount: 27,
    has360: true,
    virtualTour360Url: panoCoatepeque
  },
  {
    id: 'exp-9',
    slug: 'taller-gastronomico-mariscos-bahia-jiquilisco',
    titleEs: 'Pesca Artesanal Sostenible y Cocina de Mar en Bahía de Jiquilisco',
    titleEn: 'Sustainable Mangrove Fishery & Coastal Seafood Masterclass',
    shortDescriptionEs: 'Navega entre canales de manglares protegidos, acompaña a pescadores locales y cocina un ceviche de curil salvadoreño.',
    shortDescriptionEn: 'Navigate protected mangrove esteros with local artisanal fishermen and cook traditional curil ceviche.',
    descriptionEs: 'La Bahía de Jiquilisco es el mayor estuario del Pacífico salvadoreño y un sitio protegido RAMSAR. En este viaje culinario y ecológico, abordaremos una lancha tradicional con una cooperativa comunitaria para recolectar curiles y camarón de estanque de forma sostenible. Luego, en una enramada junto al agua, prepararemos un auténtico ceviche negro marinado con limón criollo, cebolla morada y salsa inglesa.',
    descriptionEn: 'Jiquilisco Bay is El Salvador’s largest Pacific wetland estuary and a designated UNESCO Biosphere Reserve. In partnership with a local community cooperative, journey through winding mangrove tunnels to witness sustainable clam foraging. Back on a palapa deck, prepare fresh black curil ceviche with Persian limes and local coastal herbs.',
    category: 'gastronomia',
    location: 'Bahía de Jiquilisco, Usulután',
    department: 'Usulután',
    coordinates: { lat: 13.2167, lng: -88.5500 },
    meetingPointEs: 'Embarcadero Puerto El Triunfo, Cooperativa Manglares',
    meetingPointEn: 'Puerto El Triunfo Main Pier, Mangrove Cooperative Kiosk',
    price: 68,
    currency: 'USD',
    priceRange: 'premium',
    duration: '5 horas',
    durationHours: 5,
    durationType: 'half_day',
    languages: ['ES', 'EN'],
    groupType: ['parejas', 'familias', 'grupos'],
    minPeople: 2,
    maxPeople: 8,
    images: [expCoffee, expSurf],
    includedEs: [
      'Paseo privado en lancha techada por canales de manglares',
      'Acompañamiento de pescador artesanal de la comunidad',
      'Ingredientes completos para el taller de ceviche y mariscada',
      'Bebidas refrescantes de coco natural y cerveza artesanal salvadoreña',
      'Aporte directo al fondo de conservación de tortugas marinas'
    ],
    includedEn: [
      'Private covered boat tour through mangrove channels',
      'Accompaniment by an artisanal community fisher',
      'All fresh ingredients for the black ceviche cooking class',
      'Fresh coconut water and local craft beer',
      'Direct contribution to the local sea turtle conservation initiative'
    ],
    notIncludedEs: [
      'Transporte terrestre hasta Puerto El Triunfo'
    ],
    notIncludedEn: [
      'Ground transit to Puerto El Triunfo'
    ],
    requirementsEs: [
      'Repelente para mosquitos amigable con la fauna acuática',
      'Gorra o sombrero de ala ancha',
      'Ropa ligera de secado rápido'
    ],
    requirementsEn: [
      'Eco-friendly insect repellent',
      'Wide-brimmed sun hat',
      'Quick-drying casual wear'
    ],
    itinerary: [
      {
        time: '09:00',
        titleEs: 'Zarpada desde Puerto El Triunfo',
        titleEn: 'Boat departure from Puerto El Triunfo',
        descriptionEs: 'Navegación lenta hacia los canales de mangle rojo y avistamiento de aves marinas.',
        descriptionEn: 'Cruise into red mangrove channels spotting herons and osprey.'
      },
      {
        time: '10:15',
        titleEs: 'Demostración de pesca tradicional con atarraya',
        titleEn: 'Traditional cast-net fishing demonstration',
        descriptionEs: 'Aprende cómo los pobladores pescan sin alterar el lecho marino.',
        descriptionEn: 'Learn traditional net throwing with zero bottom trawling impact.'
      },
      {
        time: '11:30',
        titleEs: 'Taller de ceviche negro y curiles en la isla',
        titleEn: 'Island curil ceviche masterclass',
        descriptionEs: 'Apertura de moluscos frescos y preparación de la receta secreta costera.',
        descriptionEn: 'Hands-on shucking of fresh bivalves and balancing citrus notes.'
      },
      {
        time: '13:00',
        titleEs: 'Almuerzo frente al estuario y retorno',
        titleEn: 'Waterfront lunch & return cruise',
        descriptionEs: 'Disfruta tu platillo recién preparado frente a la bahía antes del regreso.',
        descriptionEn: 'Savor your freshly crafted meal on the dock before cruising back.'
      }
    ],
    featured: false,
    active: true,
    demoRating: 5.0,
    demoReviewsCount: 21,
    has360: true,
    virtualTour360Url: panoSurfTunco,
    isLocalExperience: true,
    localCategory: 'gastronomia_local',
    hostStory: {
      name: 'Cooperativa de Pescadores Los Manglares',
      community: 'Puerto El Triunfo, Bahía de Jiquilisco',
      storyEs: 'Pescadores artesanales dedicados a la recolección selectiva y no destructiva de moluscos en el humedal RAMSAR, combinando tradición costera con conservación.',
      storyEn: 'Artisanal fishing collective practicing selective non-trawling bivalve harvesting in RAMSAR wetlands, fusing coastal heritage with marine conservation.',
      impactEs: 'Financia patrullajes comunitarios contra la tala de mangle y rescate de nidos de tortuga carey.',
      impactEn: 'Funds community patrols against mangrove logging and hawksbill sea turtle nest protection.'
    }
  },
  {
    id: 'exp-10',
    slug: 'arqueologia-maya-tazumal-joya-de-ceren',
    titleEs: 'Mundo Maya: Joya de Cerén "La Pompeya de América" y Tazumal',
    titleEn: 'Maya Heartland: Joya de Cerén UNESCO Site & Tazumal Pyramid',
    shortDescriptionEs: 'Camina por aldeas mayas conservadas bajo ceniza volcánica y visita la pirámide ceremonial más alta del país.',
    shortDescriptionEn: 'Step inside the best-preserved pre-Columbian village frozen in volcanic ash and explore Tazumal pyramid.',
    descriptionEs: 'Joya de Cerén es el único sitio en Mesoamérica donde no solo vemos templos de élite, sino cómo vivían, dormían, cocinaban y sembraban los campesinos mayas hace 1,400 años, preservados de forma milagrosa bajo capas de ceniza volcánica tras la erupción de Loma Caldera. Complementaremos el viaje con Tazumal en Chalchuapa, la estructura arqueológica más imponente del occidente salvadoreño.',
    descriptionEn: 'Declared a UNESCO World Heritage site, Joya de Cerén is hailed as the Pompeii of the Americas. Unlike ceremonial temples, Cerén offers a rare, intimate window into daily ancient domestic life—kitchens, sleeping quarters, temazcal saunas, and farm plots intact under volcanic ash. Followed by Tazumal, the grandest stepped pyramid in El Salvador.',
    category: 'cultura',
    location: 'San Juan Opico y Chalchuapa',
    department: 'La Libertad',
    coordinates: { lat: 13.8267, lng: -89.3622 },
    meetingPointEs: 'Museo de Sitio Joya de Cerén, San Juan Opico',
    meetingPointEn: 'Joya de Cerén Site Museum Entrance, San Juan Opico',
    price: 42,
    currency: 'USD',
    priceRange: 'medio',
    duration: '4.5 horas',
    durationHours: 4.5,
    durationType: 'half_day',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas', 'familias', 'grupos'],
    minPeople: 1,
    maxPeople: 12,
    images: [expTazumal],
    includedEs: [
      'Entradas y admisiones oficiales a Joya de Cerén y Tazumal',
      'Arqueólogo o guía patrimonial certificado durante todo el recorrido',
      'Transporte con aire acondicionado entre ambos sitios arqueológicos',
      'Degustación de atol de elote tradicional'
    ],
    includedEn: [
      'Official admission passes to both Joya de Cerén and Tazumal',
      'Certified heritage guide and archaeologist accompaniment',
      'Comfortable AC shuttle between both archaeological sites',
      'Traditional warm sweetcorn atol beverage'
    ],
    notIncludedEs: [
      'Almuerzo formal en Chalchuapa',
      'Gastos personales en tiendas de artesanías'
    ],
    notIncludedEn: [
      'Sit-down lunch in Chalchuapa',
      'Personal souvenir purchases'
    ],
    requirementsEs: [
      'Calzado cerrado y cómodo',
      'Sombrero o sombrilla para el sol',
      'Cámara sin flash dentro de los museos de sitio'
    ],
    requirementsEn: [
      'Closed-toe walking shoes',
      'Sun hat or umbrella',
      'Camera (non-flash inside site museums)'
    ],
    itinerary: [
      {
        time: '08:45',
        titleEs: 'Encuentro en Museo Joya de Cerén',
        titleEn: 'Meet at Joya de Cerén Museum',
        descriptionEs: 'Visita guiada al museo introductorio y piezas arqueológicas preservadas.',
        descriptionEn: 'Introductory museum walkthrough explaining the volcanic eruption.'
      },
      {
        time: '09:30',
        titleEs: 'Recorrido por las estructuras de la aldea',
        titleEn: 'Walk through preserved village compounds',
        descriptionEs: 'Observación de las casas de bajareque, bodega comunitaria y sauna maya temazcal.',
        descriptionEn: 'Explore ancient domestic structures, storerooms, and temazcal sweat baths.'
      },
      {
        time: '11:15',
        titleEs: 'Traslado a Tazumal en Chalchuapa',
        titleEn: 'Transit to Tazumal in Chalchuapa',
        descriptionEs: 'Viaje corto de 30 minutos a través de plantaciones agrícolas.',
        descriptionEn: 'Scenic 30-minute shuttle ride through fertile valleys.'
      },
      {
        time: '12:00',
        titleEs: 'Exploración de la Gran Pirámide de Tazumal',
        titleEn: 'Tazumal pyramid exploration & concluding atol',
        descriptionEs: 'Caminata alrededor de la acrópolis ceremonial y degustación de atol caliente.',
        descriptionEn: 'Walk around the ceremonial stepped acropolis followed by warm traditional atol.'
      }
    ],
    featured: false,
    active: true,
    demoRating: 4.8,
    demoReviewsCount: 22,
    has360: true,
    virtualTour360Url: panoSuchitoto
  },
  {
    id: 'exp-11',
    slug: 'parapente-sobre-lago-ilopango',
    titleEs: 'Vuelo Tándem en Parapente sobre la Caldera de Ilopango',
    titleEn: 'Tandem Paragliding Flight Over Ilopango Volcanic Crater',
    shortDescriptionEs: 'Siente la libertad de volar como un ave sobre el inmenso lago volcánico de Ilopango con pilotos instructores certificados.',
    shortDescriptionEn: 'Soar like a bird on thermal currents above the vast volcanic crater of Lake Ilopango with licensed tandem pilots.',
    descriptionEs: 'La caldera de Ilopango, generada por una de las mega-erupciones más potentes del planeta en la era clásica, hoy es un majestuoso espejo de agua rodeado de colinas verdes. Despegaremos desde una ladera de despegue natural en San Salvador Este para realizar un vuelo biplaza de 20 a 30 minutos aprovechando las corrientes térmicas, disfrutando de vistas cinematográficas de la capital y el lago.',
    descriptionEn: 'Formed by an ancient supervolcano explosion, Lake Ilopango is an expansive crater lake nestled against lush volcanic ridges. Launch from a scenic natural ridge in East San Salvador for a thrilling 20-30 minute tandem flight with a licensed pilot, soaring above blue water and verdant peaks.',
    category: 'aventura',
    location: 'San Salvador Este / Ilopango',
    department: 'San Salvador',
    coordinates: { lat: 13.6706, lng: -89.0558 },
    meetingPointEs: 'Mirador Panorámico La Herradura, Carretera Panorámica',
    meetingPointEn: 'La Herradura Overlook, Panoramic Mountain Highway',
    price: 85,
    currency: 'USD',
    priceRange: 'premium',
    duration: '2 horas',
    durationHours: 2,
    durationType: 'hours',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas'],
    minPeople: 1,
    maxPeople: 4,
    images: [heroCoatepeque, expSurf],
    includedEs: [
      'Piloto tándem profesional con licencia internacional FAI',
      'Equipo completo de vuelo homologado y paracaídas de emergencia',
      'Video en alta definición con cámara GoPro montada en selfie-stick',
      'Seguro de actividad y transporte de regreso al despegue'
    ],
    includedEn: [
      'Certified tandem flight pilot with international FAI credentials',
      'Safety harness, certified wing, and emergency backup parachute',
      'Full HD GoPro action video package included',
      'Activity liability insurance and ground shuttle back to launch ridge'
    ],
    notIncludedEs: [
      'Transporte desde hoteles de la ciudad hasta la rampa'
    ],
    notIncludedEn: [
      'Hotel pickup in downtown San Salvador'
    ],
    requirementsEs: [
      'Peso corporal entre 40 kg y 100 kg',
      'Ropa deportiva y tenis con agujetas cerrados',
      'No se requiere experiencia previa'
    ],
    requirementsEn: [
      'Passenger weight between 40kg (88lbs) and 100kg (220lbs)',
      'Sportswear and lace-up athletic sneakers',
      'No prior flight experience needed'
    ],
    itinerary: [
      {
        time: '13:00',
        titleEs: 'Recepción en la rampa de despegue',
        titleEn: 'Arrival at ridge launch platform',
        descriptionEs: 'Monitoreo de vientos, charla de despegue y ajuste de arnés.',
        descriptionEn: 'Wind analysis, safety briefing, and harness fitting.'
      },
      {
        time: '13:30',
        titleEs: 'Despegue y planeo sobre la caldera',
        titleEn: 'Launch & aerial glide over the crater',
        descriptionEs: 'Carrera suave de 5 pasos y vuelo de planeo sobre el espejo de agua.',
        descriptionEn: 'Short 5-step run into the wind, soaring across lake vistas.'
      },
      {
        time: '14:00',
        titleEs: 'Aterrizaje seguro y entrega de video',
        titleEn: 'Touchdown & video transfer',
        descriptionEs: 'Aterrizaje suave en el campo designado y descarga de archivos de video.',
        descriptionEn: 'Gentle touchdown on landing green and digital video transfer.'
      }
    ],
    featured: false,
    active: true,
    demoRating: 5.0,
    demoReviewsCount: 18,
    has360: true,
    virtualTour360Url: panoCoatepeque
  },
  {
    id: 'exp-12',
    slug: 'ruta-historica-morazan-paz-memoria',
    titleEs: 'Ruta de la Paz y Memoria Viva en las Montañas de Morazán',
    titleEn: 'Peace Route & Living Mountain Memory in Morazán',
    shortDescriptionEs: 'Visita Perquín, el Museo de la Revolución y puentes colgantes guiado por excombatientes hoy promotores de paz.',
    shortDescriptionEn: 'Travel the pine-covered highlands of Perquín, the Peace Museum, and nature trails guided by local peacemakers.',
    descriptionEs: 'Las montañas nororientales de Morazán guardan una de las memorias históricas más profundas del país y hoy son un ejemplo conmovedor de reconciliación y turismo comunitario. Guiado por habitantes de la zona que vivieron el conflicto armado, visitarás el Museo de la Revolución de Perquín, los antiguos campamentos subterráneos y las cascadas cristalinas del río Sapo.',
    descriptionEn: 'Morazán’s pine-clad highlands tell a profound story of historical resilience and living reconciliation. Guided by local community hosts who lived through the peace accords, visit Perquín’s museum, walk preserved mountain trails, and swim in the emerald waters of the Rio Sapo protected valley.',
    category: 'cultura',
    location: 'Perquín y Río Sapo, Morazán',
    department: 'Morazán',
    coordinates: { lat: 13.9564, lng: -88.1611 },
    meetingPointEs: 'Museo de la Revolución, Perquín, Morazán',
    meetingPointEn: 'Museum of the Revolution Entrance, Perquín',
    price: 50,
    currency: 'USD',
    priceRange: 'medio',
    duration: '5.5 horas',
    durationHours: 5.5,
    durationType: 'full_day',
    languages: ['ES', 'EN'],
    groupType: ['individual', 'parejas', 'grupos'],
    minPeople: 2,
    maxPeople: 10,
    images: [expSuchitoto, heroCoatepeque],
    includedEs: [
      'Guía comunitario con memoria testimonial viva',
      'Ingreso al Museo de la Revolución y cerro El Pericón',
      'Visita y tiempo de descanso en la reserva natural del Río Sapo',
      'Almuerzo campesino en restaurante comunitario'
    ],
    includedEn: [
      'Local community testimonial guide',
      'Entry tickets to the Museum and El Pericón hill',
      'Visit and swim time at the protected Río Sapo natural reserve',
      'Traditional homestyle lunch at community-run eatery'
    ],
    notIncludedEs: [
      'Transporte hasta el departamento de Morazán'
    ],
    notIncludedEn: [
      'Transportation to Morazán department'
    ],
    requirementsEs: [
      'Ropa cómoda y suéter para el clima de montaña',
      'Calzado adecuado para senderos de tierra y pino',
      'Actitud de respeto y empatía hacia los testimonios comunitarios'
    ],
    requirementsEn: [
      'Comfortable clothing and a light sweater for pine forest breezes',
      'Walking shoes suited for unpaved forest trails',
      'Respectful and open-minded attitude for community dialogue'
    ],
    itinerary: [
      {
        time: '09:00',
        titleEs: 'Encuentro y bienvenida en Perquín',
        titleEn: 'Meet & orientation in Perquín',
        descriptionEs: 'Bienvenida por parte de los guías comunitarios y reseña geográfica.',
        descriptionEn: 'Welcome by local community hosts and historical setting.'
      },
      {
        time: '09:30',
        titleEs: 'Visita guiada al Museo de la Revolución',
        titleEn: 'Museum of the Revolution guided tour',
        descriptionEs: 'Recorrido por archivos fotográficos, transmisiones históricas de Radio Venceremos y objetos de época.',
        descriptionEn: 'Walk through archive rooms, field radio artifacts, and peace accord memorabilia.'
      },
      {
        time: '11:30',
        titleEs: 'Caminata hacia trincheras y túneles',
        titleEn: 'Nature walk to preserved hillside shelters',
        descriptionEs: 'Exploración de veredas entre pinares donde se organizaban los campamentos comunitarios.',
        descriptionEn: 'Forest walk along pine trails highlighting natural camouflage techniques.'
      },
      {
        time: '13:00',
        titleEs: 'Almuerzo local y descanso en Río Sapo',
        titleEn: 'Homestyle lunch & Río Sapo freshwater swim',
        descriptionEs: 'Comida típica de Morazán y descanso en las aguas turquesas del río más limpio del país.',
        descriptionEn: 'Hearty local meal followed by a visit to the turquoise waters of Río Sapo.'
      }
    ],
    featured: false,
    active: true,
    demoRating: 4.9,
    demoReviewsCount: 16,
    has360: true,
    virtualTour360Url: panoSuchitoto,
    isLocalExperience: true,
    localCategory: 'historia_local',
    hostStory: {
      name: 'Asociación de Guías Comunitarios de Perquín',
      community: 'Perquín y Río Sapo, Morazán',
      storyEs: 'Habitantes locales que vivieron el conflicto civil salvadoreño y hoy canalizan su memoria hacia la educación para la paz y la protección del río más limpio del país.',
      storyEn: 'Local villagers who lived through El Salvador’s peace accords, now channeling oral history into peace education and clean river basin protection.',
      impactEs: 'Mantenimiento de bibliotecas comunitarias y viveros de reforestación de pino nativo en Morazán.',
      impactEn: 'Supports rural community youth libraries and native pine reforestation nurseries in Morazán.'
    }
  }
];

export const DEPARTMENTS = [
  'Santa Ana',
  'Ahuachapán',
  'Sonsonate',
  'La Libertad',
  'San Salvador',
  'Cuscatlán',
  'Usulután',
  'Morazán'
];
