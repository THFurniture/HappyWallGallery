import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("artists", "routes/artists.tsx"),
  route("artists/:slug", "routes/artist.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
