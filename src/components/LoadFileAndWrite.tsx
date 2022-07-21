import { Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

export const LoadFileAndWrite = () => {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const fileHandleRef = useRef<FileSystemFileHandle | null>(null);
  return (
    <>
      <Typography variant="h4" component={"h2"} gutterBottom>
        Load text file
      </Typography>
      <div>
        <Button
          variant="text"
          onClick={async () => {
            const [fileHandle] = await showOpenFilePicker({});
            fileHandleRef.current = fileHandle;
            const file = await fileHandle.getFile();
            const newText = await file.text();
            setFileName(file.name);
            setText(newText);
          }}
        >
          Load text file
        </Button>
      </div>
      <div>
        <TextField
          disabled={!fileHandleRef.current}
          label={fileName}
          multiline
          onChange={async (e) => {
            const newText = e.target.value;
            setText(newText);
            if (fileHandleRef.current) {
              const writable = await fileHandleRef.current.createWritable();
              await writable.write(newText);
              await writable.close();
            }
          }}
          value={text}
          rows={4}
          placeholder="Please load text file."
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};
