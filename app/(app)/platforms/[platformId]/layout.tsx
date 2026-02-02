import {ReactNode} from "react";

export default function PlatformLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-6">
            {children}
        </div>
    );
}