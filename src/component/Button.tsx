import "./Button.css"
import * as React from "react";
import {useState} from "react";

export default function Button () {
    const [result, setResult] = useState("")

    const handleClick = () => {
        setResult("Hello World")
    }

    return (
        <>
            <button onClick={handleClick} className={"button-component"} id="button">Click me</button>
            <div>{result}</div>
        </>
    )
}