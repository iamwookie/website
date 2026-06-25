export default function Loading() {
    return (
        <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-2">
            <div className="w-3/4">
                <div className="h-7 w-full animate-pulse rounded-full bg-white/10 sm:h-8 md:h-9" />
            </div>

            <div className="w-1/4">
                <div className="h-4 w-full animate-pulse rounded-full bg-white/10 sm:h-5 md:h-6" />
            </div>
        </div>
    );
}
