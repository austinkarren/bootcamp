function isPromise<T>(val: Promise<T> | T): val is Promise<T> {
  return !!(val as Promise<T>).then;
}

export async function inspectLog(cb: () => Promise<void> | void) {
  const oldLog = console.log;
  const logs: any[] = [];
  console.log = function(...args: any[]) {
    logs.push(...args);
    // oldLog.call(console, ...args);
  };
  const result = cb();
  if (isPromise(result)) {
    await result;
  }
  console.log = oldLog;
  return logs;
}
