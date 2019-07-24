import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

const typingEffect = txt => {
  return (
    <div>
      <ReactTypingEffect speed={75} text={txt} />
    </div>
  );
};

export default class IntroText1 extends Component {
  render() {
    return <div className="textIntro">{typingEffect(this.props.text)}</div>;
  }
}
