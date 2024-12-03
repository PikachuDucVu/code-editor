import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [initialized, setInitialized] = useState(false);

  const [value, setValue] = useState("// some comment");
  const [onOpenFile, setOnOpenFile] = useState<string | null>(null);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

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
