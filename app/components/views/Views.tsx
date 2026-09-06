'use client';

import { Toast } from '@base-ui/react/toast';
import useSWR from 'swr';

import EyeIcon from '@public/assets/ui/eye-regular.svg';

import Loading from './Loading';

const fetcher = async (url: string): Promise<{ views: number }> => {
    const res = await fetch(url, { method: 'POST', keepalive: true });
    if (!res.ok) throw new Error(`An error occured while fetching views.`);
    return res.json();
};

export default function Views({ id }: { id: string }) {
    const toastManager = Toast.useToastManager();
    const { data, error, isLoading } = useSWR(`/api/views/${encodeURIComponent(id)}`, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        onError: (error: any) => {
            toastManager.add({
                title: 'Uh Oh!',
                description: error.message,
                type: 'error',
            });
        },
    });

    if (isLoading) return <Loading />;

    return (
        <span className="flex flex-row items-center justify-center gap-2">
            <EyeIcon width={16} height={16} fill="currentColor" />
            {error ? ':(' : (data?.views ?? 0).toLocaleString('en-GB')}
        </span>
    );
}
