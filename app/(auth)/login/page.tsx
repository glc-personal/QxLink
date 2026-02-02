"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function onLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/auth/login", { method: "POST" });

        setLoading(false);

        if (res.ok) {
            alert("HERE");
            router.push("/");
            router.refresh();
        } else {
            alert("Login failed.");
        }

        return (
            <div className="min-h-screen bg-white">
                <div className="mx-auto flex min-h-screen max-w-md items-center px-4">
                    <div className="w-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                        <div className="mb-6 flex items-center gap-3">
                            <div>
                                <div className="text-lg font-semibold">QxLink</div>
                                <div className="text-sm text-black/60">Sign in to continue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}