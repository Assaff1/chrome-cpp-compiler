import React from 'react';
import ReactDOM from 'react-dom';

import ComplieButton from './components/ComplieButton.jsx';
import Editor from './components/Editor.jsx';

const COMPLIER_SITE = 'https://paiza.io/api/projects.json';
var data = {
  project: {
    language: 'cpp',
    source_files: []
  },
  run: true,
  save: true
};

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      editor: {
        value: `#include <iostream>\n\nusing namespace std;\n\nint main (void)\n{\n  \n  return 0;\n}`,
        annotations: []
      }
    };

    this.onChangeEditor = this.onChangeEditor.bind(this);
    this.onClickComplieButton = this.onClickComplieButton.bind(this);
  }

  onChangeEditor(v, e)
  {
    this.setState({
      editor: {
        value: v,
      }
    });
  }

  onClickComplieButton(e)
  {
    data.project.source_files.push({
      filename: 'Main.cpp',
      body: this.state.editor.value
    });

    $.ajax({
      url: COMPLIER_SITE,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      data: JSON.stringify(data),
      success: function(rs) {
        // console.log(this.state.editor.value);
        if (rs.build_exit_code !== 0)
        {
          this.setState({
            editor: {

            }
          });
        }
      }.bind(this),
      complete: function(rs) {

      }
    });

  }

  render()
  {
    return (
      <div>
        <Editor
          value={this.state.editor.value}
          onChange={this.onChangeEditor}
          annotations={this.state.editor.annotations}
        />
        <ComplieButton
          editorValue={this.state.editor.value}
          onClick={this.onClickComplieButton}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

