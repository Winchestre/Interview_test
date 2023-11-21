import Link from "next/link";
import Image from "next/image";

const imageStyle = {
    backgroundColor: 'black',
    color: 'black',
}

export default function Header() {
    return (
        <main className="flex align-center justify-between pt-3">
            <div>
                <Image
                    src="/assets/logonew7.png.png"
                    width={90}
                    height={90}
                    quality={100}
                    alt="logo"
                    style={imageStyle}
                />
            </div>
            <div className="links space-x-3">
                <Link href='/'>Home</Link>
                <Link href='/pages'>Pages</Link>
                <Link href='/podcast'>Podcast</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/shop'>Shop</Link>
            </div>
            <div className="search--menu flex">
                <div className="search">
                    <h2>Search</h2>
                </div>
                <div className="menu">
                    <h2>menu</h2>
                </div>
            </div>
        </main>
    )
}