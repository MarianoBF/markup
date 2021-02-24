import React from "react";


class Editor extends React.Component {

    render () {
        return (
    <>
    <div id="referencia">
    <p>¡Bienvenido!</p>
    <p>Este editor permite escribir en markdown en la ventana "editor" y que se renderice abajo en "previsualizador".</p>
    <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noopener noreferrer"><p>Referencia: cheat-sheet del código markdown</p></a>
    </div>
    <div id="container-editor">
    <p className="titulo">Editor</p>
    <textarea id="editor" defaultValue={this.props.codigo} onChange={this.props.onHandleChange}></textarea>
    </div>
    </>
  );
}
}

export default Editor;

