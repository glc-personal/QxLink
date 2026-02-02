import {HomeIcon} from "lucide-react";
import PlatformBanner from "@/components/platform/PlatformBanner";
import BatchRunsTable from "@/components/platform/BatchRunsTable";

type PageProps = {
    params: { platformId: string };
}

export default async function PlatformPage({ params }: PageProps) {
    const { platformId } = await params;

    // TODO: replace with a real data fetch
    const data = {
        platform: {
            id: platformId,
            customName: "Ariel",
            platformModel: "QxM",
            serialNumber: "24601",
            icon: HomeIcon,
        },
        batches: [
            { batch: "A", runId: "AJUD-9232-HJ", runName: "ICP Sample Run A", progress: 0.76, status: "Running", estimatedTimeRemaining: "00:10:34" },
            { batch: "B", runId: "KIDJ-8933-KS", runName: "ICP Sample Run B", progress: 0, status: "Ready", estimatedTimeRemaining: "02:15:00" },
            { batch: "C", runId: "OODK-9937-PO", runName: "ICP Sample Run C", progress: 0, status: "Idle", estimatedTimeRemaining: "00:00:00" },
            { batch: "D", runId: "LPOD-0932-LL", runName: "ICP Sample Run D", progress: 1, status: "Complete", estimatedTimeRemaining: "00:00:00" },
        ],
        analytics: {
            // series to plot
        },
        inventory: {
            // inventory to show
        },
    };

    return (
        <div className="flex flex-col gap-8">
            <PlatformBanner
                customName={data.platform.customName}
                platformModel={data.platform.platformModel}
                serialNumber={data.platform.serialNumber}
            />

            <BatchRunsTable
                rows={data.batches}
            />
        </div>
    );
}