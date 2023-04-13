import React, { useState } from 'react';
import Field from './Field';
import DropZone from './DropZone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './index.module.less';

const App = () => {
  const [fields] = useState([
    { id: 'field-1', title: 'Field 1' },
    { id: 'field-2', title: 'Field 2' },
    { id: 'field-3', title: 'Field 3' },
    { id: 'field-4', title: 'Field 4' },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ textAlign: 'center', width: '400px', margin: '40px auto' }}>
        <div>最基本的拖拽例子</div>
        <div>核心处理逻辑为：当左侧拖出来的item，hover在放置区时，将拖拽源数据放到最终的List里，当拖拽源超出放置源后，从List移除</div>
        <div>所有逻辑都在 useEffect里，根据isOver标志做处理，不在useDrop的hover以及onDrop里处理</div>
      </div>
      <div className={styles.app}>
        <div className={styles.fields}>
          {fields.map(field => (
            <Field key={field.id} field={field} />
          ))}
        </div>
        <DropZone />
      </div>
    </DndProvider>
  );
};

export default App;

