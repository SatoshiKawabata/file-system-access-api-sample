import { Typography } from "@mui/material";
import { LoadFileAndWrite } from "./LoadFileAndWrite";
import { SaveNewFile } from "./SaveNewFile";

export const App = () => {
  return (
    <>
      <Typography variant="h3" component={"h1"} gutterBottom>
        Text Editor Sample
      </Typography>
      <SaveNewFile />
      <hr />
      <LoadFileAndWrite />
    </>
  );
};
