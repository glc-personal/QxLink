import {Cuboid} from "lucide-react";

type PlatformBannerProps = {
    customName: string;
    platformModel: string;
    serialNumber: string;
    bannerColorClass?: string;
}

export default function PlatformBanner({
    customName,
    platformModel,
    serialNumber,
    bannerColorClass="bg-white",
}: PlatformBannerProps) {
    const headerClassName = "sticky top-0 z-50 border-b border-black/10 " + bannerColorClass;
    return (
        <header className={headerClassName}>
            <div className="mx-auto flex h-14 max-w-6x1 items-center justify-between px-4">
                <div className="flex align-items-center gap-2">
                    <Cuboid className="text-green-200 bg-green-600" />
                    <span className="text-black font-extrabold text-md">{customName} {platformModel}-{serialNumber}</span>
                </div>
            </div>
        </header>
    );
}