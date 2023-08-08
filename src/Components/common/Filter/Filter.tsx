import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect, useContext } from "react";
import { usersContext } from "../../contexts/UsersContext/UsersContext";
import { usersContextType } from "../../contexts/UsersContext/types";

export default function Filter() {
  const [gender, setGender] = useState<string>("all");
  const { getFilteredUsers } = useContext(usersContext) as usersContextType;

  useEffect(() => {
    getFilteredUsers({ gender });
  }, [gender]);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={() => setGender("woman")}
          value="female"
          control={<Radio />}
          label="Female"
        />
        <FormControlLabel
          onChange={() => setGender("man")}
          value="male"
          control={<Radio />}
          label="Male"
        />
        <FormControlLabel
          onChange={() => setGender("all")}
          value="all"
          control={<Radio />}
          label="All"
        />
      </RadioGroup>
    </FormControl>
  );
}

//
// import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// import { usersContextType } from "../../contexts/UsersContext/types";
// import { usersContext } from "../../contexts/UsersContext/UsersContext";

// const Filter = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [gender, setGender] = useState(searchParams.get("gender") || "all");

//   const { setPage } = useContext(usersContext) as usersContextType;

//   const [firstMount, setFirstMount] = useState(true);

//   useEffect(() => {
//     if (firstMount) {
//       setFirstMount(false);
//       return;
//     }
//     const currentParams = Object.fromEntries([...searchParams]);

//     if (gender === "all") {
//       delete currentParams.gender;
//       setSearchParams({
//         ...currentParams,
//       });
//     } else {
//       setSearchParams({
//         ...currentParams,
//         gender,
//       });
//     }
//     setPage(1);
//   }, [gender]);

//   return (
//     <ToggleButtonGroup
//       color="primary"
//       value={gender}
//       exclusive
//       onChange={(_, value) => value && setGender(value)}
//       aria-label="Platform"
//     >
//       <ToggleButton value="all">All</ToggleButton>
//       <ToggleButton value="pants">Gender</ToggleButton>
//     </ToggleButtonGroup>
//   );
// };

// export default Filter;
