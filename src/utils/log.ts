export function logLog(message: string) {
  console.log(`[${getTimestamp()}] ${message}`);
}

export function logE(message: string) {
  console.error(`[${getTimestamp()}] ${message}`);
}

export function logW(message: string) {
  console.warn(`[${getTimestamp()}] ${message}`);
}

export function logI(message: string) {
  console.info(`[${getTimestamp()}] ${message}`);
}

export function logD(message: string) {
  console.debug(`[${getTimestamp()}] ${message}`);
}

function getTimestamp(): string {
  return new Date().toISOString();
}
