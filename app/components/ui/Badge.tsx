export default function Badge({ color, children }: { color: string; children: React.ReactNode }) {
    return (
        <span
            className="rounded-full border-2 border-[var(--badge-color)] px-2 text-[var(--badge-color)] hover:bg-[var(--badge-color)] hover:text-black font-semibold transition-colors"
            style={{ '--badge-color': color } as React.CSSProperties}
        >
            {children}
        </span>
    );
}
