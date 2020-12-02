import React from "react";


class Editor extends React.Component {

    render () {
        return (
    <div id="editor">
    <p className="titulo">Editor</p>
    <textarea id="editor" defaultValue={this.props.codigo} onChange={this.props.onHandleChange}></textarea>
    </div>
  );
}
}

export default Editor;

