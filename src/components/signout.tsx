"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignOut = () => {
    return (
        <Link href="/">
            <Button>
                Go Home
            </Button>
        </Link>
    );
};

export default SignOut;
