/** @jsx createElement */
import { createElement } from 'inferno-create-element';
import { Component, render, version } from 'inferno';
import { Incrementer } from './components/Incrementer';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
  private _name: string;
	private _version: string;

	constructor(props, context) {
		super(props, context);

    this._name = process.env.PKG_NAME;
    this._version = process.env.PKG_VERSION;
	}

	public render() {
		return (
			<div>
        <pre>{`${this._name}@${this._version}`}</pre>
        <br/>
				<h1>{`Welcome to Inferno ${version}`}</h1>
				<Incrementer name={'Crazy button'} />
			</div>
		);
	}
}

render(<MyComponent />, container);
