import Editor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { useEffect, useRef, useState } from "react";
import { useFolderContext } from "./context/FolderContext";

type Props = {
  height?: string;
  language?: string;
  theme?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const { currentFile } = useFolderContext();

  const [initialized, setInitialized] = useState(false);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (initialized) {
      return;
    }
    loader.config({ monaco });
    loader.init().then((monaco) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `type Props = {
            height?: string;
            language?: string;
            theme?: string;
            className?: string;
            value?: string;
            onChange?: (value: string) => void;
          };`
      );
      monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
      });
      setInitialized(true);
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
