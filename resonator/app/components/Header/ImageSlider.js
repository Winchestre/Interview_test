'use client';
import { useState } from "react";

export default function ImageSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative"
    }

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        cursor: "pointer",
        zIndex: "1000",
        color: "#fff"
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        cursor: "pointer",
        zIndex: "1000",
        color: "#fff"
    }

    return (
        <main style={ sliderStyles }>
            <div className="" style={leftArrowStyles}>(</div>
            <div className="" style={rightArrowStyles}>)</div>
            <div style={slideStyles}></div>
        </main>
    )
}