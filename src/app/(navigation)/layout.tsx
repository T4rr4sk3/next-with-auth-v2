import NavigationAside from "@/components/navigation/Aside";
import NavigationHeader from "@/components/navigation/Header";
import { LayoutProps } from "@/types/props/LayoutProps";

export default function NavigationLayout({ children }: LayoutProps) {
  return(
    <main className="min-h-screen grid grid-flow-row">
      <NavigationHeader />

      <div className="flex min-h-[640px]">
        <NavigationAside />

        <article className="w-full p-4">
          {children}
        </article>
      </div>

      <footer className="w-full bg-slate-400 px-4 flex items-center">
        <div> FOOTER </div>
      </footer>
    </main>
  )
}