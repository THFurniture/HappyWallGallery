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

function environmentImage(src: string): string {
  return src.replace(/\/([^/]+)$/, "/environments/$1");
}

/**
 * In-situ scenes, one per artwork, grouped by artist.
 */
export const artistScenes: ArtistScenes[] = artists.map((artist) => ({
  slug: artist.slug,
  name: artist.name,
  discipline: artist.discipline,
  scenes: artist.works.map((work) => ({
    image: environmentImage(work.src),
    alt: `${artist.name} - ${work.alt} shown in a real space`,
  })),
}));
