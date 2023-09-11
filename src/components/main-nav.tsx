import Link from "next/link"

import { cn } from "@/lib/utils"
import UserNavOperations from "./user-nav-operations"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("hidden md:flex justify-between w-full items-center", className)}
            {...props}
        >
            <div className="flex flex-row gap-6 md:gap-10">
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-bold transition-colors hover:text-primary inline-flex items-center justify-center"
                >
                    Journal
                </Link>
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium transition-colors hover:text-primary"
                >
                    Overview
                </Link>
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                    Customers
                </Link>
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                    Products
                </Link>
                <Link
                    href="/examples/dashboard"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                    Settings
                </Link>
            </div>
            <UserNavOperations />
        </nav>
    )
}