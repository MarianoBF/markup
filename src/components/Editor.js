import React from "react";


class Editor extends React.Component {

    render () {
        return (
    <div id="container-editor">
    <label htmlFor="editor">Editor</label>
    <textarea id="editor" rows="10" cols="80" defaultValue={this.props.codigo} onChange={this.props.onHandleChange}></textarea>
    </div>
  );
}
}

export default Editor;

