// @ts-nocheck
import React from 'react';
import { useDrag } from 'react-dnd';

const Field = ({ field }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIELD',
    item: { id: field.id, title: field.title },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`field ${isDragging ? 'dragging' : ''}`}>
      {field.title}
    </div>
  );
};

export default Field;
