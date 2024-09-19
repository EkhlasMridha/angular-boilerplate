export function debounceFunc(func: Function, wait: number) {
  let timeout: any;
  return function (...args: any) {
    const context = globalThis;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
