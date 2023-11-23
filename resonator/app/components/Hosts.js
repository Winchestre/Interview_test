import Image from "next/image"

export default function Hosts({hosts}) {
    return (
        hosts.map((host) => (
            <li key={host.id}>
                <div>
                    <Image 
                        src={host.url}
                        width={250}
                        height={250}
                    />
                </div>
                <div>
                    <h3>{host.name}</h3>
                    <h4>{host.role}</h4>
                    <div>
                        <ul className="flex gap-2">
                            <li>
                                <Image
                                    src='/assets/Frame (5).svg'
                                    width={13}
                                    height={13}
                                    style={{ backgroundColor: "#8E8B8C", borderRadius: "50%" }}
                                />
                            </li>
                            <li>
                                <Image
                                    src='/assets/Frame (5).svg'
                                    width={13}
                                    height={13}
                                    style={{ backgroundColor: "#8E8B8C", borderRadius: "50%" }}
                                />
                            </li>
                            <li>
                                <Image
                                    src='/assets/Frame (5).svg'
                                    width={13}
                                    height={13}
                                    style={{ backgroundColor: "#8E8B8C", borderRadius: "50%" }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        ))
    )
}