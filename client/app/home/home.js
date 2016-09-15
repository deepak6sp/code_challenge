import './home.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Subscribe from '../subscribe/subscribe';


class Home extends Component {
	constructor(props){
		super(props);
	}

    render() {
        return ( 
        	<main>
        		<div>
	        		<h1>A better way <br/>to enjoy every day.</h1>
	        		<p> Be the first to know when we launch </p>
	        		<Subscribe />
	        	</div>
        	</main>
        );
    }
}

export default Home