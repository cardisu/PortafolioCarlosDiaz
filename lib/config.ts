export const siteConfig = {
  name: "Talento Tracklink",
  title: "Talento Tracklink - Únete a Nuestro Equipo",
  description:
    "Descubre nuestra cultura empresarial, beneficios únicos y oportunidades de carrera. Trabajamos juntos para alcanzar metas extraordinarias en un ambiente de innovación y colaboración.",
  url: "https://talento.tracklink.com.ec",
  ogImage: "https://talento.tracklink.com.ec/og-image.jpg",
  keywords: [
    "empleo",
    "trabajo remoto",
    "cultura empresarial",
    "beneficios laborales",
    "desarrollo profesional",
    "carreras",
    "tecnología",
  ],
  author: "Tracklink EC",
  locale: "es_ES",

  // Navegación
  navigation: [
    { name: "Inicio", href: "#inicio" },
    { name: "Cultura", href: "#cultura" },
    { name: "Vida", href: "#videos" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Experiencias", href: "#testimonios" },
  ],

  // Redes sociales
  social: {
    tiktok: "https://www.tiktok.com/@somostracklink.ec",
    linkedin: "https://linkedin.com/company/tracklink",
    instagram: "https://instagram.com/tracklink.ec",
  },

  // Estadísticas
  stats: {
    employees: "200+",
    countries: "3",
    satisfaction: "100%",
  },
}

export type SiteConfig = typeof siteConfig
