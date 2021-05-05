import React from 'react';
let marked = require("marked");

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      markdown:"",
    };
  }

  updateMarkdown(markdown){
    this.setState({markdown});
  }

  render(){
    var inputStyle = {
      width: "100%",
      height: "100%",
    };
    var textBoxStyle = {
      width: "100%",
      height: "100vh",
      padding:"30px",
      resize:"none",
      borderRadius: "3px",
      border: "transparent",
      outline: "none",
      backgroundColor: "rgba(0,0,0,0.1)",
    };
    var outputStyle = {
      width: "100%",
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"30px"
    };

    return(
      <div className = "App">
        <div className = "container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="mark-input" style={inputStyle}>
                <textarea className="input" style={textBoxStyle}
                  value={this.state.markdown} onChange={(e)=>{this.updateMarkdown(e.target.value)}}
                  placeholder="mark it down here and see it there -->" wrap="off"> 
                </textarea>
              </div>
            </div>

            <div className="col-md-6">
              <div style={outputStyle}
                    dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}>
              </div>
            </div>
          </div>
        </div>
    </div>
    );}
}