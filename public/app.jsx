var GreeterMessage = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Message: Default Message</h1>
      </div>
    )
  }
})



var GreeterForm = React.createClass({
  handleNewName: function(name){
    this.setState({
      name: name
    })
  },
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.nameinput.value;
    this.handleNewName(name);
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="nameinput"></input>
          <button>SUbmit</button>

        </form>
      </div>
    )
  }
})




var Greeter = React.createClass({

  getInitialState: function(){
    return ({
      name: this.props.name,
      message: this.props.message
    })
  },
  getDefaultProps: function(){
    return ({
      name: "Default Name for getDefaultProps",
      message: "Default message for getDefaultProps"
    })
  },
  onButton1Click : function(e){
  e.preventDefault();
  var name = this.refs.name.value;
  console.log(name);
  if(this.refs.name.value.length>0 && typeof this.refs.name.value === 'string')
  this.setState({
    name: name,
  })
  this.refs.name.value = '';

  },
  render: function(){
    var name = this.state.name;
    var message= this.state.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <h1>Message: {message}</h1>
        <GreeterMessage/>
        <GreeterForm onNewName = {this.handleNewName}/>
        <form onSubmit={this.onButton1Click}>
          <input type="text" ref="name"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
})

var name = 'Fahid-Hard corded Names'
var message = 'hardcoded message'
ReactDOM.render(
  <Greeter></Greeter>,
    document.getElementById('app2')
)
