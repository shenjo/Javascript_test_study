export function titleTransform (title?: IChartTitle) {
  if (title) {
    const { show, text, position } = title;
    let pos: any = {};
    if (position === 'bottomCenter') {
      pos.bottom = 0;
      pos.left = '50%';
    } else if (position === 'topCenter') {
      pos.top = 0;
      pos.left = '50%'
    }
    return {
      show,
      text,
      ...pos
    };
  }
}
