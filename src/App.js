import './App.css';
import Editor from './components/Editor';
import Previsualizador from './components/Previsualizador';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { codigo: `

valid markdown that represents at least one of each of the following elements: 
#a header (H1 size), 
##a sub header (H2 size), 
a link[Google](www.google.com), 
inline \`code\`, 
    a code block, 
    a code block,
    a code block,
-a 
-list 
-item, 
>a blockquote, 
>a blockquote, 
>a blockquote, 
an image, 
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
**and bolded text**.

    
    ` };
}

onHandleChange(event) {
  this.setState({
      codigo: event.target.value
  });
}    

  render () {
  return (
  <>
  <Editor codigo = {this.state.codigo} onHandleChange={this.onHandleChange.bind(this)}/>
  <Previsualizador codigo2 = {this.state.codigo}/>
  </>
  );
}
}

export default App;
