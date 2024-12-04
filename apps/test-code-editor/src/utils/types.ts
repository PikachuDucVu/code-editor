export type File = {
  name: string;
  type: "file";
  content?: string;
};

export type Folder = {
  name: string;
  type: "folder" | "file";
  children: (Folder | File)[];
};

export type FolderActionCallback = (
  action: "add" | "remove",
  type: "file" | "folder",
  name: string,
  path: string[]
) => Promise<boolean> | boolean;
