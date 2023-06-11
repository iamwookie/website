export default function TechStack({ stack }: { stack: { name: string; bgColor: string; borderColor: string }[] }) {
    return (
        <div className="mt-3">
            {stack.map((tech) => (
                <span
                    key={tech.name}
                    className={`py-0.5 px-2 mx-1 rounded-full text-sm border-2`}
                    style={{ backgroundColor: tech.bgColor, borderColor: tech.borderColor }}
                >
                    {tech.name}
                </span>
            ))}
        </div>
    );
}
