export function getStorage(key) {
  try {
    const serializedValue = localStorage.getItem(key);
    if (!serializedValue) return undefined;
    return JSON.parse(serializedValue);
  } catch (e) {
    return undefined;
  }
}

export async function setStorage(key, value) {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (e) {}
}
