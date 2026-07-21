export type Artwork = {
  src: string;
  alt: string;
};

export type Artist = {
  slug: string;
  name: string;
  discipline: string;
  tagline: string;
  statement: string;
  bio: string[];
  profileIllustration: string;
  cover: string;
  works: Artwork[];
};

function collection(folder: string, artistName: string, files: string[]): Artwork[] {
  return files.map((file, i) => ({
    src: encodeURI(`/ART/${folder}/${file}`),
    alt: `Work by ${artistName}, installed view ${i + 1}`,
  }));
}

export const artists: Artist[] = [
  {
    slug: "marzi",
    name: "Marzi Fakhr",
    discipline: "Visual Art — Vancouver",
    tagline:
      "Contemporary textured and abstract paintings that bring depth, movement, and character to interior spaces.",
    statement:
      "Art should not only complement an interior but also create a lasting emotional connection and a sense of atmosphere.",
    bio: [
      "Marzi Fakhr is an Iranian-Canadian visual artist based in Vancouver, BC. She holds a Bachelor's degree in Painting from Alzahra University in Tehran and has over twenty years of experience as a professional artist.",
      "Marzi specializes in contemporary textured and abstract paintings, creating artworks that bring depth, movement, and character to interior spaces. Her process is driven by experimentation with layered textures, rich surfaces, and balanced compositions, resulting in pieces that feel both modern and timeless. Working primarily with acrylics and mixed media, she enjoys exploring different materials and techniques to create unique visual experiences. Every painting is thoughtfully handcrafted, with careful attention to texture, color harmony, and fine details.",
      "In addition to her personal collections, Marzi creates custom artwork tailored to each client's vision and space. She believes that art should not only complement an interior but also create a lasting emotional connection and a sense of atmosphere.",
    ],
    profileIllustration: encodeURI("/ART/MARZI ART/MARZI-Photoroom.png"),
    cover: encodeURI("/ART/MARZI ART/marzi-gold-botanical-canopy.png"),
    works: collection("MARZI ART", "Marzi Fakhr", [
      "marzi-gold-botanical-canopy.png",
      "marzi-gold-burst.png",
      "marzi-muted-skyline-texture.png",
      "marzi-textured-coastal-waves.png",
      "marzi-minimal-texture-arc.png",
      "marzi-layered-earth-fracture.png",
      "marzi-gold-orbit-relief.png",
      "marzi-soft-mountain-relief.png",
      "marzi-silver-gold-current.png",
      "marzi-diptych-terraced-horizon.png",
      "marzi-gold-silver-textured-field.png",
      "marzi-gold-floral-study.png",
    ]),
  },
  {
    slug: "naser",
    name: "Naser Niki",
    discipline: "Custom Glass-Work",
    tagline:
      "Architectural glass that blends traditional craftsmanship with innovative fabrication techniques.",
    statement:
      "For more than three decades, Naser Niki has dedicated his career to advancing the art and technology of architectural glass.",
    bio: [
      "Naser Niki is a Canadian architectural glass artist, entrepreneur, and innovator best known as the Founder and Artistic Director of Studio G3 Glass, a British Columbia–based company specializing in custom architectural and decorative glass. He co-founded the company in 1996 with Johnny Tse, combining their expertise in art glass and graphic design to create one of North America's leading specialty glass manufacturers.",
      "For more than three decades, Naser Niki has dedicated his career to advancing the art and technology of architectural glass. His work blends traditional craftsmanship with innovative fabrication techniques, producing large-scale textured, kiln-formed, sand-carved, etched, and decorative glass installations for luxury residential, commercial, hospitality, and institutional projects worldwide.",
      "One of Niki's most recognized achievements was leading the creation of the custom textured glass cladding for the 2010 Vancouver Olympic Cauldron.",
    ],
    profileIllustration: encodeURI("/ART/NASER ART/NASER-Photoroom.png"),
    cover: encodeURI("/ART/NASER ART/naser-textured-glass-panel.png"),
    works: collection("NASER ART", "Naser Niki", [
      "naser-textured-glass-panel.png",
      "naser-etched-glass-screen.png",
      "naser-architectural-glass-relief.png",
    ]),
  },
  {
    slug: "noemi",
    name: "Noemi Kozikowska",
    discipline: "Visual Art — Vancouver",
    tagline:
      "Exploring colour and texture through the lens of the psychic undertows that influence everyday existence.",
    statement:
      "Exploring colour and texture through the lens of the psychic undertows that underlie and influence everyday existence.",
    bio: [
      "Noemi Kozikowska is an artist working and living in the Lower Mainland of B.C. Born in Poland, since early childhood she has focused her time and energy on art creation, and on developing various skills pertaining to this practice. She earned her Bachelor of Fine Arts degree at Simon Fraser University, majoring in both Fine Arts and Humanities.",
      "For the past decade she has engaged her personal art practice alongside various professional decorative art practices. During this time, she has had the privilege of learning and mastering various art practices — some of which are now almost obsolete — from some of the best in the field.",
      "Kozikowska's personal artistic practice revolves around exploring colour and texture through the lens of the psychic undertows that underlie and influence everyday existence. As a professional fine and decorative artist, she has trained herself to work in a large variety of styles and mediums.",
    ],
    profileIllustration: encodeURI("/ART/NOEMI ART/NOEMI-Photoroom.png"),
    cover: encodeURI("/ART/NOEMI ART/noemi-aqua-wave-texture.png"),
    works: collection("NOEMI ART", "Noemi Kozikowska", [
      "noemi-aqua-wave-texture.png",
      "noemi-coastal-posts.png",
      "noemi-gold-mineral-bloom.png",
      "noemi-monochrome-gold-passage.png",
      "noemi-dunes-at-dusk.png",
      "noemi-coastal-triptych.png",
      "noemi-blue-gold-drift.png",
      "noemi-panoramic-gold-horizon.png",
      "noemi-aqua-gold-panel-suite.png",
      "noemi-neutral-diptych-strata.png",
      "noemi-blue-gold-patina.png",
      "noemi-black-gold-contour.png",
      "noemi-pale-modular-panels.png",
      "noemi-blue-ochre-mist.png",
      "noemi-minimal-horizon.png",
      "noemi-marble-gold-vertical.png",
      "noemi-gold-grey-wave-field.png",
      "noemi-gold-botanical-drift.png",
      "noemi-gold-blossom-branches.png",
      "noemi-pale-textured-landscape.png",
      "noemi-quiet-shore-horizon.png",
      "noemi-aqua-gold-diptych.png",
      "noemi-gold-vertical-plume.png",
      "noemi-soft-beach-horizon.png",
      "noemi-gold-line-triptych.png",
      "noemi-smoky-gold-vertical.png",
      "noemi-muted-coastal-expanse.png",
    ]),
  },
  {
    slug: "ronan",
    name: "Ronan Boyle",
    discipline: "Visual Art — Vancouver",
    tagline:
      "An edgy street aesthetic with a clear sophistication, rooted in '60s Pop and New York punk DIY.",
    statement:
      "His main inspirations stem from the Pop movement of the '60s and the Do-It-Yourself movement of New York's punk scene.",
    bio: [
      "Ronan Boyle was born in Derry, Northern Ireland and came to Canada as a child in 1974. Drawing, painting, and scouting since childhood, he is a self-taught artist.",
      "His main inspirations stem from the Pop movement of the '60s and the Do-It-Yourself movement of New York's punk scene in the late '70s and early '80s. His work has an edgy street aesthetic with a clear sophistication.",
    ],
    profileIllustration: encodeURI("/ART/RONAN ART/RONAN-Photoroom.png"),
    cover: encodeURI("/ART/RONAN ART/DSC04271.jpg"),
    works: collection("RONAN ART", "Ronan Boyle", [
      "DSC04253.jpg",
      "DSC04271.jpg",
      "DSC04313.jpg",
      "1gJX7GCQ.jpg",
      "Churchill St - 5989 (Vancouver) - The One Staging and Claire Gong - 36.jpg",
      "Churchill St - 5989 (Vancouver) - The One Staging and Claire Gong - 44.jpg",
      "Fairfax Cres - 8531 (Richmond) - The One Staging - 18.jpg",
      "Minler Rd - 8271 (Richmond) - The One Staging - 21.jpg",
      "oG8vZfRw.jpg",
      "RnGZD-5Q.jpg",
      "Sandhurst Pl - 1416 (West Vancouver) - The One Staging - 17.jpg",
      "Sandhurst Pl - 1416 (West Vancouver) - The One Staging - 22.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 35.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 73.jpg",
      "_d4OHMfQ.jpg",
    ]),
  },
];

export function getArtist(slug: string | undefined): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}
