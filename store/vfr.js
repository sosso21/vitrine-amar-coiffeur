export const state = () => ({
  data: {
    title: "Amar Koulougli Coifeur",
    navLink: [
      {
        name: "Emplacement",
        href: "/address",
        svg: "bi bi-geo-alt-fill",
      },
      {
        name: "Réseaux sociaux",
        href: "/social",
        svg: "bi bi-at",
      },
    ],
    descriptionHome: "Salon de coiffure pour homme. Soins capillaire ; cheveux et barbe, Accueil chaleureux et travail professionnel.",
    address: {
      title: "Emplacement",
      address: {
        title: "addresse postal",
        street: "Tizi Lilan.",
        town: "Commune & Daira de Maâtkas.",
        state: "Wilaya de Tizi Ouzou",
        cp: 15154,
        country: "Algérie.(Dz)",
      },
      iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.1398628968554!2d3.983952115285579!3d36.64708577998041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dcf02916dddff%3A0xdd29a3894da19508!2sAmar%20Coulougli%20Le%20Coiffeur!5e0!3m2!1sfr!2sdz!4v1617183222918!5m2!1sfr!2sdz",
    },
    social: {
      title: "Réseaux Sociaux",
      media: [
        {
          title: "Messanger",
          link: "https://www.facebook.com/messages/t/100002135665832",
          svg: "bi bi-chat-dots-fill",
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/amar.coiffeur",
          svg: "bi bi-facebook",
        },
        {
          title: "instagram",
          link: "https://www.instagram.com/amar.coiffeur/",
          svg: "bi bi-instagram",
        },
      ],
    },
  },
});
