// motion import for server components
import * as motion from 'motion/react-client';
import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip';

function TooltipProvider({ children }: { children: React.ReactNode }) {
    return <BaseTooltip.Provider delay={0}>{children}</BaseTooltip.Provider>;
}

function TooltipWrapper({ children, content }: { children: React.ReactNode; content: string }) {
    const variants = {
        hidden: { opacity: 0, scale: 0.95, y: -6 },
        show: { opacity: 1, scale: 1, y: -10 },
    };

    const MotionPopup = motion.create(BaseTooltip.Popup);

    return (
        <BaseTooltip.Root>
            <BaseTooltip.Trigger render={<div>{children}</div>} />
            <BaseTooltip.Portal>
                <BaseTooltip.Positioner sideOffset={4}>
                    <MotionPopup
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        variants={variants}
                        className="rounded-lg border border-white/20 bg-white px-2 text-sm text-black"
                    >
                        {content}
                    </MotionPopup>
                </BaseTooltip.Positioner>
            </BaseTooltip.Portal>
        </BaseTooltip.Root>
    );
}

export default { Provider: TooltipProvider, Wrapper: TooltipWrapper };
