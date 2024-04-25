"use client"
import { login } from "@/actions/login"
import { Form } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import loginSchema from "@/lib/yup/login"
import { yupResolver } from "@hookform/resolvers/yup"

import { useRouter, useSearchParams } from "next/navigation"
import { ComponentProps, FormEvent } from "react"
import { useForm } from "react-hook-form"

export default function LoginFormWrapper({ children, className, onSubmit, ...props }: ComponentProps<"form">) {
  const formMethods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { login: "", password: "" }
  })
  const params = useSearchParams()
  const router = useRouter()

  // submit handler
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if(!onSubmit) {
      // do default login submit
      const handler = formMethods.handleSubmit(async () => {
        try{
          const target = e.target instanceof HTMLFormElement ? e.target : e.currentTarget

          const formData = new FormData(target)

          const error = await login(formData)

          if(!!error?.code) return // error message

          const url = params.get("callbackUrl") || "/inicio"

          router.push(url)

        } catch(r: unknown) {
          console.error(r)
        }
      })

      handler(e)

    } else { // do prop submit
      onSubmit(e)
    }
  }

  return(
    <Form {...formMethods}>
      <form {...props} onSubmit={handleSubmit} className={cn("grid grid-flow-row gap-y-4", className)}>
        {children}
      </form>
    </Form>
  )
}
