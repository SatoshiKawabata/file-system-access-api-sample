import { Typography } from "@mui/material";
import { LoadFileAndWrite } from "./LoadFileAndWrite";
import { SaveNewFile } from "./SaveNewFile";
import GitHubIcon from "@mui/icons-material/GitHub";

export const App = () => {
  return (
    <>
      <Typography variant="h3" component={"h1"} gutterBottom>
        Text Editor Sample{" "}
        <a
          href="https://github.com/SatoshiKawabata/file-system-access-api-sample"
          target="_blank"
          title="source code"
        >
          <GitHubIcon />
        </a>
      </Typography>
      <SaveNewFile />
      <hr />
      <LoadFileAndWrite />
    </>
  );
};
