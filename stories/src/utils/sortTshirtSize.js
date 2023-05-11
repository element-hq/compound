const sizeOrder = {
  xs: 10,
  sm: 20,
  md: 30,
  lg: 40,
  xl: 50 
}

const weightOrder = {
  regular: 0,
  medium: 1,
  semibold: 2,
  bold: 3,
}

const tshirtRegex = /(xs|sm|md|lg|xl)(regular|medium|semibold|bold)$/i;

export default function sortTshirtSize(a, b) {

  const [, aSize, aWeight] = a.match(tshirtRegex);
  const [, bSize, bWeight] = b.match(tshirtRegex);
  return (sizeOrder[bSize.toLowerCase()] + weightOrder[bWeight.toLowerCase()]) - (sizeOrder[aSize.toLowerCase()] + weightOrder[aWeight.toLowerCase()])
}
