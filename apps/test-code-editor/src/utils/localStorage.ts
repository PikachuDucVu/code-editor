import { Folder } from "./types";

type KeyLocalStorageType = "FolderTree";

export const getStorage = (key: KeyLocalStorageType): Folder | undefined => {
  const data = localStorage.getItem(key);

  return data ? (JSON.parse(data) as Folder) : undefined;
};

export const setStorage = (key: KeyLocalStorageType, value: Folder): void => {
  localStorage.setItem(key, JSON.stringify(value) || "");
};
