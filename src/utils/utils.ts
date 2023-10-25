export const firstLetterUpperCase = (value: string) => {
  return value
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase());
};
