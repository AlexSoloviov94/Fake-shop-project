import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import ReactDOM from 'react-dom/client'

interface ITitleProps {
    text: string
}

const Title = (props: ITitleProps) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

type ContentProps = {
    text1: string
    text2: string
    year: number
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year {props.year}</div>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content text1="Go Go" text2="hello world 2" year={2023} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
