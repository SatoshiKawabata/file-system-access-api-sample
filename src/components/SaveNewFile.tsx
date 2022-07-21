import { Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

export const SaveNewFile = () => {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const fileHandleRef = useRef<FileSystemFileHandle | null>(null);
  return (
    <>
      <Typography variant="h4" component={"h2"} gutterBottom>
        Save new text file
      </Typography>
      <div>
        <Button
          variant="text"
          onClick={async () => {
            const dirHandle = await showDirectoryPicker();
            const fileName =
              prompt("Please input new text file name.") || "text";
            fileHandleRef.current = await dirHandle.getFileHandle(fileName, {
              create: true,
            });
            setFileName(fileName);
            const writable = await fileHandleRef.current.createWritable();
            await writable.write(text);
            await writable.close();
          }}
          disabled={!text}
        >
          Save new text file
        </Button>
      </div>
      <div>
        <TextField
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
          placeholder="Add some text and save."
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};
