import { InspiredPage } from "../features/inspired/InspiredPage";

export function meta() {
  return [
    { title: "Get Inspired — Happy Wall Gallery" },
    {
      name: "description",
      content:
        "See Happy Wall Gallery pieces in real interiors — living rooms, entryways, and workspaces — for inspiration on how art can transform your space.",
    },
  ];
}

export default function Inspired() {
  return <InspiredPage />;
}
