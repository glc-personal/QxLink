import {Cuboid} from "lucide-react";

type PlatformBannerProps = {
    customName: string;
    platformModel: string;
    serialNumber: string;
}

export default function PlatformBanner({
    customName,
    platformModel,
    serialNumber
}: PlatformBannerProps) {
    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
            <div className="mx-auto flex h-14 max-w-6x1 items-center justify-between px-4">
                <div className="flex align-items-center gap-2">
                    <Cuboid className="text-black" />
                    <span className="text-black font-bold text-3xl">{customName} {platformModel}-{serialNumber}</span>
                </div>
            </div>
        </header>
    );
}