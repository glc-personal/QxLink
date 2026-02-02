type BatchRunProgressBarProps = {
    value: number;

    /** Tailwind class (for color) for the completed segment (e.g. bg-green-600) */
    progressClassName?: string;

    /** Tailwind class (for color) for the remaining segment */
    remainingClassName?: string;

    /** Height class (e.g. "h-3") */
    heightClassName?: string;

    className?: string;
};

export default function BatchRunProgressBar({
                                                value=0,
                                                progressClassName="bg-blue-500",
                                                remainingClassName="bg-blue-200",
                                                heightClassName="h-3",
                                                className="",
} : BatchRunProgressBarProps) {
    const percentage = Math.round(value * 100);

    return (
        <div
            className={[
                "w-full overflow-hidden border border-black/30",
                heightClassName,
                className,
            ].join(" ")}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percentage}
            aria-label="Run progress"
        >
            <div className="flex h-full w-full">
                <div
                    className={[progressClassName].join(" ")}
                    style={{ width: `${percentage}%` }}
                />
                <div
                    className={[remainingClassName].join(" ")}
                    style={{ width: `${100 - percentage}%` }}
                />
            </div>
        </div>
    );
}