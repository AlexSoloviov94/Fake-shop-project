import React from 'react'
import ReactDOM from 'react-dom/client'

// jsx
const h1 = (
    <h1 id="title" className="fna">
        Hello React.js
    </h1>
)
console.log(h1)

let a = 10
let b = 'Hello test'

const list = (
    <ul>
        <li>List Item {a + 10 + 10}</li>
        <li>List Item {b}</li>
        <li>List Item 3</li>
    </ul>
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
