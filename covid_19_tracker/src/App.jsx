import React from "react";
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core"

import "./App.css";

const App = (props) => {
  return (
    <div className="app">
      <h1>Covid-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">op 1</MenuItem>
          <MenuItem value="worldwide">op 2 </MenuItem>
          <MenuItem value="worldwide">op 3</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
};

export default App;
