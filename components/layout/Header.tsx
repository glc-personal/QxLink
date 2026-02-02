"use client";

import Link from "next/dist/client/link";
import {usePathname} from "next/dist/client/components/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-green-600">
            <div className="mx-auto flex h-14 max-w-6x1 items-center justify-between px-4">
                {/* Left */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Link href="/" aria-label="QxLink Home" className="inline-flex items-center" >
                        <img
                            src="/icons/qxlink.ico"
                            alt="QxLink Logo"
                            width={78}
                            height={78}
                            className="block"
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}