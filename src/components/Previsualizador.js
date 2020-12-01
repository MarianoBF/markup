import React from "react";
import marked from "marked";


class Previsualizador extends React.Component {

  render () {
    let texto = {__html: marked(this.props.codigo2) }
    return (
      <div id="preview">
                  <div dangerouslySetInnerHTML={texto}>
      </div>
      </div>
    );
  }
}

  export default Previsualizador;
  
  