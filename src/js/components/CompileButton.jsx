import React from 'react';
import Editor from './Editor.jsx';
import $ from 'jquery'


class CompileButton extends React.Component
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
        Compile
      </button>
    );
  }
}

export default CompileButton;
