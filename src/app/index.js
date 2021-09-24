import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/app.global.scss'
import lazySizes from 'lazysizes'
import 'lazysizes/plugins/attrchange/ls.attrchange'
lazySizes.cfg.lazyClass = 'lazy'
//import './translate'
// Store Initialization
// ------------------------------------

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')
const __DEV__ = process.env.NODE_ENV === 'development'
let render = () => {
  const Root = require('./containers/Root').default

  ReactDOM.render(<Root />, MOUNT_NODE)
}

if (__DEV__) {
  if (module.hot) {
    const renderApp = render

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept(['./containers/Root'], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

render()
