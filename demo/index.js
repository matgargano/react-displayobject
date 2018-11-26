import React from 'react';
import ReactDOM from 'react-dom';
import DisplayObject from '../dist/index';

class App extends React.Component { 
	render() {
		return <DisplayObject data={{foo: 'bar'}}/>;
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
