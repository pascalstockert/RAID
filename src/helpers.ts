export const randomSelection = <T>(array: Array<T>): T => {
  const arrayLength = array.length;
  const randomIndex = Math.floor(Math.random() * arrayLength);
  return array[randomIndex];
};