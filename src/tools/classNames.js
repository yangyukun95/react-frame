export const classes = (cls) => {
  if (
    !classes ||
    Object.prototype.toString.call(cls) !== '[object Array]'
  ) {
    throw new Error('classnames must be a array ');
  }

  let name = '';
  cls.forEach((i, index) => {
    if (typeof i === 'string') {
      if (index === 0) {
        name = i;
      } else {
        name = `${name} ${i}`;
      }
    }
  });
  return name;
};

