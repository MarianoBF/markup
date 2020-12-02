import React from "react";
import marked from "marked";






class Previsualizador extends React.Component {

  render () {

 
    let texto = {__html: marked(this.props.codigo2, { breaks: true }) }
    return (
      <div id="container-preview">
          <p className="titulo">Previsualizador</p>

                  <div id="preview" dangerouslySetInnerHTML={texto}>
      </div>
      </div>
    );
  }
}


  export default Previsualizador;
  
  