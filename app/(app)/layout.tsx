import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import {ReactNode} from "react";

export default function AppLayout({children}: {children: ReactNode}) {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="mx-auto flex max-w-6x1">
                <Sidebar />
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}