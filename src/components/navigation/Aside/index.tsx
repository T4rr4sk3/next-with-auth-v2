import { auth } from "@/lib/auth";
import NavigationAsideLink from "./link";
import { navigationLinks } from "./links.data";

export default async function NavigationAside() {
  const session = await auth()

  const userLogged = Boolean(session?.user)

  const links = navigationLinks.filter((l) => {
    // será que entraria aqui a questão da role, e verificaria isso pelo banco de dados?
    return userLogged || !l.private
  })

  return(
    <aside className="shrink-0 w-full max-w-80 bg-slate-800">
      <div className="p-4 shadow-xl">
        <h4 className="text-lg font-medium text-white"> Navegação </h4>
      </div>

      <nav className="grid grid-flow-col col-auto gap-y-4 p-4 text-cyan-200">
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <NavigationAsideLink href={l.href}>
                {l.label}
              </NavigationAsideLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}