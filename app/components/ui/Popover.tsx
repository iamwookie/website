'use client';

import { Popover as BasePopover } from '@base-ui/react/popover';
import { motion } from 'motion/react';
import { useRef } from 'react';

const MotionPopup = motion.create(BasePopover.Popup);

export default function Popover({ children, content, label }: { children: React.ReactNode; content: string; label: string }) {
    const pointerType = useRef<string | null>(null);

    const popupVariants = {
        initial: { opacity: 0, scale: 0.95, y: -6 },
        animate: { opacity: 1, scale: 1, y: -10 },
    };

    return (
        <BasePopover.Root
            onOpenChange={(open, eventDetails) => {
                if (
                    !open &&
                    eventDetails.reason === 'trigger-press' &&
                    pointerType.current === 'mouse' &&
                    eventDetails.event instanceof MouseEvent &&
                    eventDetails.event.detail > 0
                ) {
                    eventDetails.cancel();
                }
            }}
        >
            <BasePopover.Trigger
                openOnHover
                delay={0}
                nativeButton={false}
                render={
                    <div
                        role="button"
                        tabIndex={0}
                        className="cursor-auto"
                        onPointerDown={(event) => (pointerType.current = event.pointerType)}
                        onKeyDown={() => (pointerType.current = null)}
                    >
                        {children}
                        <span className="sr-only">Show {label}</span>
                    </div>
                }
            />
            <BasePopover.Portal>
                <BasePopover.Positioner side="top" sideOffset={4}>
                    <MotionPopup
                        aria-label={label}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        variants={popupVariants}
                        className="rounded-lg bg-white px-2 text-sm text-black select-none"
                    >
                        {content}
                    </MotionPopup>
                </BasePopover.Positioner>
            </BasePopover.Portal>
        </BasePopover.Root>
    );
}
