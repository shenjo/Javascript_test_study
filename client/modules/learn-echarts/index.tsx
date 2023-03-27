import BarCharts from './bar-charts';
import LineChart from './line-chart';
import styles from './index.module.less';
import PieChart from './pie-chart';
import { useEffect, useRef } from 'react';
import { text } from 'stream/consumers';
import ScatterChart from './scatter-chart';

function statisticsHighlightResult () {
  const arr = Array.from(document.querySelectorAll('span[data-highligh-result]'));
  const ids = [...new Set(arr.map(item => item.getAttribute('data-highligh-result')))];
  console.log(ids);
  return ids;
}

export function selectedHighlightText (id: string) {
  document.querySelectorAll(`span[data-highligh-result='${id}']`).forEach(node => {
    node.classList.add('orange-bg');
  });
}

export function unselectedHighlightText (id: string) {
  document.querySelectorAll(`span[data-highligh-result='${id}']`).forEach(node => {
    node.classList.remove('orange-bg');
  });
}

let partialStr = '';

const uuid = () => Math.random().toString().slice(2, 10);

function addHighlightMask (ele: HTMLElement, tobeMaskStr: string, rootEle: HTMLElement) {
  if (ele.nodeType === 3) { // 文本节点
    textToSpanText(ele as any, tobeMaskStr, rootEle);
  } else if (ele.childNodes?.length) {
    // 这里为什么不直接循环处理，因为，在处理的工程中会有节点新增，导致直接循环dom会出问题
    let doms: any[] = [];
    (ele.childNodes as any).forEach((i: any) => {
      doms.push(i);
    });
    doms.forEach((i: any) => {
      addHighlightMask(i, tobeMaskStr, rootEle);
    });
  }
}

function createSpan (text: string, className: string): HTMLElement {
  const span = document.createElement('span');
  span.setAttribute('class', className);
  span.innerText = text;
  return span;
}

function createTextNode (text: string) {
  return document.createTextNode(text);
}

function clearHighlightPartStyle (rootEle: HTMLElement) {
  const eles = rootEle.querySelectorAll('.highlight-part');
  eles.forEach((ele: any) => {
    ele.parentNode?.insertBefore(document.createTextNode(ele.innerText), ele);
    ele.parentNode?.removeChild(ele);
  });
}

function partStyleToAllStyle (rootEle: HTMLElement, uid: string) {
  const eles = rootEle.querySelectorAll('.highlight-part');
  eles.forEach((ele: any) => {
    ele.setAttribute('class', 'highlight-text');
    ele.setAttribute('data-highligh-result', uid);
  });
}

function textToSpanText (textEle: Text, searchStr: string, rootEle: HTMLElement) {
  let result: any[] = [];
  if(!textEle.textContent){
    return;
  }
  innerTransform(textEle.textContent, searchStr, result, rootEle);
  const brother = textEle.nextSibling;
  if (result.length === 1 && textEle.nodeType === result[0].nodeType) {
    // 说明没有变化
    return;
  }
  result.forEach((item: any) => {
    if (brother) {
      textEle.parentNode?.insertBefore(item, brother);
    } else {
      textEle.parentNode?.appendChild(item);
    }
  });
  textEle.parentNode?.removeChild(textEle);
}

function innerTransform (text: string, searchStr: string, result: any[], rootEle: HTMLElement): string | void {
  if (partialStr) {
    if (text.length > partialStr.length) {
      if (text.startsWith(partialStr)) {
        const uid = uuid();
        const span = createSpan(partialStr, 'highlight-text');
        span.setAttribute('data-highligh-result', uid);
        result.push(span);
        // 将部分匹配的样式改成 all
        partStyleToAllStyle(rootEle, uid);
        const restStr = text.slice(partialStr.length);
        partialStr = '';
        innerTransform(restStr, searchStr, result, rootEle);
      } else {
        // 匹配失败
        partialStr = '';
        clearHighlightPartStyle(rootEle);
        innerTransform(text, searchStr, result, rootEle);
      }
    } else {
      if (partialStr.startsWith(text)) {
        result.push(createSpan(text, 'highlight-part'));
        partialStr = partialStr.slice(text.length);
      } else {
        // 匹配失败，撤回所有部分匹配的样式
        partialStr = '';
        innerTransform(text, searchStr, result, rootEle);
      }
    }
    // if(text.)
  } else {
    const segs = text.split(searchStr);
    const length = segs.length;
    segs.forEach((seg, index) => {
      if (seg) {
        result.push(createTextNode(seg));
      }
      if (index !== length - 1) {
        const span = createSpan(searchStr, 'highlight-text');
        span.setAttribute('data-highligh-result', uuid());
        result.push(span);
      }
    });
    const lastSeg = segs[length - 1];
    let splitIndex = -1;
    for (let i = 0, len = lastSeg.length; i < len; i++) {
      splitIndex = i;
      for (let j = i; j < len; j++) {
        if (lastSeg[j] !== searchStr[j - i]) {
          splitIndex = -1;
          break;
        }
      }
      if (splitIndex > -1) {
        break;
      }
    }
    if (splitIndex > -1) {
      result.pop();
      splitIndex > 0 && result.push(createTextNode(lastSeg.slice(0, splitIndex)));
      const rest = lastSeg.slice(splitIndex);
      result.push(createSpan(rest, 'highlight-part'));
      // 本段匹配了部分，剩下的部分即是下一段的partialStr
      partialStr = searchStr.slice(rest.length);
    }
  }
}
const clearHightLight = () => {
  const nodes = document.querySelectorAll('.highlight-text');
  nodes.forEach((ele:any)=>{
    ele.parentNode?.insertBefore(document.createTextNode(ele.innerText), ele);
    ele.parentNode?.removeChild(ele);
  })
};
export default function LearnEcharts () {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {


    // dom!.appendChild(divEle);

  }, []);

  const onClick = ()=>{
    clearHightLight();
    const dom = ref.current;
    const str = '123';
    // const divEle = document.createElement('div');
    // divEle.innerText = 'sdhbbb';
    addHighlightMask(ref.current!, str, ref.current!);
    clearHighlightPartStyle(ref.current!);
    const ids = statisticsHighlightResult();
    selectedHighlightText(ids[0]!);
  }

  const clear = ()=>{
    clearHightLight();
  }

  return (
    <div className={styles['chart-root']}>
      <div id={'test'} ref={ref}>
        <span>123123123</span>
      </div>
      <div onClick={onClick}>匹配</div>
      <div onClick={clear}>清除</div>
      {[BarCharts, LineChart, PieChart,ScatterChart].map((Co, index) => (
        <div key={index} className={styles['chart-item-wrapper']}>
          <Co />
        </div>
      ))}
      <LineChart />
    </div>
  );
}


