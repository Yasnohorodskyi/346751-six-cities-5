export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getIndex = (element, array) => {
  return array.findIndex((item) => item.id === element.id);
};

export const getNewArray = (element, array, index) => {
  return [...array.slice(0, index), element, ...array.slice(index + 1)];
};
