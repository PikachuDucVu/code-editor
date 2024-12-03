import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { FileTree } from "./FileTree";
import { FilePlus, FolderPlus } from "lucide-react";
import { Folder } from "@/utils/types";

export function AppSidebar({ fileStructure }: { fileStructure: Folder[] }) {
  return (
    <Sidebar className="w-1/5">
      <SidebarHeader>
        <h2 className=" text-lg font-semibold tracking-tight">Files</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex w-full justify-end gap-2 items-center">
              <FilePlus size={18} className="cursor-pointer" />
              <FolderPlus size={18} className="cursor-pointer " />
            </div>
            <FileTree items={fileStructure} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
