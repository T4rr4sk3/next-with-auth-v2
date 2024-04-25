"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { ComponentProps } from "react";

export default function NavigationAsideLink({ href, children, className, ...props }: ComponentProps<typeof Link>) {
  const path = usePathname()
  const current = path === href
  const activeClassName = "text-indigo-600 border-white border no-underline"

  return(
    <Link href={href} className={cn("rounded-md p-2 text-lg block underline", current && activeClassName, className)} {...props}>
      {children}
    </Link>
  )
}