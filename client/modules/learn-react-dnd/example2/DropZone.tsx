import { useDrag, useDrop } from 'react-dnd';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import cx from 'classnames';

const DropZone = () => {
  const [droppedFields, setDroppedFields] = useState<Dnd.IField[]>([]);
  const sourceRef = useRef<Dnd.IField[]>([]);
  sourceRef.current = droppedFields;

  const removeField = (id: string) => {
    setDroppedFields(prevState => prevState.filter(item => item.id !== id));
  };

  const swapField = (id1: string, id2: string) => {
    const index1 = droppedFields.findIndex(i => i.id === id1);
    const index2 = droppedFields.findIndex(i => i.id === id2);
    if (index1 >= 0 && index2 >= 0 && index1 !== index2) {
      console.log('shenjo 交换', index2, index1);
      setDroppedFields(prevState => {
        let temp = prevState[index1];
        prevState[index1] = prevState[index2];
        prevState[index2] = temp;
        return [...prevState];
      });
    }
  };

  const [{ isOver, canDrop, dragObj }, drop] = useDrop({
    accept: 'FIELD',
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      dragObj: monitor.getItem<Dnd.IField>(),
    }),
    drop (dragItem, monitor) {
      console.log('shenjo drop',);
    }
  });

  useEffect(() => {
    if (!dragObj) {
      return;
    }
    const index = sourceRef.current.findIndex(item => item.id == dragObj.id);
    if (isOver) {
      // 添加进dropField，
      if (index < 0) {

        setDroppedFields(prevState => [...prevState, dragObj]);
      }
    } else {
      if (index >= 0) {
        setDroppedFields(prevState => prevState.filter(item => item.id !== dragObj.id));
      }
    }
  }, [isOver, dragObj]);

  console.log('shenjo dropFields', isOver, dragObj, droppedFields);

  return (
    <div ref={drop} className={cx(styles.fields, isOver ? styles['dropable-hover'] : null)}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {droppedFields.map((field, index) => (
          <DroppableItem key={field.id} field={field} removeField={removeField} swapField={swapField} />
        ))}
      </div>
    </div>
  );
};

const DroppableItem = ({ field, removeField, swapField }: { field: Dnd.IField, removeField: (id: string) => void, swapField: (id1: string, id2: string) => void }) => {

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ['FIELD'],
    hover (item: Dnd.IField, monitor) {
      if (item.id === field.id) {
        return;
      }
      swapField(item.id, field.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const [, drag] = useDrag({
    type: 'FIELD',
    item: { id: field.id, title: field.title },
  });

  drop(ref);
  drag(ref);

  return (
    <div ref={ref} style={{ border: '1px solid gray', padding: 8, marginBottom: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{field.title}</div>
        <button onClick={() => removeField(field.id)}>Remove</button>
      </div>
    </div>
  );
};

export default DropZone;
