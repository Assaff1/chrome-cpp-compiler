import React from 'react';
import Editor from './Editor.jsx';
import $ from 'jquery'


class ComplieButton extends React.Component
{
  constructor(props)
  {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e)
  {
    this.props.onClick(e);
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
