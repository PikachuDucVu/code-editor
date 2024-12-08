import Editor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { useFolderContext } from "./context/FolderContext";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const { currentFile } = useFolderContext();

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // if (initialized) {
    //   return;
    // }
    loader.config({ monaco });
    loader.init().then(async (monaco) => {
      // const types = await fetch("http://localhost:3000").then((res) =>
      //   res.text()
      // );
      const types = await fetch("bundle.d.ts").then((res) => res.text());
      console.log(types);
      // monaco.languages.typescript.typescriptDefaults.addExtraLib(
      //   types,
      //   "ts:gdxts.d.ts"
      // );

      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `interface Props = {
            height?: string;
            language?: string;
            theme?: string;
            className?: string;
            value?: string;
            onChange?: (value: string) => void;
          };`
      );

      // setInitialized(true);
    });
  }, [currentFile, initialized]);

  useEffect(() => {
    if (currentFile && currentFile.content) {
      setValue(currentFile.content);
      // editorRef.current?.focus();
    } else {
      setValue("");
    }
  }, [currentFile]);

  return (
    <>
      <Editor
        height="100%"
        language="typescript"
        theme="vs-dark"
        className=""
        value={value}
        onChange={(value) => setValue(value || "")}
      />
    </>
  );
};

export default CodeEditor;
