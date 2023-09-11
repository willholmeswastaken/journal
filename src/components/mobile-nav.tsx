import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import UserNavOperations from "./user-nav-operations"

export function MobileNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex md:hidden justify-between w-full", className)}
            {...props}
        >
            <Link
                href="/examples/dashboard"
                className="text-sm font-bold transition-colors hover:text-primary inline-flex items-center justify-center"
            >
                Journal
            </Link>
            <UserNavOperations />
        </nav>
    )
}