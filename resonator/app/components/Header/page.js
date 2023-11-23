import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <main className="flex justify-between align-center py-5 px-8">
            <div>
                <Image
                    src="/assets/logonew1.png.png"
                    width={90}
                    height={90}
                    quality={100}
                    alt="logo"
                />
            </div>
            <ul className="flex gap-6">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/Pages'>Pages</Link>
                </li>
                <li>
                    <Link href='/Podcast'>Podcast</Link>
                </li>
                <li>
                    <Link href='/Blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/Shop'>Shop</Link>
                </li>
            </ul>
            <div className="search--menu flex gap-3">
                <div className="flex align-center">
                    <Image
                        src='/assets/Frame.svg'
                        width={13}
                        height={13}
                        alt='circle'
                    />
                    <span className="text-sm">Search</span>
                </div>
                <Image
                    src='/assets/grid.svg'
                    width={25}
                    height={25}
                    alt='circle'
                />
            </div>
        </main>
    )
}