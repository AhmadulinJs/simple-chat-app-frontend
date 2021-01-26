import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import ChatAppComonents from "./components/ChatApp/ChatAppComonents";

function App() {
  return (
    <Box style={{ overflow: "hidden" }}>
      <ChatAppComonents />
    </Box>
  );
}

export default App;
