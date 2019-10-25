import React from 'react';
import FormComponent from './components/FormComponent';
import ResultContainer from './components/ResultContainer';
import './App.css';
import * as calcService from './services/calcService';

class App extends React.Component {
	state = {
		showResult: false,
		result: {}
	};

	onFormDataApply = measurments => {
		let result = {
			roomArea: calcService.calcRoomArea(measurments)
		};
		this.setState({ showResult: true, result });
	};

	render() {
		let { result, showResult } = this.state;
		return (
			<div className="App">
				<FormComponent onSubmit={this.onFormDataApply} />
				{showResult && <ResultContainer {...result} />}
			</div>
		);
	}
}

export default App;
