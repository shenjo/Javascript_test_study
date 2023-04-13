import { useDrop } from 'react-dnd';
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

  const [{ isOver, canDrop, dragObj }, drop] = useDrop({
    accept: 'FIELD',
    hover: (item: Dnd.IField, monitor) => {

    },
    drop: (item, monitor) => {

    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      dragObj: monitor.getItem(),

    }),
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

  // console.log('shenjo dropFields', droppedFields);

  return (
    <div ref={drop} className={cx(styles.fields, isOver ? styles['dropable-hover'] : null)}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {droppedFields.map((field, index) => (
          <div key={field.id} style={{ border: '1px solid gray', padding: 8, marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>{field.title}</div>
              <button onClick={() => removeField(field.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropZone;
