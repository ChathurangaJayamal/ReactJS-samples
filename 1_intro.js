// Write JavaScript here and press Ctrl+Enter to execute
class Button extends React.Component {

	handleOnClick = () => {
  	this.props.onClickFunction(this.props.incrementor);
  };
	  
	render() {
		return (
  		<button onClick={this.handleOnClick}>
      	Click Me
      </button>
  	);  
  }
}

const Result = (props) => {
	return (
  	<div>count is {props.counter}</div>
  );
}

class App extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {counter:0};
  }
  handleButtonClick = (incrementor) => {
  	this.setState((prevs) => ({
      	counter: prevs.counter + incrementor
    }));
  };

	render() {
  	return (
    	<div>
    	  <Button incrementor={2} onClickFunction={this.handleButtonClick}/>
        <Button incrementor={10} onClickFunction={this.handleButtonClick}/>
        <Result counter={this.state.counter}/>        
    	</div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
