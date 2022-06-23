export const maskPattern = (valueString = "", patternString = "") => {
  let i = 0;

  return patternString.replace(/#/g, () => valueString[i++] || "");
};

export const textLoremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
