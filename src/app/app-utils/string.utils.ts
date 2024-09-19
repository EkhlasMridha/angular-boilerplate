export const isNullOrUndefined = <T>(item: T) => {
  return item === undefined || item === null;
};

export const isEmpty = <T>(item: T) => {
  return (item ?? '') === '';
};

export const ensureTailingSlash = (
  url: string,
  pos: 'start' | 'end' = 'end'
) => {
  url = url.endsWith('/') ? url : url + '/';

  return url;
};

export const matchCaseInsensitive = (text1: string, text2: string) => {
  return (
    (text1 ?? '').toLowerCase().trim() === (text2 ?? '').toLowerCase().trim()
  );
};
