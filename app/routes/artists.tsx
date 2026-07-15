import { ArtistsPage } from "../features/artists/ArtistsPage";

export function meta() {
  return [
    { title: "Artists — Happy Wall Gallery" },
    {
      name: "description",
      content:
        "Meet the artists of Happy Wall Gallery: Marzi, Naser, Noemi, and Ronan — painting, sculpture, landscape, and mixed media.",
    },
  ];
}

export default function Artists() {
  return <ArtistsPage />;
}
