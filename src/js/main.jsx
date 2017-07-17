import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import CompileButton from './components/CompileButton.jsx';
import Editor from './components/Editor.jsx';
import BottomBox from './components/BottomBox.jsx';

const COMPILER_SITE = 'https://paiza.io/api/projects.json';
var data = {
  project: {
    language: 'cpp',
    source_files: [],
    input: '',
  },
  run: true,
  save: true,
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
      },
      bottomBox: {
        debug: 'Nothing to show',
        stdin: '',
      }
    };

    this.onChangeEditor = this.onChangeEditor.bind(this);
    this.onClickCompileButton = this.onClickCompileButton.bind(this);
    this.onChangeSTDIN = this.onChangeSTDIN.bind(this);
  }

  onChangeEditor(v, e)
  {
    this.setState({
      editor: {
        value: v,
      }
    });
  }

  onClickCompileButton(e)
  {
    data.project.source_files.push({
      filename: 'Main.cpp',
      body: this.state.editor.value
    });
    data.project.input = this.state.bottomBox.stdin;

    this.setState({
      bottomBox: {
        debug: 'Compiling'
      }
    });
    $('.tab-content > *').hide();
    $('.content-debug').show();
    $('.myButton').attr('disabled', 'disabled');

    $.ajax({
      url: COMPILER_SITE,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      data: JSON.stringify(data),
      success: function(rs) {
        // console.log(this.state.editor.value);
        if (rs.build_exit_code !== 0 || rs.build_stderr !== "")
        {
          var build_errors = rs.build_stderr.split('\n');
          if (build_errors.length < 3)
          {
            /*annotations.push({
              row: 1,
              column: 0,
              type: 'error',
              text: rs.build_stderr,
            });*/
          }
          else
          {
            var annotations = [];
            for (let i = 0; i < build_errors.length-1; i+=3)
            {
              var err_split = build_errors[i].split(':');
              if (typeof build_errors[i+2] == 'undefined')
              {
                break;
              }
              var text = [
                build_errors[i],
                build_errors[i+1],
                build_errors[i+2]
              ];
              /*annotations.push({
                row: parseInt(err_split[1]),
                column: parseInt(err_split[2]),
                type: 'error',
                text: text.join('\n'),
              });*/
              this.setState({
                editor: {
                  value: this.state.editor.value,
                  annotations: [
                    {
                      row: parseInt(err_split[1]),
                      column: parseInt(err_split[2]),
                      type: 'error',
                      text: text.join('\n'),
                    }
                  ]
                }
              });
            }
          }
          this.setState({
            bottomBox: {
              debug: rs.build_stderr,
            }
          });
        }
        else
        {
          this.setState({
            bottomBox: {
              debug: [/*rs.stderr, */rs.stdout].join('\n')
            }
          });
        }
      }.bind(this),
      complete: function(rs) {
        $('.myButton').removeAttr('disabled');
      }
    });

  }

  onChangeSTDIN(e)
  {
    this.setState({
      bottomBox: {
        stdin: e.target.value
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
        <BottomBox
          debug={this.state.bottomBox.debug}
          stdin={this.state.bottomBox.stdin}
          onChangeSTDIN={this.onChangeSTDIN}
        />
        <CompileButton
          editorValue={this.state.editor.value}
          onClick={this.onClickCompileButton}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

