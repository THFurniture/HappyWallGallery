import { HomePage } from "../features/home/HomePage";

export function meta() {
  return [
    { title: "Happy Wall Gallery — Art that inspires" },
    {
      name: "description",
      content:
        "Happy Wall Gallery is a contemporary art gallery showcasing unique works that connect, provoke, and inspire.",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
