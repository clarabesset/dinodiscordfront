// import React, { Component } from "react";

// export default class Cell extends Component {
//   state = {
//     // color: null,
//     // cellNumber: null,
//     // x: this.props.cell.i,
//     // y: this.props.cell.j,
//     // taken: false
//     // takenByPlayer: null,
//     cssClasses: ""
//   };

//   initCSSClasses() {
//     var css = "";
//     css += this.state.cell.meteorite ? "cell meteorite" : "cell";
//     css += this.props.player  ? ` player-${this.props.player.color}` : '';
//     this.setState({cssClasses: css})
//   }

//   componentDidMount() {
    
//     this.setState({ cell: this.props.cell }, () => {
//       if (!this.state.cssClasses) this.initCSSClasses();
//     });
//   }

// static getDerive

//   render() {
//     console.log("rendered again -------",this.props.cell)
//     return !this.state.cell ? (
//       null
//     ) : (
//       <div className={this.state.cssClasses} />
//     );
//   }
// }
import React from 'react'

const Cell =  React.memo(({player,cell}) => {
  console.log("rendered")
  var css = "";
    css += cell.meteorite ? "cell meteorite" : "cell ";
    css += player  ? ` player-${player.color}` : '';
    css += cell.color && !player ? `${cell.color}` : '';
    return !cell ? (
      null
    ) : (
      <div className={css} />
  )
})

export default Cell
