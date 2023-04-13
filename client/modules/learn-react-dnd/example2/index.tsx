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
        <div>在例子1的基础上，加上了放置的时候可以在目标源上交换位置</div>
        <div>这个要求，放置源上的每个Item也是允许作为放置源的</div>
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

