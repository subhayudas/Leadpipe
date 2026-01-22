"use client";

import Icons from "@/components/global/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from "sonner";

const SignUpPage = () => {

    const router = useRouter();

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !emailAddress || !password) {
            return toast.warning("Please fill in all fields");
        }

        setIsLoading(true);

        // Placeholder authentication - you can implement your own auth logic here
        toast.info("Authentication is disabled. This is a demo page.");
        
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard');
        }, 1000);
    };

    return (
        <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2 text-center">
                <Icons.icon className="h-6 mx-auto" />
                <h1 className="text-2xl font-semibold tracking-tight pt-2">
                    Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                    Enter your details below to create your account
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        disabled={isLoading}
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        disabled={isLoading}
                        value={emailAddress}
                        placeholder="name@example.com"
                        onChange={(e) => setEmailAddress(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            disabled={isLoading}
                            value={password}
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Continue"}
                </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/signin"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default SignUpPage;
