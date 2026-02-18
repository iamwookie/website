import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

export function getClientIP(headers: Headers): string {
    const ff = headers.get('x-forwarded-for');
    if (ff) return ff.split(',')[0].trim();

    const raddr = headers.get('x-real-ip');
    if (raddr) return raddr.trim();

    return 'unknown';
}
