import { ContactPage } from "../features/contact/ContactPage";

export function meta() {
  return [
    { title: "Contact — Happy Wall Gallery" },
    {
      name: "description",
      content:
        "Get in touch with Happy Wall Gallery about works, artists, commissions, and private viewings.",
    },
  ];
}

export default function Contact() {
  return <ContactPage />;
}
