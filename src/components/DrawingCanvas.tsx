import './DrawingCanvas.css'

import React, { useRef, useEffect } from 'react';

const SimpleCanvasExample: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  let image = new Image();
    image.src = "https://www.kirupa.com/html5/images/pressing_down_200.png"
    image.onload = () => {
        if (canvasCtxRef.current) {
            canvasCtxRef.current.drawImage(image, 0, 0);
        }
    };
    

  

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      
      let ctx = canvasCtxRef.current;
      ctx!.beginPath();
      ctx!.stroke();
      
    }
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default SimpleCanvasExample;


// import {useRef, useEffect, useState} from 'react'


// const DrawingCanvas = () => {
//     const canvasRef = useRef(null)
//     const contextRef = useRef(null)

//     const [isDrawing, setIsDrawing] = useState(false)

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         canvas.width = 1000;
//         canvas.height = 1000;  
        
//         const context = canvas.getContext('2d')
//         context.lineCap = 'round';
//         context.strokeStyle = 'black';
//         context.lineWidth = 5;
//         contextRef.current = context;
        
//     } , [])

//     const startDrawing = ({nativeEvent}) => {
//         const {offsetX, offsetY} = nativeEvent;
//         base_image = new Image();
//         contextRef.image.src = 'https://www.kirupa.com/html5/images/pressing_down_200.png';
//         contextRef.image.onload = function(){
//         contextRef.drawImage(base_image, 0, 0);
//         setIsDrawing(true);
//         nativeEvent.preventDefault();

//     };

//     const draw = ({nativeEvent}) => {
//         if(!isDrawing) {
//             return;
//         }
//         const {offsetX, offsetY} = nativeEvent;
//         contextRef.current.lineTo(offsetX, offsetY);
//         contextRef.current.stroke();
//         nativeEvent.preventDefault();
//     };

//     const stopDrawing = ({}) => {
//         contextRef.current.closePath();
//         setIsDrawing(false);

//     };
    

//     return (

//         <canvas id="canvas" className="canvas-container" ref = {canvasRef}>
//             onMouseDown = {startDrawing}
//             onMouseMove = {draw}
//             onMouseUp = {stopDrawing}  
//             onMouseLeave = {stopDrawing}
            

//         </canvas>
//     )
// }

// export default DrawingCanvas