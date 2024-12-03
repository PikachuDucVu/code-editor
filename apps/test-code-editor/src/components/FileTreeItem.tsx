import { FileIcon } from "lucide-react";

interface FileTreeItemProps {
  name: string;
}

export function FileTreeItem({ name }: FileTreeItemProps) {
  return (
    <div className="flex items-center py-1 px-2 hover:bg-accent rounded-md">
      <FileIcon className="mr-2 h-4 w-4 shrink-0" />
      <span className="text-sm">{name}</span>
    </div>
  );
}
