import type { Route } from "./+types/artist";
import { ArtistDetailPage } from "../features/artists/ArtistDetailPage";
import { getArtist } from "../features/artists/artists";

export function loader({ params }: Route.LoaderArgs) {
  const artist = getArtist(params.slug);
  if (!artist) {
    throw new Response("Artist not found", { status: 404 });
  }
  return { artist };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: "Artist — Happy Wall Gallery" }];
  return [
    { title: `${loaderData.artist.name} — Happy Wall Gallery` },
    { name: "description", content: loaderData.artist.tagline },
  ];
}

export default function Artist({ loaderData }: Route.ComponentProps) {
  return <ArtistDetailPage artist={loaderData.artist} />;
}
