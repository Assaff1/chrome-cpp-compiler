import React from 'react';
import ReactDOM from 'react-dom';

import ComplieButton from './components/ComplieButton.jsx';
import Editor from './components/Editor.jsx';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      editorValue: `#include <iostream>\n\nusing namespace std;\n\nint main (void)\n{\n  \n  return 0;\n}`,
    };

    this.onChangeEditor = this.onChangeEditor.bind(this);
  }

  onChangeEditor(v, e)
  {
    this.setState({
      editorValue: v,
    });
  }

  render()
  {
    return (
      <div>
        <Editor
          value={this.state.editorValue}
          onChange={this.onChangeEditor}
        />
        <ComplieButton
          editorValue={this.state.editorValue}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

