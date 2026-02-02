import {HomeIcon} from "lucide-react";
import PlatformBanner from "@/components/platform/PlatformBanner";
import BatchRunsTable from "@/components/platform/BatchRunsTable";
import ReagentCartridge from "@/components/inventory/ReagentCartridge";

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
            { batch: "A", runId: "AJUD-9232-HJ", runName: "Size Selection Male", progress: 0.76, status: "Running", estimatedTimeRemaining: "00:10:34" },
            { batch: "B", runId: "KIDJ-8933-KS", runName: "Proteinase-K Test", progress: 0, status: "Ready", estimatedTimeRemaining: "02:15:00" },
            { batch: "C", runId: "", runName: "", progress: 0, status: "Idle", estimatedTimeRemaining: "00:00:00" },
            { batch: "D", runId: "LPOD-0932-LL", runName: "ICP Test Run", progress: 1, status: "Complete", estimatedTimeRemaining: "00:00:00" },
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

            <div className="p-8">
                <ReagentCartridge
                    numberOfColumns={12}
                    numberOfRows={8}
                    reagentNames={["Buffer", "Enzyme", "dNTP", "Primer A", "Primer B", "Water", "Proteinase-K", "Wash 1", "Wash 2"]}
                    wellBottomTypes={["V-bottom", "U-bottom", "Flat", "Flat", "U-bottom", "V-bottom", "U-bottom", "V-bottom", "V-bottom"]}
                    version="1.2.0"
                    cartridgeClassName="bg-slate-950 border-slate-700"
                    columnColors={[
                        "border-emerald-400",
                        "border-sky-400",
                        "border-violet-400",
                        "border-amber-400",
                        "border-pink-400",
                        "border-lime-400",
                    ]}
                    columnWidthPx={20}
                    columnGapPx={5}
                    rowGapPx={5}
                    wellShape="square"
                    wellsFilled
                />
            </div>
        </div>
    );
}