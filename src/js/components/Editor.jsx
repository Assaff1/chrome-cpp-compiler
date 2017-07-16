import React from 'react';
import ReactDOM from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/theme/monokai';

class Editor extends React.Component
{
  render()
  {
    return (
      <AceEditor
        mode="c_cpp"
        theme="monokai"
        // onChange={this.onChange}
        name="code"
        value={`#include <iostream>\n\nusing namespace std;\n\nint main (void)\n{\n  \n  return 0;\n}`}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
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
