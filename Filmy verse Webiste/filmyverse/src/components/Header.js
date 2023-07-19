import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <spain>
        Filmy <spain className="text-white">Verse</spain>
      </spain>
      <h1 className="text-lg cursor-pointer flex item-center">
        <Button>
          <AddIcon className="mr-1" color="secondary" />{" "}
          <spain className="text-white">Add New</spain>
        </Button>
      </h1>
    </div>
  );
};

export default Header;
