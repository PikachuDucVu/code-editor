import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useFolderContext } from "./context/FolderContext";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const { currentFile } = useFolderContext();

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
