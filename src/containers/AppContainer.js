import React, { Component, PropTypes } from 'react'
import { browserHistory, Router, RouterContext } from 'react-router'
import { Provider } from 'react-redux'

export default class AppContainer extends Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    }
    shouldComponentUpdate() {
        return false
    }
    render() {
        const { routes, store } = this.props
        return (
        	<Provider store={store}>
                <Router history={browserHistory} children={routes} render={props => <RouterContext {...props} />}/>
	        </Provider>
        )
    }
}