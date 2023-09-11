import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function UserNavOperations() {
    return (
        <>
            <Link
                href="/login"
                className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4",
                )}
            >
                Login
            </Link>
        </>
    )
}