import BatchRunProgressBar from "@/components/platform/BatchRunProgressBar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export type BatchRunStatus =
    | "Ready"
    | "Not Ready"
    | "Running"
    | "Paused"
    | "Aborted"
    | "Failed"
    | "Complete"
    | string;

type BatchRunProps = {
    batch: "A" | "B" | "C" | "D" | string;
    runId: string | null;
    runName: string | null;
    progress: number; // 0..1
    status: BatchRunStatus;
    estimatedTimeRemaining: string | null;
    className?: string;
};

function getProgressBarColors(status: BatchRunStatus) {
    const s = status.toUpperCase();

    if (s === "RUNNING") return { done: "bg-blue-500", remaining: "bg-blue-200" };
    if (s === "READY") return { done: "bg-blue-200", remaining: "bg-blue-200" };
    if (s === "NOT READY") return { done: "bg-slate-400", remaining: "bg-slate-200" };
    if (s === "PAUSED") return { done: "bg-amber-500", remaining: "bg-amber-200" };
    if (s === "ABORTED") return { done: "bg-neutral-600", remaining: "bg-neutral-300" };
    if (s === "FAILED") return { done: "bg-red-600", remaining: "bg-red-200" };
    if (s === "COMPLETE") return { done: "bg-green-600", remaining: "bg-green-200" };

    return { done: "bg-slate-500", remaining: "bg-slate-200" };
}

export default function BatchRun({
                                     batch,
                                     runId,
                                     runName,
                                     progress,
                                     status,
                                     estimatedTimeRemaining,
                                     className = "",
                                 }: BatchRunProps) {
    const { done, remaining } = getProgressBarColors(status);

    // Show only the run name; tooltip shows runId (fallback to runId if name missing)
    const runDisplay = runName || runId || "";

    return (
        <div className={["w-full border border-black/30 bg-neutral-100", className].join(" ")}>
            {/* Top row: 5% / 60% / 20% / 15% */}
            <div className="overflow-x-auto">
                <div
                    className="grid items-center px-6 py-6 gap-4 min-w-[900px]"
                    style={{ gridTemplateColumns: "5% 60% 20% 15%" }}
                >
                    {/* Batch */}
                    <div className="text-center text-3xl font-bold text-black whitespace-nowrap">
                        {batch}
                    </div>

                    {/* Run (left) */}
                    <div className="min-w-0 text-3xl font-normal text-black truncate whitespace-nowrap">
                        {runDisplay ? (
                            runId ? (
                                <TooltipProvider delayDuration={150}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="cursor-help">{runDisplay}</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="text-sm">
                                                <span className="opacity-70">Run ID:</span>{" "}
                                                <span className="font-mono">{runId}</span>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ) : (
                                <span>{runDisplay}</span>
                            )
                        ) : (
                            <span className="opacity-50">—</span>
                        )}
                    </div>

                    {/* Status (centered column) */}
                    <div className="text-center text-3xl font-light tracking-wide text-black whitespace-nowrap">
                        {status}
                    </div>

                    {/* ETA (centered column) */}
                    <div className="text-center text-3xl font-light tabular-nums text-black whitespace-nowrap">
                        {estimatedTimeRemaining ?? "00:00:00"}
                    </div>
                </div>
            </div>

            {/* Progress bar */}
            <BatchRunProgressBar
                value={progress}
                progressClassName={done}
                remainingClassName={remaining}
                heightClassName="h-6"
                className="border-t border-black/30"
            />
        </div>
    );
}
