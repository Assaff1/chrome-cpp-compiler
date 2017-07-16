import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/theme/monokai';

class Editor extends React.Component
{
  constructor(props)
  {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(v, e)
  {
    this.props.onChange(v, e);
  }

  render()
  {
    return (
      <AceEditor
        mode="c_cpp"
        theme="monokai"
        height="300px"
        name="code"
        onChange={this.onChange}
        value={this.props.value}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{$blockScrolling: true}}
        annotations={this.props.annotations}
      />
    );
  }
}

export default Editor;
