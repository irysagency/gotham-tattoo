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
  name: "NOIR INK",
  tagline: "Là où la peau devient toile.",
  description:
    "Niché au cœur du Marais, NOIR INK est un studio de tatouage privé pensé comme un atelier d'artiste. Depuis 2015, nous mettons un point d'honneur à ne réaliser que des pièces uniques, dessinées à la main et conçues pour traverser le temps. Ici, pas de catalogue impersonnel : chaque projet commence par une rencontre, une conversation, une intention. Lumière tamisée, encres de qualité supérieure et hygiène irréprochable — tout est réuni pour faire de votre tatouage une expérience à la hauteur de l'œuvre que vous porterez à vie.",

  phone: "+33 1 42 71 38 24",
  email: "contact@noirink.fr",
  address: {
    street: "14 rue des Gravilliers",
    city: "Paris",
    zip: "75003",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=14+rue+des+Gravilliers+75003+Paris",
    coordinates: {
      lat: 48.8654,
      lng: 2.3552,
    },
  },

  socials: {
    instagram: "https://instagram.com/noirink.paris",
    tiktok: "https://tiktok.com/@noirink.paris",
  },

  accentColor: "#c0392b",

  quote: {
    text: "Un tatouage n'est pas une décoration. C'est une décision.",
    author: "NOIR INK",
  },

  establishedYear: 2015,

  heroImage:
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=2070&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800",

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
      name: "Mathis Lefèvre",
      specialty: "Réalisme · Noir & gris",
      bio: "Formé à Bruxelles puis à Berlin, Mathis transforme le noir et gris en portraits d'une précision saisissante. Chaque ombre, chaque texture est pensée pour traverser les années sans rien perdre de sa profondeur.",
      instagram: "https://instagram.com/mathis.noirink",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&h=1100&q=80",
    },
    {
      name: "Léa Moreau",
      specialty: "Blackwork · Ornemental",
      bio: "Léa puise dans la dentelle, la géométrie sacrée et l'ornement pour composer des pièces qui épousent le corps. Son trait, d'un noir profond et parfaitement maîtrisé, fait de chaque tatouage une parure singulière.",
      instagram: "https://instagram.com/lea.noirink",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&h=1100&q=80",
    },
    {
      name: "Inès Caron",
      specialty: "Japonais · Irezumi",
      bio: "Gardienne de la tradition japonaise, Inès dessine de vastes compositions — carpes, vagues et pivoines — dans le plus grand respect de l'irezumi. Ses fonds travaillés donnent à chaque motif un mouvement vivant.",
      instagram: "https://instagram.com/ines.noirink",
      photo:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&h=1100&q=80",
    },
  ],

  services: [
    {
      name: "Projet sur-mesure",
      description:
        "Une pièce entièrement dessinée pour vous, de la première esquisse à la dernière séance. Nous prenons le temps de comprendre votre histoire avant de la graver dans la peau.",
      priceRange: "À partir de 150 €",
    },
    {
      name: "Flash & pièces du studio",
      description:
        "Une sélection de motifs originaux imaginés par nos artistes, prêts à être tatoués. Des designs uniques, jamais reproduits deux fois à l'identique.",
      priceRange: "80 € – 250 €",
    },
    {
      name: "Grandes pièces & dos complet",
      description:
        "Manchettes, dos, jambes : les projets d'envergure se construisent en plusieurs séances, dans une cohérence absolue du premier au dernier trait.",
      priceRange: "Sur devis · 120 €/h",
    },
    {
      name: "Recouvrement & retouche",
      description:
        "Nous redonnons vie à un ancien tatouage ou le faisons disparaître sous une nouvelle création, pensée pour le sublimer plutôt que le masquer.",
      priceRange: "Sur consultation",
    },
  ],

  galleryStyles: ["Blackwork", "Realism", "Japanese", "Traditional"],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=1200&q=80",
      alt: "Tatouage blackwork à l'encre noire sur l'avant-bras",
      style: "Blackwork",
    },
    {
      src: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80",
      alt: "Composition graphique noire et géométrique",
      style: "Blackwork",
    },
    {
      src: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=1200&q=80",
      alt: "Lignes pleines et aplats de noir profond",
      style: "Blackwork",
    },
    {
      src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=80",
      alt: "Portrait réaliste tatoué en noir et gris",
      style: "Realism",
    },
    {
      src: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=80",
      alt: "Détail réaliste finement ombré",
      style: "Realism",
    },
    {
      src: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?auto=format&fit=crop&w=1200&q=80",
      alt: "Travail d'ombre réaliste sur la peau",
      style: "Realism",
    },
    {
      src: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=1200&q=80",
      alt: "Tatouage japonais coloré façon irezumi",
      style: "Japanese",
    },
    {
      src: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=1200&q=80",
      alt: "Motif traditionnel japonais sur le bras",
      style: "Japanese",
    },
    {
      src: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?auto=format&fit=crop&w=1200&q=80",
      alt: "Composition japonaise aux fonds travaillés",
      style: "Japanese",
    },
    {
      src: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1200&q=80",
      alt: "Tatouage traditionnel old school aux couleurs franches",
      style: "Traditional",
    },
    {
      src: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?auto=format&fit=crop&w=1200&q=80",
      alt: "Flash traditionnel au contour épais",
      style: "Traditional",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
      alt: "Pièce traditionnelle pleine de caractère",
      style: "Traditional",
    },
  ],
};

export default studio;
