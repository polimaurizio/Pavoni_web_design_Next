import Nav from "./Nav";

export default {
  component: Nav,
};

export const Default = {
  args: {
    pages: [
      {
        page: "Home",
        href: "www.google.it",
      },
      {
        page: "Storia",
        href: "storia_anchor",
      },
      {
        page: "Prodotti",
        href: "prodotti_anchor",
      },
      {
        page: "Contatti",
        href: "contatti_anchor",
      },
    ],
  },
};
