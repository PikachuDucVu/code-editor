import CodeEditor from "./components/CodeEditor";
import { AppSidebar } from "./components/SideBar";
import { SidebarProvider } from "./components/ui/sidebar";
import { Folder } from "./utils/types";

// Sample file structure
const fileStructure: Folder[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.tsx", type: "file" },
          { name: "Card.tsx", type: "file" },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    children: [
      { name: "index.html", type: "file", fileContent: "<h1>Hello World</h1>" },
    ],
  },
];
function App() {
  return (
    <>
      <div className="flex h-full w-full text-white dark bg-black">
        <div className="w-1/5 h-full ">
          <SidebarProvider>
            <AppSidebar fileStructure={fileStructure} />
          </SidebarProvider>
        </div>

        <div className="flex-1 h-full text-white">
          <CodeEditor />
        </div>
      </div>
    </>
  );
}

export default App;
