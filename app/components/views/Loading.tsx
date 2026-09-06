import EyeIcon from '@public/assets/ui/eye-regular.svg';

export default function Loading() {
    return (
        <span className="flex h-6 flex-row items-center justify-center gap-2">
            <EyeIcon width={16} height={16} fill="currentColor" />
            <span className="h-4 w-8 animate-pulse rounded-full bg-white/10" />
        </span>
    );
}
