type Link = { href: string, label: string, private?: boolean }

export const navigationLinks: Link[] = [
  { href: "/inicio", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/profile", label: "Perfil", private: true },
  { href: "/fotos", label: "Minhas Fotos" }, // esse devia ser privado
]