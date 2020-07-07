import dotenv from "dotenv";
import React from "react";

dotenv.config();

const App = () => {
  return (
    <>
      <div>
        <h1>hello {process.env.REACT_APP_TEST}</h1>
      </div>
    </>
  );
};

export default App;
