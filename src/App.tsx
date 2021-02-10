import React from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  return (
    <div className="container">
      <Card
        age={26}
        name="Victor Crest"
        location="London"
        followers="80K"
        likes="803K"
        photos="1.4K"
      />
    </div>
  );
};

export default App;
