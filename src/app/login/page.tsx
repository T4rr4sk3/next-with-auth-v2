import Form2 from "@/components/login/form2";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function LoginPage() {
  const formId = React.useId()
  return(
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full flex flex-col items-center space-y-2">
        <CardHeader>
          <CardTitle> Login </CardTitle>
        </CardHeader>

        <CardContent>
          <Form2.Wrapper id={formId}>
            <Form2.Input
              name="login"
              label="CPF ou E-mail"
              placeholder="login..."
              maxLength={255}
            />

            <Form2.Input
              name="password"
              label="Senha"
              type="password"
              placeholder="senha..."
              maxLength={20}
            />
          </Form2.Wrapper>
        </CardContent>

        <CardFooter>
          <Button form={formId}>
            Entrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}