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
    fontWeight: "normal",
    fontStyle: "null",
    textDecorationLine: "null"
  };

  setColor = color => {
    this.setState({ color: color });
  };

  setStyle = style => {
    if (style === "bold") {
      if (this.state.fontWeight === "normal") {
        this.setState({ fontWeight: "bold" });
      } else {
        this.setState({ fontWeight: "normal" });
      }
    } else if (style === "italic") {
      if (this.state.fontStyle === "normal") {
        this.setState({ fontStyle: "italic" });
      } else {
        this.setState({ fontStyle: "normal" });
      }
    } else if (style === "underline") {
      if (this.state.textDecorationLine === "normal") {
        this.setState({ textDecorationLine: "underline" });
      } else {
        this.setState({ textDecorationLine: "normal" });
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
