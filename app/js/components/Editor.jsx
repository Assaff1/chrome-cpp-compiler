import AceEditor from 'react-ace';

/*class Editor extends React.Component
{

  render(){
    return (

    );
  }
}*/

ReactDOM.render(
    <AceEditor
      mode="java"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{$blockScrolling: true}}
    />,
    document.getElementById('example')
);
