import React from 'react';
import ReactDOM from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/theme/monokai';

class Editor extends React.Component
{
  onChange(e)
  {

  }

  render()
  {
    return (
      <AceEditor
        mode="c_cpp"
        theme="monokai"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
    );
  }
}

ReactDOM.render(
  <Editor />,
  document.getElementById('editor')
);

export default Editor;
