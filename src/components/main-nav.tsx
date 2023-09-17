'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button, buttonVariants } from "./ui/button"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)
    return (
        <>
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
                <Link
                    href="/login"
                    className={cn(
                        buttonVariants({ variant: "secondary", size: "sm" }),
                        "px-4",
                    )}
                >
                    Login
                </Link>
            </nav>
            <nav
                className={cn("flex md:hidden justify-between w-full gap-y-6", className)}
                {...props}
            >
                <Button
                    className={cn("text-sm font-bold transition-colors hover:text-primary inline-flex items-center justify-center z-100",
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "px-4",
                    )}
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                >
                    Journal
                </Button>
                {
                    isMobileNavOpen && (
                        <div
                            className={cn(
                                "fixed inset-0 top-2 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 mt-12 pb-32 shadow-md animate-in fade-in md:hidden text-background"
                            )}
                        >
                            <div className="relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
                                <Link href="/" className="flex items-center space-x-2">
                                    <span className="font-bold">Journal</span>
                                </Link>
                                <div className="grid grid-flow-row auto-rows-max text-sm">
                                    <Link
                                        href='/test'
                                        className={cn(
                                            "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline text-background"
                                        )}
                                    >
                                        Overview
                                    </Link>
                                    <Link
                                        href='/test'
                                        className={cn(
                                            "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline text-background"
                                        )}
                                    >
                                        Customers
                                    </Link>
                                    <Link
                                        href='/test'
                                        className={cn(
                                            "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline text-background"
                                        )}
                                    >
                                        Products
                                    </Link>
                                    <Link
                                        href='/test'
                                        className={cn(
                                            "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline text-background"
                                        )}
                                    >
                                        Settings
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}