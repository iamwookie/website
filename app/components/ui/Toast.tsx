'use client';

import { Toast as BaseToast } from '@base-ui-components/react/toast';
import { motion, AnimatePresence } from 'motion/react';

import { cn } from '@lib/utils';
import XIcon from '@public/assets/ui/x-solid-full.svg';

const MotionClose = motion.create(BaseToast.Close);

const Provider = ({ children }: { children: React.ReactNode }) => {
    return <BaseToast.Provider timeout={3000}>{children}</BaseToast.Provider>;
};

const Toast = ({ toast, ...props }: { [key: string]: any }) => {
    return (
        <BaseToast.Root
            {...props}
            toast={toast}
            className={cn(
                'flex cursor-default flex-row items-center justify-center gap-2 rounded-lg border border-white/50 p-4 backdrop-blur-lg',
                toast.type === 'success' && 'border-green-500/50 text-green-500',
                toast.type === 'error' && 'border-red-500/50 text-red-500',
            )}
        >
            <div className="flex-1">
                <BaseToast.Title className="font-semibold">{toast.title}</BaseToast.Title>
                {toast.description && <BaseToast.Description className="text-xs" />}
            </div>

            <MotionClose whileHover={{ opacity: 0.5, scale: 0.98 }} whileTap={{ opacity: 0.5, scale: 0.98 }}>
                <XIcon width={20} height={20} fill="currentColor" />
            </MotionClose>
        </BaseToast.Root>
    );
};

const MotionToast = motion.create(Toast);

const Wrapper = () => {
    const { toasts } = BaseToast.useToastManager();

    return (
        <BaseToast.Portal>
            <BaseToast.Viewport className="fixed right-4 bottom-16 ml-4 flex flex-col-reverse gap-4 sm:bottom-4 sm:max-w-64">
                <AnimatePresence initial={false} mode="popLayout">
                    {toasts.slice(0, 3).map((toast) => (
                        <MotionToast
                            key={toast.id}
                            toast={toast}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            layout
                        />
                    ))}
                </AnimatePresence>
            </BaseToast.Viewport>
        </BaseToast.Portal>
    );
};

export { Provider, Wrapper };
