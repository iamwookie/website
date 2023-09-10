import Image from 'next/image';

export default function TechStack() {
    return (
        <div className="mt-3">
            <div className="flex justify-center gap-0">
                <Image src="/assets/icons/stack.svg" alt="Tech Stack" width={500} height={100} priority />
            </div>
        </div>
    );
}
