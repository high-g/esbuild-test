import React from 'react'
import Server from 'react-dom/server'

const Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
