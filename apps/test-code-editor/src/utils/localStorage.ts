type KeyLocalStorageType = "FolderTree";

export const getStorage = (key: KeyLocalStorageType): string | null => {
  return JSON.parse(localStorage.getItem(key) || "null");
};

export const setStorage = (key: KeyLocalStorageType, value: string): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
