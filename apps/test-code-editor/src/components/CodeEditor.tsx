import Editor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";
import { useCallback, useEffect, useState } from "react";
import { useFolderContext } from "./context/FolderContext";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const { currentFile, root } = useFolderContext();

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    console.log(root);
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
