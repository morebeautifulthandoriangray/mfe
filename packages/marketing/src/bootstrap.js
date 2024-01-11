import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// mount fun to start up the app
// el - html element 

const mount = (el) => {
    ReactDOM.render(<App />, el);

};

// if we're running in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    // if it is, they're going to find some element inside of our html file
    // that we're going to expect to only be present inside of our marketing html file
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// we're running through container
// and we should export the mount function

export { mount };