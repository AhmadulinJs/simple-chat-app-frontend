import React from "react";
import { Box } from "@material-ui/core";
import ChatAppComonents from "./components/ChatApp/ChatAppComonents";
import SignUpComponent from './components/SignUpComponent/SignUpComponent'
import SignIpComponent from './components/SignInComponent/SignIpComponent'

function App() {
  return (
    <Box style={{ overflow: "hidden" }}>
      {/* <ChatAppComonents /> */}
      <SignUpComponent />
      {/* <SignIpComponent /> */}
    </Box>
  );
}

export default App;
