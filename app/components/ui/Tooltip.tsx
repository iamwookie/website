import { Tooltip as BaseTooltip } from '@base-ui-components/react/tooltip';
import * as motion from 'motion/react-client'; // motion import for server components

const MotionPopup = motion.create(BaseTooltip.Popup);

const Provider = ({ children }: { children: React.ReactNode }) => {
    return <BaseTooltip.Provider delay={0}>{children}</BaseTooltip.Provider>;
};

const Wrapper = ({ children, content }: { children: React.ReactNode; content: string }) => {
    const popupVariants = {
        initial: { opacity: 0, scale: 0.95, y: -6 },
        animate: { opacity: 1, scale: 1, y: -10 },
    };

    return (
        <BaseTooltip.Root>
            <BaseTooltip.Trigger render={<div>{children}</div>} />
            <BaseTooltip.Portal>
                <BaseTooltip.Positioner sideOffset={4}>
                    <MotionPopup
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        variants={popupVariants}
                        className="rounded-lg bg-white px-2 text-sm text-black"
                    >
                        {content}
                    </MotionPopup>
                </BaseTooltip.Positioner>
            </BaseTooltip.Portal>
        </BaseTooltip.Root>
    );
};

export { Provider, Wrapper };
