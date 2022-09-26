import './DrawingCanvas.css'
import {useRef, useEffect, useState} from 'react'


const DrawingCanvas = () => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1000;
        canvas.height = 1000;  
        
        const context = canvas.getContext('2d')
        context.lineCap = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        contextRef.current = context;
        
    } , [])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();

    };

    const draw = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    };

    const stopDrawing = ({}) => {
        contextRef.current.closePath();
        setIsDrawing(false);

    };
    

    return (

        <canvas id="canvas" className="canvas-container" ref = {canvasRef}>
            onMouseDown = {startDrawing}
            onMouseMove = {draw}
            onMouseUp = {stopDrawing}  
            onMouseLeave = {stopDrawing}
            

        </canvas>
    )
}

export default DrawingCanvas