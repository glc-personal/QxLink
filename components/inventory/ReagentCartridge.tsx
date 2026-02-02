// ReagentCartridge.tsx
import * as React from "react";

type WellShape = "circle" | "square";

function cn(...parts: Array<string | undefined | false | null>) {
    return parts.filter(Boolean).join(" ");
}

export type ReagentCartridgeProps = {
    numberOfColumns: number;
    numberOfRows: number;

    /** Per-column reagent label (length = numberOfColumns). */
    reagentNames: string[];

    /** Per-column well-bottom type (length = numberOfColumns). */
    wellBottomTypes: string[];

    /** Version label shown on the cartridge. */
    version: string;

    /**
     * Tailwind classes for the cartridge body background/border/etc.
     * Example: "bg-slate-900 border-slate-700"
     */
    cartridgeClassName?: string;

    /**
     * Per-column Tailwind color classes used for the wells.
     * Recommended: border color classes like "border-emerald-400".
     * (length = numberOfColumns)
     */
    columnColors?: string[];

    /** Pixel width of each column (outer column wrapper). */
    columnWidthPx?: number;

    /** Pixel size of each well. Defaults to (columnWidthPx - padding). */
    wellSizePx?: number;

    /** Spacing between columns (px). */
    columnGapPx?: number;

    /** Spacing between wells in a column (px). */
    rowGapPx?: number;

    /** Circle or square wells. */
    wellShape?: WellShape;

    /**
     * If true, fills wells with white; if false, uses transparent wells.
     * (Often looks better as white on dark cartridge.)
     */
    wellsFilled?: boolean;

    /**
     * Optional: show a subtle column accent bar at the top in the column color.
     */
    showColumnAccent?: boolean;

    /** Optional class on the root container. */
    className?: string;
};

export default function ReagentCartridge({
                                             numberOfColumns,
                                             numberOfRows,
                                             reagentNames,
                                             wellBottomTypes,
                                             version,
                                             cartridgeClassName = "bg-slate-900 border-slate-700",
                                             columnColors = [],
                                             columnWidthPx = 64,
                                             wellSizePx,
                                             columnGapPx = 18,
                                             rowGapPx = 18,
                                             wellShape = "circle",
                                             wellsFilled = true,
                                             showColumnAccent = false,
                                             className,
                                         }: ReagentCartridgeProps) {
    // Basic guards (non-throwing). In dev you can console.warn.
    const safeReagent = (col: number) => reagentNames[col] ?? `Column ${col + 1}`;
    const safeBottom = (col: number) => wellBottomTypes[col] ?? "Unknown";
    const safeColor = (col: number) => columnColors[col] ?? "border-white/70";

    const resolvedWellSize = wellSizePx ?? Math.max(18, columnWidthPx - 18);

    const wellBase = cn(
        "border shadow-sm",
        wellsFilled ? "bg-white" : "bg-transparent",
        wellShape === "circle" ? "rounded-full" : "rounded-md"
    );

    return (
        <div className={cn("inline-block", className)}>
            <div
                className={cn(
                    "relative border rounded-md p-6",
                    cartridgeClassName
                )}
            >
                {/* Columns */}
                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: `repeat(${numberOfColumns}, ${columnWidthPx}px)`,
                        columnGap: `${columnGapPx}px`,
                    }}
                >
                    {Array.from({ length: numberOfColumns }).map((_, colIdx) => {
                        const reagent = safeReagent(colIdx);
                        const bottomType = safeBottom(colIdx);
                        const colorClass = safeColor(colIdx);

                        return (
                            <div
                                key={colIdx}
                                className="relative group flex flex-col items-center"
                                style={{ rowGap: `${rowGapPx}px` }}
                            >
                                {/* Optional subtle accent */}
                                {showColumnAccent && (
                                    <div
                                        className={cn("h-1 w-full rounded-sm opacity-80", colorClass)}
                                        // Tailwind border-* classes won't affect bg; fallback to a neutral bar unless user passes bg-*.
                                        // If you want a true accent color, pass bg-* classes in columnColors.
                                    />
                                )}

                                {/* Tooltip (hover column) */}
                                <div className="pointer-events-none absolute -top-3 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-full group-hover:block">
                                    <div className="rounded-md bg-black/90 px-3 py-2 text-xs text-white shadow-lg">
                                        <div className="font-semibold">{reagent}</div>
                                        <div className="opacity-90">Well bottom: {bottomType}</div>
                                        <div className="opacity-70">Version: {version}</div>
                                    </div>
                                    <div className="mx-auto h-2 w-2 rotate-45 bg-black/90" />
                                </div>

                                {/* Wells */}
                                {Array.from({ length: numberOfRows }).map((__, rowIdx) => (
                                    <div
                                        key={rowIdx}
                                        className={cn(wellBase, colorClass)}
                                        style={{
                                            width: `${resolvedWellSize}px`,
                                            height: `${resolvedWellSize}px`,
                                        }}
                                        aria-label={`${reagent} — ${bottomType} (row ${rowIdx + 1}, col ${
                                            colIdx + 1
                                        })`}
                                        title={`${reagent} — ${bottomType}`}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </div>

                {/* Version label on cartridge */}
                <div className="pointer-events-none absolute bottom-2 right-3 select-none text-xs text-white/70">
                    v{version}
                </div>
            </div>
        </div>
    );
}