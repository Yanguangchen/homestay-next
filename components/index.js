import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      {/* <DarkMode /> */}
      <NavBar />
      <h1 style={{textAlign:"center"}}>Socials</h1>
    </div>
  </>
);
