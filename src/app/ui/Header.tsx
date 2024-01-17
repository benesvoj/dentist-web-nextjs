import Image from "next/image";
import {Logo} from "@/app/ui/Logo";
import {urls} from "@/app/lib/urls";
import Link from "next/link";
import {website} from "@/app/lib/website";

export const Header = () => {
    return (
        <div className="flex-col w-full max-w-5xl">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <div className="pr-2">
                        {website.address}
                    </div>
                    <div>
                        {website.email}
                    </div>
                </div>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Logo/>
                    </a>
                </div>
            </div>
            <nav className="flex justify-between p-5">
                {urls.map((item, index) => (
                    <Link className="p-2 rounded hover:underline hover:underline-offset-4" key={index} href={item.url}>{item.title}</Link>
                ))}
            </nav>
        </div>
    )
}