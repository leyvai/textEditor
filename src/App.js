import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    fontWeight: false,
    fontStyle: false,
    textDecorationLine: false
  };

  setColor = color => {
    this.setState({ color: color });
  };

  setStyle = style => {
    if (style === "bold") {
      if (this.state.fontWeight === false) {
        this.setState({ fontWeight: "bold" });
      } else {
        this.setState({ fontWeight: false });
      }
    } else if (style === "italic") {
      if (this.state.fontStyle === false) {
        this.setState({ fontStyle: "italic" });
      } else {
        this.setState({ fontStyle: false });
      }
    } else if (style === "underline") {
      if (this.state.textDecorationLine === false) {
        this.setState({ textDecorationLine: "underline" });
      } else {
        this.setState({ textDecorationLine: false });
      }
    }
  };
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.setStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.setColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.fontWeight,
            fontStyle: this.state.fontStyle,
            textDecorationLine: this.state.textDecorationLine
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
