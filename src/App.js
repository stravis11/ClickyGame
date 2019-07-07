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

  selectImage = id => {
    // If image has already been selected then game ends
    if (this.state.selectedImages.includes(id)) {
      this.setState({ gameMsg: "You lose. The Mind Flayer has won!" });
      this.resetGame();
    }
    // Else increment the score
    else {
      const score = this.state.currentScore + 1;

      // Update topScore if currentScore is greater than current topScore
      if (score > this.state.topScore) {
        this.setState({ topScore: score });
      }

      // If selected all images without repeating, then user wins
      if (score === maxScore) {
        this.setState({
          gameMsg: "Congratulations, you defeated the Mind Flayer!"
        });
        this.resetGame();
      }
      // Add current image id to selectedImages array, update score, shuffle images and continue playing
      else {
        this.setState({ gameMsg: "You guessed correctly!" });
        this.setState({ selected: this.state.selectedImages.push(id) });
        this.setState({ currentScore: score });
        this.shuffleImages();
      }
    }
  };

  shuffleImages = () => {
    const shuffledImages = this.shuffleArray(characters);
    this.setState({ characters: shuffledImages });
  };

  // Shuffle array
  shuffleArray = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Resets game parameters and shuffle images
  resetGame = () => {
    this.setState({ currentScore: 0 });
    this.setState({ selectedImages: [] });
    this.shuffleImages();
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
