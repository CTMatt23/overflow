import React from "react";
import Button from "@mui/material/Button";
import "./Header.scss";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { red } from "@mui/material/colors";
const Header = () => {
  return (
    <header>
      <div>
        Stuffed
        <Paper
          sx={{
            borderColor: red,
            boxShadow: 1,
            borderRadius: 2,
            minWidth: 300,
            width: "50%",
          }}
        >
          <InputBase
            fullWidth
            sx={{ ml: 1, flex: 1 }}
            placeholder="Turkey Club, McDouble, Chili dog..."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div className="button-list">
          <Button variant="contained">Login</Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
