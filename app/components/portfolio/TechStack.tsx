import Image from 'next/image';
import Tooltip from '@components/ui/Tooltip';

export default function TechStack() {
    return (
        <div className="mt-3">
            <div className="flex justify-center">
                <Tooltip content="HTML">
                    <Image priority src="/assets/icons/html.svg" width={48} height={48} alt="HTML" />
                </Tooltip>

                <Tooltip content="CSS">
                    <Image priority src="/assets/icons/css.svg" width={48} height={48} alt="CSS" />
                </Tooltip>

                <Tooltip content="JavaScript">
                    <Image priority src="/assets/icons/javascript.svg" width={48} height={48} alt="JavaScript" />
                </Tooltip>

                <Tooltip content="TypeScript">
                    <Image priority src="/assets/icons/typescript.svg" width={48} height={48} alt="TypeScript" />
                </Tooltip>

                <Tooltip content="NodeJS">
                    <Image priority src="/assets/icons/nodejs.svg" width={48} height={48} alt="NodeJS" />
                </Tooltip>

                <Tooltip content="React">
                    <Image priority src="/assets/icons/react.svg" width={48} height={48} alt="React" />
                </Tooltip>
            </div>
        </div>
    );
}
