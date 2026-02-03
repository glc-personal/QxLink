import Link from "next/dist/client/link";
import BatchRun from "@/components/platform/BatchRun";

type Row = {
    batch: "A" | "B" | "C" | "D" | string;
    runId: string | null;
    runName: string | null;
    username: string | null;
    progress: number; // 0..1
    status: "Idle" | "Running" | "Complete" | "Failed" | string;
    estimatedTimeRemaining: string | null;
}

export default function BatchRunsTable({ rows }: { rows: Row[] }) {
    return (
        <div className="p-4 text-black">
            <div className="grid grid-cols-4 text-md font-medium">
                <div>Batch</div>
                <div>Run</div>
                <div>Status</div>
                <div>Estimated Time Remaining</div>
            </div>

            <div className="mt-1 space-y-0">
                {rows.map((row) => (
                    <div key={row.batch}>
                        <BatchRun
                            batch={row.batch}
                            runId={row.runId}
                            runName={row.runName}
                            username={row.username}
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