"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { LoginSchema } from "@/lib/yup/login";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: keyof LoginSchema,
  label: string,
  description?: string,
}
export default function LoginFormInput({ children, name, label, description, className, ...props }: InputProps) {
  return(
    <FormField name={name} render={({field}) => (
      <FormItem>
        <FormLabel className="block">{label}</FormLabel>

        <FormControl>
          <input {...props} {...field} className={cn("px-2 py-1 border border-slate-800 rounded-md", className)}>
            {children}
          </input>
        </FormControl>

        {description && <FormDescription> {description} </FormDescription>}

        <FormMessage />
      </FormItem>
    )} />
  )
}