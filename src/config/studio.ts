/**
 * SINGLE SOURCE OF TRUTH
 * ----------------------
 * Every piece of client-specific information for this tattoo studio website
 * lives in this file and ONLY this file. To launch the template for a new
 * studio, edit the values below — never touch the components.
 *
 * Colors, fonts, copy, contact details, social links, artists, services and
 * the gallery are all driven from here.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Artist = {
  name: string;
  specialty: string;
  bio: string;
  instagram: string;
  photo: string;
};

export type Service = {
  name: string;
  description: string;
  priceRange: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  style: string;
};

export type StudioConfig = {
  /** Studio name — used as the logo and across the site. */
  name: string;
  /** Short, evocative line shown in the hero. */
  tagline: string;
  /** Longer studio story, shown in the About section. */
  description: string;
  /** Personal headline for the About section. */
  aboutTitle: string;
  /** Three key figures shown under the About text. */
  stats: Stat[];

  /** Contact details. */
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    zip: string;
    /** Link opened when the address / "Itinéraire" button is clicked. */
    googleMapsUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };

  /** Social profiles. */
  socials: {
    instagram: string;
    tiktok: string;
  };

  /** Brand accent color (hex). Drives the gold/accent across the whole UI. */
  accentColor: string;

  /** Short pull-quote shown in the Quote section. */
  quote: {
    text: string;
    author: string;
  };

  /** Year the studio opened — used in the About section and footer. */
  establishedYear: number;

  /** Hero background image (dark, cinematic). */
  heroImage: string;
  /** Image used in the About section. */
  aboutImage: string;

  /** Top navigation links (anchor scroll). */
  nav: NavLink[];
  /** Label of the main call-to-action button. */
  ctaLabel: string;

  artists: Artist[];
  services: Service[];

  /** Style filters available in the gallery. */
  galleryStyles: string[];
  gallery: GalleryImage[];
};

