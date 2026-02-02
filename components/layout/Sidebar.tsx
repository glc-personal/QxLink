"use client";

import {usePathname} from "next/dist/client/components/navigation";
import {
    ChartArea, ChevronRight,
    FileText, Flag,
    FlaskConical,
    HomeIcon,
    HouseWifi,
    LayoutDashboard, Settings,
    UserStar
} from "lucide-react";
import Link from "next/dist/client/link";

type SidebarNavItem = {
    href: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
};

type SidebarNavSection = {
    title?: string;
    items: SidebarNavItem[];
};

export default function Sidebar() {
    const pathname = usePathname();
    const linkedPlatforms: SidebarNavItem[] = [
        { href: `/platforms/1`, label: "Ariel", icon: HouseWifi },
        { href: `/platforms/2`, label: "Dover", icon: HouseWifi },
        { href: `/platforms/3`, label: "Camber", icon: HouseWifi },
        { href: `/platforms/4`, label: "Liber", icon: HouseWifi },
        { href: `/platforms/5`, label: "Tiger", icon: HouseWifi },
    ];

    const sections: SidebarNavSection[] = [
        {
            items: [
                { href: "/", label: "Home", icon: HomeIcon },
                { href: "/", label: "Dashboard", icon: LayoutDashboard },
            ],
        },
        {
            title: "Links",
            items: linkedPlatforms.length ? linkedPlatforms : [],
        },
        {
            title: "You",
            items: [
                { href: "/", label: "Runs", icon: FlaskConical },
                { href: "/", label: "Protocols", icon: FileText },
                { href: "/", label: "Analytics", icon: ChartArea },
                { href: "/", label: "Administrative", icon: UserStar },
            ],
        },
        {
            items: [
                { href: "/", label: "Settings", icon: Settings },
                { href: "/", label: "Send Feedback", icon: Flag },
            ]
        }
    ]

    return (
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-44 border-r border-black/10 bg-green-600">
            <div className="flex h-full flex-col gap-4 p-3">
                {sections.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                        {section.title && (
                            <div className="flex items-center justify-between px-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                                {section.title}
                                <ChevronRight />
                            </div>
                        )}

                        <nav className="flex flex-col gap-1">
                            {section.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        href={item.href}
                                        key={item.label}
                                        className="flex flex-row items-center gap-2 rounded-lg px-2 py-2 text-md text-white/90 transition-colors hover:bg-white/10"
                                    >
                                        {Icon ? <Icon className="h-4 w-4 shrink-0 opacity-80" /> : null}
                                        <span className="whitespace-nowrap">{item.label}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                        {idx < sections.length - 1 && (
                            <div className="my-2 border-t border-white/30" />
                        )}
                    </div>
                    ))}
            </div>
        </aside>
    )
}