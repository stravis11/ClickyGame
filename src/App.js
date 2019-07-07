import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import characters from "./characters.json";

// Set max score
const maxScore = characters.length;

class App extends Component {
  // Set this.state.characters to the characters json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    selectedImages: [],
    gameMsg: "Click a character to begin!"
  };

  // Render the page
  render() {
    return (
      <div className="App">
        <Navbar
          title={"Clicky Game"}
          msg={this.state.gameMsg}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Header
        // title={"Stranger Things Characters"}
        // instructions={
        //   "Test your memory. See how many times you can select a character only once!"
        // }
        />

        <Wrapper>
          {characters.map(character => (
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
  }
}

export default App;
