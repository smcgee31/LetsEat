// ******************************************* //
// *** YOU MUST CHANGE THESE LINES OF CODE *** //
// ******************************************* //


import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';

const
	  ReactRouter = require('react-router')
	, Router      = ReactRouter.Router
	, Route       = ReactRouter.Route
	, IndexRoute  = ReactRouter.IndexRoute
	, hashHistory = ReactRouter.hashHistory;

// ***************************************************** //
// *** DID YOU CHANGE THE CODE TO BE FOR THIS APP ?? *** //
// ***************************************************** //

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='prompt' component={PromptContainer} />
		</Route>
	</Router>
);

module.exports = routes;