export const studio: StudioConfig = {
  name: "GOTHAM TATTOO",
  tagline: "Vos légendes, gravées dans la peau.",
  description:
    "À Agde, Gotham Tattoo Art Studio est un atelier collectif où la culture pop devient encre. Manga, jeux vidéo, comics et héros de toujours y côtoient la gravure sombre et le noir & gris le plus fin. Ici, chaque projet est une pièce unique, dessinée à la main et pensée pour rendre hommage à ce qui vous a marqué à vie. Ambiance feutrée, univers gothique et exigence de studio privé — on prend le temps de faire les choses bien.",
  aboutTitle: "Un repaire d'artistes, pas une chaîne.",
  stats: [
    { value: "3", label: "Artistes résidents" },
    { value: "∞", label: "Univers pop & manga" },
    { value: "100%", label: "Créations sur-mesure" },
  ],

  phone: "06 00 00 00 00",
  email: "gothamtattooartstudio@gmail.com",
  address: {
    street: "34 Rue Jean Roger",
    city: "Agde",
    zip: "34300",
    googleMapsUrl: "https://maps.app.goo.gl/2JFk1YBpknBXHxPW7",
    coordinates: {
      lat: 43.313266,
      lng: 3.4685585,
    },
  },

  socials: {
    instagram: "https://www.instagram.com/gothamtattooartstudio/",
    tiktok: "",
  },

  accentColor: "#d4a437",

  quote: {
    text: "Derrière chaque tattoo, il y a une personne qui dessine, qui doute, qui crée.",
    author: "Gotham Tattoo Art Studio",
  },

  establishedYear: 2021,

  heroImage: "/images/hero/hero-02.jpg",
  aboutImage: "/images/about/shop-04.jpg",

  nav: [
    { label: "Le studio", href: "#about" },
    { label: "Artistes", href: "#artists" },
    { label: "Galerie", href: "#gallery" },
    { label: "Prestations", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel: "Prendre RDV",

  artists: [
    {
      name: "Pick",
      specialty: "Pop culture · Manga · Japonais",
      bio: "Fondateur de Gotham, Pick donne vie aux héros de la pop culture — de Dragon Ball à Fullmetal Alchemist — en couleur éclatante comme en blackwork. Un trait précis, un sens du détail obsessionnel et l'envie de faire kiffer chaque client avec une pièce dont il se souviendra.",
      instagram: "https://www.instagram.com/pick.gotham.ttt/",
      photo: "/images/artists/pick.jpg",
    },
    {
      name: "Matagoth",
      specialty: "Gravure · Noir & gris · Dark",
      bio: "Inspirée par l'art ancien, le mystique et le symbolique, Matagoth compose des pièces en gravure et noir & gris à l'atmosphère médiévale et onirique. Soleils, créatures et blasons naissent d'un dotwork patient et d'un univers profondément personnel.",
      instagram: "https://www.instagram.com/matagoth.ttt/",
      photo: "/images/artists/matagoth.jpg",
    },
    {
      name: "Panda",
      specialty: "Custom · Pop art",
      bio: "Artiste custom résident, Panda peint et détourne les icônes de la pop culture — One Piece, Mario, Rick & Morty — sur bois et supports uniques. Ses créations colorées et son trait cartoon habillent le studio et prolongent l'univers Gotham hors de la peau.",
      instagram: "https://www.instagram.com/pandartkustom/",
      photo: "/images/artists/panda.jpg",
    },
  ],

  services: [
    {
      name: "Projet sur-mesure",
      description:
        "Votre personnage, votre univers, votre histoire : une pièce entièrement dessinée pour vous, de la première esquisse à la dernière séance. Pop culture, manga, réalisme ou perso — on la conçoit ensemble.",
      priceRange: "À partir de 150 €",
    },
    {
      name: "Journée flash à volonté",
      description:
        "Le concept signature du studio : une journée dédiée où vous piochez dans une sélection de flashs originaux à tarif fixe. Des designs uniques, jamais reproduits deux fois à l'identique.",
      priceRange: "Tarif journée",
    },
    {
      name: "Gravure & noir & gris",
      description:
        "L'univers dark et mystique de l'atelier : gravure, dotwork et noir & gris finement ombrés, pour des pièces à l'atmosphère ancienne et symbolique qui traversent le temps.",
      priceRange: "Sur devis",
    },
    {
      name: "Strass dentaire",
      description:
        "La touche détail du studio : pose de strass dentaire pour un sourire qui a du caractère. Une prestation soignée, réalisée avec le même souci d'esthétique que nos tatouages.",
      priceRange: "Sur consultation",
    },
  ],

  galleryStyles: ["Pop culture", "Manga", "Noir & gris", "Gravure"],

  gallery: [
    {
      src: "/images/gallery/01.jpg",
      alt: "Tatouage Deadpool en couleur sur l'avant-bras",
      style: "Pop culture",
    },
    {
      src: "/images/gallery/02b.jpg",
      alt: "Cercle de transmutation Fullmetal Alchemist en blackwork",
      style: "Manga",
    },
    {
      src: "/images/gallery/03.jpg",
      alt: "C-18 (Dragon Ball) tatouée en couleur sur le bras",
      style: "Manga",
    },
    {
      src: "/images/gallery/04.jpg",
      alt: "Dragon Mortal Kombat en blackwork sur le bras",
      style: "Pop culture",
    },
    {
      src: "/images/gallery/05.jpg",
      alt: "Soleil gravé en noir & gris sur le bras",
      style: "Gravure",
    },
    {
      src: "/images/gallery/06b.jpg",
      alt: "Masse d'armes gravée en noir & gris sur l'avant-bras",
      style: "Gravure",
    },
    {
      src: "/images/gallery/07.jpg",
      alt: "Chat chevalier en dotwork sur la jambe",
      style: "Noir & gris",
    },
    {
      src: "/images/gallery/08.jpg",
      alt: "Chat samouraï gravé en noir & gris sur le bras",
      style: "Noir & gris",
    },
  ],
};

export default studio;
