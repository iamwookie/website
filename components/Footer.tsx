import Image from "next/image";

const link = "https://donate.unhcr.org/int/en/turkiye-syria-earthquake-emergency";

export default function Footer() {
    return (
        <footer className="lg:fixed md:relative w-screen bottom-4 mt-8 text-center">
            <div className="inline-block backdrop-blur-xl rounded-lg p-2 animate__animated animate__fadeIn">
                <div className="flex items-center">
                    <Image
                        src="/assets/tr_flag.svg"
                        width={26}
                        height={26}
                        alt="Turkish Flag"
                        className="inline rounded-sm mx-1"
                    />
                    <Image
                        src="/assets/sy_flag.svg"
                        width={26}
                        height={26}
                        alt="Syrian Flag"
                        className="inline rounded-sm mx-1"
                    />
                    <p className="inline ml-1">
                        Thousands have been affected by recent earthquakes in
                        Turkey, Syria and neighboring countries.{" "}
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer noopener"
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
