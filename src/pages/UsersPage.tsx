import React from "react";
import Users from "../Components/Users/Users";
import { Box } from "@mui/material";
import Filter from "../Components/common/Filter/Filter";
import Pagination from "../Components/common/Pagination/Pagination";

const UsersPage = () => {
  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Filter />
      </Box>
      <Users />
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination />
      </Box>
    </div>
  );
};

export default UsersPage;
