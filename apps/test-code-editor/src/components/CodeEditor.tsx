import Editor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useFolderContext } from "./context/FolderContext";
import { Folder } from "@/utils/types";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const { currentFile, root, getContentFileByPath } = useFolderContext();

  const [initialized, setInitialized] = useState(false);

  // const findAllFiles = (tree: Folder) => {
  //   let files: string[] = [];
  //   let selectedPath: string[] = [];

  //   async function traverse(node: Folder, path: string) {
  //     selectedPath.push(`${node.name}`);

  //     if (node.type === "file") {
  //       files.push(`${path}/${node.name}`);
  //     } else if (node.type === "folder" && node.children) {
  //       for (const child of node.children) {
  //         if (
  //           child.type === "file" &&
  //           child.name !== "index.ts" &&
  //           child.name.endsWith(".ts")
  //         ) {
  //           files.push(`${path}/${child.name}`);
  //           console.log("selected", selectedPath);
  //           getContentFileByPath([...path.split("/").splice(2), child.name]);
  //         }

  //         if (child.type === "folder") {
  //           traverse(child, `${path}/${node.name}`);
  //         }
  //       }
  //     }
  //   }

  //   traverse(tree, "");
  //   return files.map((file) => file.slice(1)); // Remove leading slash
  // };

  useEffect(() => {
    // const files = findAllFiles(root);

    if (initialized) {
      return;
    }

    loader.init().then(async (monaco) => {
      // const types = await fetch("http://localhost:3000").then((res) =>
      //   res.text()
      // );
      const types = await fetch("module.d.ts").then((res) => res.text());
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        types,
        "ts:gdxts.d.ts"
      );

      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
      });
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        allowNonTsExtensions: true,
      });
      monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

      loader.config({ monaco });

      setInitialized(true);
    });
  }, [currentFile, initialized]);

  useEffect(() => {
    if (currentFile && currentFile.content) {
      setValue(currentFile.content);
    } else {
      setValue("");
    }
  }, [currentFile]);

  return (
    <Editor
      height="100%"
      language="typescript"
      theme="vs-dark"
      className=""
      value={value}
      onChange={(value) => setValue(value || "")}
    />
  );
};

export default CodeEditor;
