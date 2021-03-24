import React from "react";
import marked from "marked";
import DOMPurify from "dompurify";

class Previsualizador extends React.Component {
  render() {
    let pre_texto = marked(this.props.codigo2, { breaks: true });
    let texto = { __html: DOMPurify.sanitize(pre_texto) };
    return (
      <div id="container-preview">
        <p className="titulo">Previsualizador</p>

        <div id="preview" dangerouslySetInnerHTML={texto}></div>
      </div>
    );
  }
}

export default Previsualizador;
