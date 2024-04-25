import Image from "next/image";
import Link from "next/link";
//import { auth } from "@/lib/auth";

export default async function Home() {
  //const session = await auth()
  const imgSrc = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ld1b05OKw3RdBPZQL2fGVA.png"

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-200 p-4">
      <section>
        <h1 className="text-5xl font-semibold"> Next Auth v5-beta </h1>
      </section>

      <section className="space-y-4 text-center">
        <h2 className="text-2xl pt-10">
          Teste de autenticação com layouts
          usando o <code className="font-semibold">next-auth</code>.
        </h2>

        <p className="text-lg">
          Teste feito para uso futuro. Comece a testar entrando
          em: <Link className="underline" href="/inicio">início</Link> .
        </p>
      </section>

      <section className="pt-12">
        <h2 className="text-2xl font-semibold"> Objetivo </h2>
        <p className="py-2 max-w-4xl">
          Ter páginas tanto públicas quanto privadas para acessar onde,
          além de ter acesso baseado em roles (RBAC), a sessão do usuário ser controlada
          corretamente pela biblioteca usando a nova versão do next (14.2)
        </p>
      </section>

      <section className="pt-8">
        <Image width={600} height={480} alt="RBA image" src={imgSrc} />
      </section>
    </main>
  );
}
