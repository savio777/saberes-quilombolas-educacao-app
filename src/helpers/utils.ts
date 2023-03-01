type IDocumentError = {
  nativeStackAndroid: any[];
  userInfo?: null | any;
  message?: string;
  code?: string;
  line?: number;
  column?: number;
  sourceURL?: string;
};

export const maskPattern = (valueString = '', patternString = '') => {
  let i = 0;

  return patternString.replace(/#/g, () => valueString[i++] || '');
};

export const maskDate = (value = '') =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1');

export const textLoremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

export const isDocumentError = (err: any): err is IDocumentError => {
  return typeof err?.line === 'number';
};
