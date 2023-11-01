export const firstLetterUpperCase = (value: string) => {
  return value
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase());
};

export const validateEmptyProps = (object: object) => {
  for (const prop in object) {
    if (object[prop] === "") {
      return true;
    }
  }
  return false;
};
