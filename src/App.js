import "./App.css";
import Editor from "./components/Editor";
import Previsualizador from "./components/Previsualizador";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: `
Algunos ejemplos:
# Un título (H1)
## Un subtítulo (H2)
Un [enlace](http://www.google.com)    
Un poco de \`<p>codigo codigo codigo</p>\` Inline     

        Un bloque de código 
        Un bloque de código 
        Un bloque de código 

- Unos
- items 
- en lista

> Una blockquote 
> blockquote 
> blockquote

Una imagen:  ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)    

**O texto en negrita**.
    
    `,
    };
  }

  onHandleChange(event) {
    this.setState({
      codigo: event.target.value,
    });
  }

  render() {
    return (
      <>
        <Editor
          codigo={this.state.codigo}
          onHandleChange={this.onHandleChange.bind(this)}
        />
        <hr />
        <Previsualizador codigo2={this.state.codigo} />
      </>
    );
  }
}

export default App;
