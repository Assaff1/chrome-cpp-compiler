import React from 'react';
import ReactDOM from 'react-dom';

class ComplieButton extends React.Component
{
  handleClick(e){
    console.log(1);
  }

  render(){
    return (
      <button className="myButton" onClick={this.handleClick}>
        Complie
      </button>
    );
  }
}

ReactDOM.render(
  <ComplieButton />,
  document.getElementById('complie-btn')
);

export default ComplieButton;
