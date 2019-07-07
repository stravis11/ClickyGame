import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import cities from "./characters.json";

// Render the page
render();
return (
  <div className="App">
    <Navbar
      title={"Clicky Game"}
      msg={this.state.gameMsg}
      score={this.state.currentScore}
      topScore={this.state.topScore}
    />
    <Header
      title={"Stranger Things Character"}
      instructions={
        "Test your memory. See how many times you can select a character only once!"
      }
    />

    <Wrapper>
      {characters.map(characters => (
        <ImageCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          selectImage={this.selectImage}
        />
      ))}
    </Wrapper>
    <Footer title={"Stranger Things Clicky Game"} />
  </div>
);

export default App;
