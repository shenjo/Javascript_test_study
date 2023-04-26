import React, { useEffect, useRef, useState } from 'react';

interface CanvasDrawProps {
  canvasWidth: number;
  canvasHeight: number;
}

const CanvasDraw: React.FC<CanvasDrawProps> = ({ canvasWidth, canvasHeight }) => {
  const [isPainting, setIsPainting] = useState(false);
  const [undoList, setUndoList] = useState<string[]>([]);
  const [redoList, setRedoList] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startPaint = () => {
    setIsPainting(true);
  };

  const endPaint = () => {
    setIsPainting(false);
  };

  const handlePaint = (event: any) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    // get the mouse position
    const mouseX = event.nativeEvent.offsetX;
    const mouseY = event.nativeEvent.offsetY;

    if (isPainting && context) {
      context.lineWidth = 5;
      context.lineCap = 'round';
      context.strokeStyle = 'black';
      context.lineTo(mouseX, mouseY);
      context.stroke();
      context.beginPath();
      context.moveTo(mouseX, mouseY);
    }
  };

  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    if (undoList.length > 0) {
      const lastPaint = undoList.pop();
      if (lastPaint) {
        redoList.push(canvas.toDataURL());
        const img = new Image();
        img.onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0);
        };
        img.src = lastPaint;
      }
    }
  };

  const handleRedo = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    if (redoList.length > 0) {
      const lastUndo = redoList.pop();
      if (lastUndo) {
        undoList.push(canvas.toDataURL());
        const img = new Image();
        img.onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0);
        };
        img.src = lastUndo;
      }
    }
  };

  useEffect(()=>{
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
  },[])

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={startPaint}
        onMouseUp={endPaint}
        onMouseMove={handlePaint}
      />
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
};

export default CanvasDraw;
