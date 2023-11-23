'use client'
import Image from "next/image";

export default function Footer() {
    const date = new Date;

    return (
        <footer>
            <main className="px-48 py-24 flex gap-36">
                <div>
                    <Image
                        src='/assets/logoW.png'
                        width={90}
                        height={90}
                        quality={100}
                        alt="logo"
                    />
                    <h3>The great connection</h3>
                </div>
                <div>
                    <div>
                        <h2>We collaborate with ambitious brands and people;<br />
                            let's build something great together.
                        </h2>
                    </div>
                    <div className="footer--column grid grid-cols-3">
                        <div className="column1">
                            <h3>Start a conversation:</h3>
                            <div className="contact">
                                <h3>podcast@example.com</h3>
                                <h3>+2 969 866 7033</h3>
                            </div>
                            <h3>Terms & Conditions</h3>
                        </div>
                        <div className="column2">
                            <h3>Find us here:</h3>
                            <div className="contact">
                                <h3>Brooklyn, NY 11201<br />United States</h3>
                            </div>
                            <h3>Privacy Policy</h3>
                        </div>
                        <div className="column3">
                            <h3>Follow us on:</h3>
                            <div className="contact">
                                <ul>

                                </ul>
                            </div>
                            <h3>&copy;{date.getFullYear()}Quode Interactive. All rights Reserved.</h3>
                        </div>
                    </div>
                </div>
               
            </main>
        </footer>
    )
}