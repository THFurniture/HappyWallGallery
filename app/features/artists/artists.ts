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
    name: "Marzi",
    discipline: "Abstract Painting",
    tagline: "Atmosphere held in suspension — skylines dissolved into gesture and light.",
    statement:
      "I paint the moment a city stops being architecture and becomes weather.",
    bio: [
      "Marzi builds her canvases the way fog builds over a harbour — in thin, patient layers of champagne gold, graphite, and bone white. From a distance her compositions read as skylines or shorelines; up close they dissolve into pure gesture, drips, and suspended pigment.",
      "Her work has become a quiet signature of some of Vancouver's most considered interiors, where a single large-format piece is often asked to carry an entire room. Each painting is made to reward both the passing glance and the long, slow look.",
    ],
    cover: encodeURI("/ART/MARZI ART/9ntrzREA.jpg"),
    works: collection("MARZI ART", "Marzi", [
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
    name: "Naser",
    discipline: "Sculpture",
    tagline: "Weight made weightless — quiet monoliths in stone and glass.",
    statement:
      "Stone already knows its form. My work is the patience of listening for it.",
    bio: [
      "Naser works at the meeting point of geology and stillness. His sculptures — carved stone, cast glass, and mineral forms that seem lifted straight from a riverbed — hold a room the way a pause holds a sentence.",
      "Deliberately few in number, his pieces are placed rather than displayed: on a long console, at the end of a corridor, beneath a fall of natural light. Each one asks for space around it, and gives a kind of gravity back.",
    ],
    cover: encodeURI("/ART/NASER ART/DSC02744.jpg"),
    works: collection("NASER ART", "Naser", [
      "DSC02744.jpg",
      "Cambie St - 885 (2500) (Vancouver) - The One Staging - 38.jpg",
      "W Georgia St - 1128 (4903) (Vancouver) - The One Staging - 3.jpg",
    ]),
  },
  {
    slug: "noemi",
    name: "Noemi",
    discipline: "Contemporary Landscape",
    tagline: "Where the sea meets memory — horizons in muted, breathing colour.",
    statement:
      "A horizon is the most honest line there is. Everything I paint begins there.",
    bio: [
      "Noemi paints the coastline the way it is remembered rather than the way it is photographed — long horizontals of sea, sky, and shore softened into fields of grey-blue, sand, and mist. Her canvases carry the particular calm of the Pacific Northwest.",
      "The most collected artist in the gallery, Noemi's work spans intimate panels to room-width panoramas. Her paintings have found homes across Vancouver, Richmond, and West Vancouver, where they do what the ocean does: quietly hold everyone's attention.",
    ],
    cover: encodeURI("/ART/NOEMI ART/DSC02737.jpg"),
    works: collection("NOEMI ART", "Noemi", [
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
    name: "Ronan",
    discipline: "Mixed Media",
    tagline: "Surfaces that hold light — gold leaf, resin, and raw texture.",
    statement:
      "I want a surface you feel across the room before you ever step closer.",
    bio: [
      "Ronan builds paintings the way tide pools build sediment — resin over pigment over gold leaf, sanded back and layered again until the surface itself becomes the subject. His panels shift with the hour, catching morning light one way and lamplight another.",
      "Physical, material, and unapologetically tactile, his work anchors double-height foyers and quiet bedrooms alike. Every piece is a record of accumulation: what was buried, what was uncovered, and what was allowed to shine through.",
    ],
    cover: encodeURI("/ART/RONAN ART/DSC04271.jpg"),
    works: collection("RONAN ART", "Ronan", [
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
