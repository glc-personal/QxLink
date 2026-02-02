import Link from "next/dist/client/link";
import BatchRun from "@/components/platform/BatchRun";

type Row = {
    batch: "A" | "B" | "C" | "D" | string;
    runId: string | null;
    runName: string | null;
    progress: number; // 0..1
    status: "Idle" | "Running" | "Complete" | "Failed" | string;
    estimatedTimeRemaining: string | null;
}

export default function BatchRunsTable({ rows }: { rows: Row[] }) {
    return (
        <div className="rounded-2x1 border p-4 text-black">
            <div className="mb-3 text-sm font-semibold">Batches</div>

            <div className="grid grid-cols-5 gap-2 text-sm font-medium opacity-70">
                <div>Batch</div>
                <div>Run</div>
                <div>Progress</div>
                <div>Status</div>
                <div>Estimated Time Remaining</div>
            </div>

            <div className="mt-2 space-y-2">
                {rows.map((row) => (
                    <div key={row.batch}>
                        <BatchRun
                            batch={row.batch}
                            runId={row.runId}
                            runName={row.runName}
                            progress={row.progress}
                            status={row.status}
                            estimatedTimeRemaining={row.estimatedTimeRemaining}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}