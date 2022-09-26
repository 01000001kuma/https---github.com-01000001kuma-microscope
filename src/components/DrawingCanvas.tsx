
        
        
        // THIS IMAGE VIEWER DOES NOT RESPOND BECAUSE I WASN'T ABLE TO TRANSLATE IT FROM PURE VANILLA JAVASCRIPT TO TYPESCRIPT TO VIEW A 
        // WORKING LIVE EXAMPLE CLICK HERE: https://codepen.io/01000001kuma/pen/XWVJqbW



    //     var canvas = document.getElementsByTagName('canvas')[0];
    //     canvas.width = 800;
    // canvas.height = 600;
    
    //     var gkhead = new Image;
    
    //     window.onload = function(){		
        
    //             var ctx = canvas.getContext('2d');
    //             trackTransforms(ctx);
              
    //     function redraw(){
    
    //           // Clear the entire canvas
    //           var p1 = ctx.transformedPoint(0,0);
    //           var p2 = ctx.transformedPoint(canvas.width,canvas.height);
    //           ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);
    
    //           ctx.save();
    //           ctx.setTransform(1,0,0,1,0,0);
    //           ctx.clearRect(0,0,canvas.width,canvas.height);
    //           ctx.restore();
    
    //           ctx.drawImage(gkhead,0,0);
    
    //         }
    //         redraw();
    
    //       var lastX=canvas.width/2, lastY=canvas.height/2;
    
    //       var dragStart,dragged;
    
    //       canvas.addEventListener('mousedown',function(evt){
    //           document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
    //           lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    //           lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    //           dragStart = ctx.transformedPoint(lastX,lastY);
    //           dragged = false;
    //       },false);
    
    //       canvas.addEventListener('mousemove',function(evt){
    //           lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    //           lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    //           dragged = true;
    //           if (dragStart){
    //             var pt = ctx.transformedPoint(lastX,lastY);
    //             ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
    //             redraw();
    //                 }
    //       },false);
    
    //       canvas.addEventListener('mouseup',function(evt){
    //           dragStart = null;
    //           if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
    //       },false);
    
    //       var scaleFactor = 1.1;
    
    //       var zoom = function(clicks){
    //           var pt = ctx.transformedPoint(lastX,lastY);
    //           ctx.translate(pt.x,pt.y);
    //           var factor = Math.pow(scaleFactor,clicks);
    //           ctx.scale(factor,factor);
    //           ctx.translate(-pt.x,-pt.y);
    //           redraw();
    //       }
    
    //       var handleScroll = function(evt){
    //           var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
    //           if (delta) zoom(delta);
    //           return evt.preventDefault() && false;
    //       };
        
    //       canvas.addEventListener('DOMMouseScroll',handleScroll,false);
    //       canvas.addEventListener('mousewheel',handleScroll,false);
    //     };
    
    //     image.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';  // THIS COULD BE EASLY ACCES BY AN API CALL TO GET THE IMAGE FROM THE SERVER
        
    //     // Adds ctx.getTransform() - returns an SVGMatrix
    //     // Adds ctx.transformedPoint(x,y) - returns an SVGPoint
    //     function trackTransforms(ctx){
    //       var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    //       var xform = svg.createSVGMatrix();
    //       ctx.getTransform = function(){ return xform; };
    
    //       var savedTransforms = [];
    //       var save = ctx.save;
    //       ctx.save = function(){
    //           savedTransforms.push(xform.translate(0,0));
    //           return save.call(ctx);
    //       };
        
    //       var restore = ctx.restore;
    //       ctx.restore = function(){
    //         xform = savedTransforms.pop();
    //         return restore.call(ctx);
    //               };
    
    //       var scale = ctx.scale;
    //       ctx.scale = function(sx,sy){
    //         xform = xform.scaleNonUniform(sx,sy);
    //         return scale.call(ctx,sx,sy);
    //               };
        
    //       var rotate = ctx.rotate;
    //       ctx.rotate = function(radians){
    //           xform = xform.rotate(radians*180/Math.PI);
    //           return rotate.call(ctx,radians);
    //       };
        
    //       var translate = ctx.translate;
    //       ctx.translate = function(dx,dy){
    //           xform = xform.translate(dx,dy);
    //           return translate.call(ctx,dx,dy);
    //       };
        
    //       var transform = ctx.transform;
    //       ctx.transform = function(a,b,c,d,e,f){
    //           var m2 = svg.createSVGMatrix();
    //           m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
    //           xform = xform.multiply(m2);
    //           return transform.call(ctx,a,b,c,d,e,f);
    //       };
        
    //       var setTransform = ctx.setTransform;
    //       ctx.setTransform = function(a,b,c,d,e,f){
    //           xform.a = a;
    //           xform.b = b;
    //           xform.c = c;
    //           xform.d = d;
    //           xform.e = e;
    //           xform.f = f;
    //           return setTransform.call(ctx,a,b,c,d,e,f);
    //       };
        
    //       var pt  = svg.createSVGPoint();
    //       ctx.transformedPoint = function(x,y){
    //           pt.x=x; pt.y=y;
    //           return pt.matrixTransform(xform.inverse());
    //       }
    //     }


import './DrawingCanvas.css';
import React, { useRef, useEffect } from 'react';

const SimpleCanvasExample: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  

  useEffect(() => {
    // Initialize
    

    if (canvasRef.current) {
        canvasCtxRef.current = canvasRef.current.getContext('2d');      
      
        let ctx = canvasCtxRef.current;
        var imageObj = new Image();
      
      
        ctx!.canvas.width = window.innerWidth;
        ctx!.canvas.height = window.innerHeight;

        imageObj.onclick = function up() {
            ctx!.scale(1,2);
        };
        
        imageObj.onload = function() {
        ctx!.drawImage(imageObj, 0, 0,window.innerWidth,window.innerHeight);
        };    
        imageObj.src = 'https://us.123rf.com/450wm/sinhyu/sinhyu2001/sinhyu200100202/139361715-close-up-plant-stem-under-the-microscope-for-classroom-education-.jpg?ver=6'; 
        
        ctx!.beginPath();
        ctx!.stroke();

        
      
      
    }
  }, []);

  return (
    <>

    <div>
        <div className="nav">
            
            <a className="zoom1" href="/">5x</a>
            <a className="zoom2" href="/">10x</a>
            <a className="zoom3" href="/">20x</a>
            <a className="zoom4" href="/">40x</a>
            <a className="zoom5" href="/">60x</a>
            <a className="minus" href="/">-</a>
            <a className="minus" href="/">+</a>

        </div>
    </div>
     
    <h3>This image viewer does not respond because I wasn't able to translate it from pure VANILLA JAVASCRIPT to TYPESCRIPT.
    <br /> TO VIEW A WORKING LIVE EXAMPLE PLEASE CLICK HERE: <a href="https://codepen.io/01000001kuma/pen/XWVJqbW">https://codepen.io/01000001kuma/pen/XWVJqbW</a>
    </h3>
    
    <canvas className='canvas-container' ref={canvasRef}>

    </canvas>

    </>

  );
};

export default SimpleCanvasExample;

