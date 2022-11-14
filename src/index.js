import React from 'react'
import  ReactDOM  from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'

const DATA =[
    {id: '0', name: "Luz negra",author:"gran libro", completed: true},
    {id: '1', name: "metamorfosis",author:"no le entendi", completed: false},
    
]

ReactDOM.render(<App tasks={DATA}/>, document.getElementById('root'))