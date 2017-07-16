import React from 'react';
import Editor from './Editor.jsx';

class ComplieButton extends React.Component
{
  constructor(props)
  {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e)
  {
    console.log(this.props.editorValue);
  }

  render()
  {
    return (
      <button
        className="myButton"
        onClick={this.onClick}
      >
        Complie
      </button>
    );
  }
}

export default ComplieButton;
