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
    cover: encodeURI("/ART/MARZI ART/9ntrzREA.jpg"),
    works: collection("MARZI ART", "Marzi Fakhr", [
      "9ntrzREA.jpg",
      "KgV43vnw.jpg",
      "Maple Rd - 6120 (Richmond) - The One Staging - 36.jpg",
      "Marguerite St - 6638 (Vancouver) - The One Staging - 61.jpg",
      "Marguerite St - 6638 (Vancouver) - The One Staging - 62.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 8.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 10.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 24.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 48.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 50.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 63.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 66.jpg",
      "Yew St - 5188 (Vancouve) - The One Staging - 77.jpg",
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
    cover: encodeURI("/ART/NASER ART/DSC02744.jpg"),
    works: collection("NASER ART", "Naser Niki", [
      "DSC02744.jpg",
      "Cambie St - 885 (2500) (Vancouver) - The One Staging - 38.jpg",
      "W Georgia St - 1128 (4903) (Vancouver) - The One Staging - 3.jpg",
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
    cover: encodeURI("/ART/NOEMI ART/DSC02737.jpg"),
    works: collection("NOEMI ART", "Noemi Kozikowska", [
      "DSC02737.jpg",
      "5hZj5IJQ.jpg",
      "7mexQghA.jpg",
      "8HeCSiIA.jpg",
      "Armstrong St - 7577 (Richmond) - The One Staging - 5.jpg",
      "Cambie St - 885 (2500) (Vancouver) - The One Staging - 33.jpg",
      "Cambie St - 885 (2500) (Vancouver) - The One Staging - 40.jpg",
      "Churchill St - 5989 (Vancouver) - The One Staging and Claire Gong - 43.jpg",
      "Claysmith Rd - 8128 (Richmond) - The One Staging - 10.jpg",
      "Elsmore Rd - 8411 (Richmond) - The One Staging - 8.jpg",
      "Fairfax Cres - 8531 (Richmond) - The One Staging - 9.jpg",
      "Kirkmond Cres - 9531 (Richmond) - The One Staging - 12.jpg",
      "Maple Rd - 6120 (Richmond) - The One Staging - 6.jpg",
      "Maple Rd - 6120 (Richmond) - The One Staging - 29.jpg",
      "Minler Rd - 8060 (Richmond) - The One Staging and Luis Gan - twilight - 31.jpg",
      "Minler Rd - 8271 (Richmond) - The One Staging - 39.jpg",
      "Minler Rd - 8271 (Richmond) - The One Staging - 56.jpg",
      "mUllvy4w.jpg",
      "ObWggwqw.jpg",
      "Reynolds Dr - 10780 (Richmond) - The One Staging - 16.jpg",
      "Reynolds Dr - 10780 (Richmond) - The One Staging - 52.jpg",
      "Sandhurst Pl - 1416 (West Vancouver) - The One Staging - 31.jpg",
      "Sandhurst Pl - 1416 (West Vancouver) - The One Staging - 39.jpg",
      "Trumond Ave - 3428 (Richmond) - The One Staging - 8.jpg",
      "Trumond Ave - 3428 (Richmond) - The One Staging - 42.jpg",
      "W 15th Ave - 2012 (Vancouver) - The One Staging - 29.jpg",
      "W 15th Ave - 2012 (Vancouver) - The One Staging - 31.jpg",
      "W Georgia St - 1128 (4903) (Vancouver) - The One Staging - 9.jpg",
      "wI5dNV4A.jpg",
      "Yzbaep9Q.jpg",
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
