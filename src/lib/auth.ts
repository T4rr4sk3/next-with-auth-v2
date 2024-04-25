import NextAuth, { CredentialsSignin } from "next-auth"
import credentials from "next-auth/providers/credentials"

class MyError extends CredentialsSignin {
  code = "teste"
}

// Deve ser usado no servidor
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    credentials({
      id: "coppetec",
      name: "COPPETEC",
      credentials: {

        login: { label: "Usuário", type: "text", placeholder: 'usuário...', className: "font-semibold text-red-400" },
        senha: { label: "Senha", type: "password", placeholder: 'senha...' },
      },
      async authorize(credentials) {
        if(credentials.login) {
          //console.log(credentials)

          return {
            login: credentials.login,
            name: "Daniel Teste",
            email: "qualquer@email",
            id: '1',
            test: 25
          }
        }

        return null
      },
      type: "credentials"
    })
  ],
  logger: {
    debug(msg) { console.log("Opa: " + msg) },
    error(err) { console.log("Erro: " + err.name + " " + err.message) },
    warn(code) { console.log("eita: " + code) }
  },
  session: {
    updateAge: 10,
  },
  pages: {
    signIn: "/login", // não está funcionando muito bem
  },
  jwt: {
    maxAge: 15,
  },
  secret: process.env.AUTH_SECRET
})