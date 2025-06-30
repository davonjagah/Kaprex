import React, { useState, useRef, useCallback } from "react";
import { Editor, type Editor as TinyMCEEditor } from "@tinymce/tinymce-react";

export const EditorSection: React.FC = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const uploadHandler = useCallback(
    async (
      blobInfo: {
        blob: () => Blob;
        filename: () => string;
      },
      success: (url: string) => void,
      failure: (msg: string) => void,
    ) => {
      const formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());

      let res: Response;
      try {
        res = await fetch("/api/upload", { method: "POST", body: formData });
      } catch (err) {
        console.error("Network error during upload", err);
        return failure("Network error");
      }

      if (!res.ok) {
        const text = await res.text();
        console.error("Upload failed:", res.status, text);
        return failure(`Upload failed: ${res.status}`);
      }

      const data = await res.json();
      if (data.url) {
        success(data.url);
      } else {
        console.error("No URL returned", data);
        failure("No URL returned");
      }
    },
    [],
  );

  const filePicker = useCallback(
    (
      callback: (
        url: string,
        meta?: { filetype?: string; text?: string },
      ) => void,
      _value: string,
      meta: { filetype?: string; text?: string },
    ) => {
      if (meta.filetype !== "file") return;

      const input = document.createElement("input");
      input.type = "file";
      // optionally restrict by filetype:
      // input.accept = meta.filetype === "image" ? "image/*" : "*/*";
      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          if (data.url) {
            callback(data.url, { text: file.name });
          } else {
            console.error("File picker: no URL", data);
          }
        } catch (err) {
          console.error("File picker upload error", err);
        }
      };
      input.click();
    },
    [],
  );

  return (
    <Editor
      apiKey="rmok0m3iauxault4alwuscuya412fi4ekicz2gvhhqy8d7dy"
      onInit={(_evt, editor) => (editorRef.current = editor)}
      value={content}
      onEditorChange={setContent}
      init={{
        height: 300,
        menubar: false,
        plugins: ["image", "link", "media", "code"],
        toolbar:
          "undo redo | importword | blocks | bold italic underline strikethrough forecolor backcolor | align checklist bullist numlist | link image media footnotes mergetags table | subscript superscript charmap blockquote | tokens | spellchecker typography a11ycheck wordcount | addcomment showcomments | fullscreen preview",
        images_upload_handler: uploadHandler,
        file_picker_callback: filePicker,
      }}
    />
  );
};
