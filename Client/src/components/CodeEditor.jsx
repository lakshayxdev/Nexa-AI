import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode, language }) {
  return (
    <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-black/40 mb-6">

      <div className="bg-[#111827] px-5 py-3 border-b border-gray-800 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />

        <span className="ml-4 text-sm text-gray-400 uppercase">
          {language}
        </span>
      </div>


      <Editor
        height="500px"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        options={{
          minimap: { enabled: false },
          fontSize: 15,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />

    </div>
  );
}

export default CodeEditor;