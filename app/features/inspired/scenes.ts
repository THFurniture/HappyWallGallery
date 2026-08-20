import { artists } from "../artists/artists";

export type Scene = {
  /** Photo of this specific piece installed in a real space. */
  image: string;
  alt: string;
};

export type ArtistScenes = {
  slug: string;
  name: string;
  discipline: string;
  scenes: Scene[];
};

const environmentFolders: Record<string, string> = {
  marzi: "MARZI ART",
  naser: "NASER ART",
  noemi: "NOEMI ART",
  ronan: "RONAN ART",
};

const environmentFiles: Record<string, string[]> = {
  marzi: [
    "marzi-environment-01.jpg",
    "marzi-environment-02.jpg",
    "marzi-environment-03.jpg",
    "marzi-environment-04.jpg",
    "marzi-environment-05.jpg",
    "marzi-environment-06.jpg",
    "marzi-environment-07.jpg",
    "marzi-environment-08.jpg",
    "marzi-environment-09.jpg",
    "marzi-environment-10.jpg",
    "marzi-environment-11.jpg",
    "marzi-environment-12.jpg",
  ],
  naser: [
    "naser-environment-01.jpg",
    "naser-environment-02.jpg",
    "naser-environment-03.jpg",
    "naser-environment-04.jpg",
    "naser-environment-05.png",
    "naser-environment-06.png",
    "naser-environment-07.png",
    "naser-environment-08.jpg",
  ],
  noemi: [
    "noemi-environment-01.jpg",
    "noemi-environment-02.jpg",
    "noemi-environment-03.jpg",
    "noemi-environment-04.jpg",
    "noemi-environment-05.jpg",
    "noemi-environment-06.jpg",
    "noemi-environment-07.jpg",
    "noemi-environment-08.jpg",
    "noemi-environment-09.jpg",
    "noemi-environment-10.jpg",
    "noemi-environment-11.jpg",
    "noemi-environment-12.jpg",
    "noemi-environment-13.jpg",
    "noemi-environment-14.jpg",
    "noemi-environment-15.jpg",
    "noemi-environment-16.jpg",
    "noemi-environment-17.jpg",
    "noemi-environment-18.jpg",
    "noemi-environment-19.jpg",
    "noemi-environment-20.jpg",
    "noemi-environment-21.jpg",
    "noemi-environment-22.jpg",
    "noemi-environment-23.jpg",
    "noemi-environment-24.jpg",
    "noemi-environment-25.jpg",
    "noemi-environment-26.jpg",
  ],
  ronan: [
    "ronan-environment-01.jpg",
    "ronan-environment-02.jpg",
    "ronan-environment-03.jpg",
    "ronan-environment-04.jpg",
    "ronan-environment-05.jpg",
    "ronan-environment-06.jpg",
    "ronan-environment-07.jpg",
    "ronan-environment-08.jpg",
    "ronan-environment-09.jpg",
    "ronan-environment-10.jpg",
    "ronan-environment-11.jpg",
    "ronan-environment-12.jpg",
    "ronan-environment-13.jpg",
    "ronan-environment-14.jpg",
    "ronan-environment-15.jpg",
    "ronan-environment-16.jpg",
  ],
};

function environmentImage(slug: string, file: string): string {
  return encodeURI(`/ART/${environmentFolders[slug]}/environments/${file}`);
}

/**
 * In-situ scenes grouped by artist.
 */
export const artistScenes: ArtistScenes[] = artists.map((artist) => ({
  slug: artist.slug,
  name: artist.name,
  discipline: artist.discipline,
  scenes: (environmentFiles[artist.slug] ?? []).map((file, index) => ({
    image: environmentImage(artist.slug, file),
    alt: `${artist.name} installation view ${index + 1}`,
  })),
}));
