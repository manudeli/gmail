export const position = (p) => ({
  current: p,
  negate() {
    if (this.current === 'left') return 'right';
    if (this.current === 'right') return 'left';
    if (this.current === 'top') return 'bottom';
    if (this.current === 'bottom') return 'top';
  },
  isHorizontal() {
    return this.current === 'left' || this.current === 'right';
  },
  isVertical() {
    return this.current === 'top' || this.current === 'bottom';
  },
});

const point = () => ({
  x: null,
  y: null,
  reset(p) {
    this.x = p.x;
    this.y = p.y;
  },
  restrictRect(rect) {
    if (this.x < rect.l) this.x = rect.l;
    else if (this.x > rect.r) this.x = rect.r;
    if (this.y < rect.t) this.y = rect.t;
    else if (this.y > rect.b) this.y = rect.b;
  },
});

export const getPoint = (el, elMove, placement, space) => {
  let recurCount = 0;
  const pt = point();
  const bdys = {
    l: space,
    t: space,
    r: document.body.clientWidth - (elMove.clientWidth + space),
    b: window.innerHeight - (elMove.clientHeight + space),
  };
  const elRect = el.getBoundingClientRect();

  return (function recursive(placement) {
    recurCount++;
    const pos = position(placement);
    switch (pos.current) {
      case 'left':
        pt.x = elRect.left - (elMove.offsetWidth + space);
        pt.y = elRect.top + (el.offsetHeight - elMove.offsetHeight) / 2;
        break;
      case 'right':
        pt.x = elRect.right + space;
        pt.y = elRect.top + (el.offsetHeight - elMove.offsetHeight) / 2;
        break;
      case 'top':
        pt.x = elRect.left + (el.offsetWidth - elMove.offsetWidth) / 2;
        pt.y = elRect.top - (elMove.offsetHeight + space);
        break;
      default:
        pt.x = elRect.left + (el.offsetWidth - elMove.offsetWidth) / 2;
        pt.y = elRect.bottom + space;
    }

    if (recurCount < 3)
      if (
        (pos.isHorizontal() && (pt.x < bdys.l || pt.x > bdys.r)) ||
        (pos.isVertical() && (pt.y < bdys.t || pt.y > bdys.b))
      ) {
        pt.reset(recursive(pos.negate()));
      }

    // restrict to rect boundary
    pt.restrictRect(bdys);

    return pt;
  })(placement);
};
