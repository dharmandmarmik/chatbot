import React from "react";
import Chatbot from "react-chatbot-kit";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./app.css";

function App() {
  return (
    <>
      <div className="app">
        <div className=" d-flex justify-content-center
        ">
        <div className="App  bg-light text-muted rounded shadow text-monospace text-capitalize font-weight-bold font-italic font-family font-weight-bolder 
        
        ">
          <Chatbot
            config={Config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
