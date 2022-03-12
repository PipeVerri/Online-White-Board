import React, {useRef, useEffect} from "react";

export function DrawingBoard() {
    const canvasRef = useRef(null);

    const style = {
        backgroundColor: "red"
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1920;
        canvas.height = 1080;
        canvas.style.width = `${window.innerWidth * 0.8}px`;
        canvas.style.height = `${window.innerHeight * 0.8}px`;
    });
S
    return <div align="center"><canvas ref={canvasRef} style={style}/></div>;
}