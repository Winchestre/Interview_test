import Image from "next/image"

export default function Episodes({ slides }) {
    return (
        slides.map((slide) => (
            <li key={slide.id}>
                <div className="relative">
                    <Image
                        src={slide.url}
                        width={250}
                        height={250}
                    />
                    <Image
                        src='/assets/Frame (6).svg'
                        width={15}
                        height={15}
                        style={{ 
                            backgroundColor: "#fff",
                            position: "absolute",
                            top: "0",
                            right: "25%",
                            borderRadius: "5px",
                            
                         }}
                    />
                </div>
                <div className="main--wrap">
                    <div className="srkp--text">
                        <h3 className="text-xs">Episode {slide.id}. Technology</h3>
                        <h2>SRKP selects: {slide.title}</h2>
                    </div>
                    <div className="flex gap-1 pt-5">
                        <h4>Share</h4>
                        <Image
                            src='/assets/Frame (3).svg'
                            width={15}
                            height={15}
                        />
                    </div>
                </div>

            </li>
        ))
    )
}