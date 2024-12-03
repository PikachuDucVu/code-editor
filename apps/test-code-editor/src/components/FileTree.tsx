import { Folder, ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FileTreeItem } from "./FileTreeItem";

export function FileTree({ items }: { items: Folder }) {
  return (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index}>
          {item.type === "folder" ? (
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center py-1 hover:bg-accent rounded-md">
                <ChevronDown className="h-4 w-4 shrink-0" />
                <Folder className="mr-2 h-4 w-4 shrink-0" />
                <span className="text-sm">{item.name}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 pt-1">
                  <FileTree items={item.children || []} />
                </div>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <FileTreeItem name={item.name} />
          )}
        </li>
      ))}
    </ul>
  );
}
