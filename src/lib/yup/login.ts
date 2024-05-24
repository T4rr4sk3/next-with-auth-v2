import { InferType, object, string } from "yup";
import { cpfCompleteRexp, cpfIncompleteRexp } from "./regexp";

/** Esquema para login com email ou cpf */
const loginSchema = object({
  login: string().required("CPF ou Email obrigatório.").when({
    is: (v: string) => cpfIncompleteRexp.test(v),
    then: (s) => s.matches(cpfCompleteRexp, "CPF incompleto."),
    otherwise: (s) => s.email("E-mail inválido.")
  }),
  //login: string().optional(),
  password: string().required("Senha obrigatória"),
  //type: string().oneOf(["CPF" as const, "EMAIL" as const]).required(),
})

export type LoginSchema = InferType<typeof loginSchema>

export default loginSchema