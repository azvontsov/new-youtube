import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constans.js";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="logo"
        height={35}
        sx={{ p: "10px", color: "#9a88f0" }}
      />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
