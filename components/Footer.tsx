import Image from "next/future/image";

const link = "https://donate.unhcr.org/int/en/turkiye-syria-earthquake-emergency";

export default function Footer() {
    return (
        <footer className="lg:fixed md:relative w-screen bottom-4 mt-8 text-center text-white">
            <div className="inline-block backdrop-blur-xl rounded-lg p-2">
                <div className="flex items-center">
                    <Image
                        src="/assets/tr_flag.svg"
                        width={32}
                        height={32}
                        alt="Turkish Flag"
                        className="inline rounded-md mx-1"
                    />
                    <Image
                        src="/assets/sy_flag.svg"
                        width={32}
                        height={32}
                        alt="Syrian Flag"
                        className="inline rounded-md mx-1"
                    />
                    <p className="inline ml-1 text-lg">
                        Thousands have been affected by recent earthquakes in
                        Turkey, Syria and neighboring countries.{" "}
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="underline hover:opacity-50"
                        >
                            Click here
                        </a>{" "}
                        to donate.
                    </p>
                </div>
            </div>
        </footer>
    );
}
