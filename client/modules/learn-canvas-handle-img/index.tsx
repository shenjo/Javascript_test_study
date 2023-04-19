import React, { useRef, useEffect } from 'react';

function CanvasDrawing () {
  const props = {
    width: '400px',
    height: '400px'
  };
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<any>(null);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;


    // 加载图片
    const img = new Image();
    img.src = '/images/canvas-img/beauty.jpeg';
    img.onload = function () {
      console.log('shenjo test')
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.onerror = function (event, source, lineno, colno, error){
      console.log('shenjo 出错了',event)
    }
    // ctx.drawImage(imgRef.current!, 0, 0, canvas.width, canvas.height);

    // 设置涂抹样式
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    // 注册鼠标事件
    const handleMouseDown = (e: any) => {
      isDrawingRef.current = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    const handleMouseMove = (e: any) => {
      if (isDrawingRef.current) {
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
      }
    };

    const handleMouseUp = (e: any) => {
      isDrawingRef.current = false;
    };

    const handleMouseOut = (e: any) => {
      isDrawingRef.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);

    // 清除事件监听器
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
   <div>
     <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>
   </div>
  );
}

export default CanvasDrawing;
