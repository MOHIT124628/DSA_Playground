import { useState } from "react"
import axios from "axios";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function StackComponent(){
    const [value,setValue]=useState("")
    const [stack,setStack]=useState([])

    const push=async ()=>{
        const res = await axios.post("http://localhost:5000/stack/push",{
            value:value
        })
        setStack(res.data.stack)
    }

    const pop=async ()=>{
        const res=await axios.get("http://localhost:5000/stack/pop")
        setStack(res.data.stack)
    }

    const code =`
    class Stack:

    def __init__(self):
        self.stack = []

    def push(self, value):
        self.stack.append(value)

    def pop(self):

        if len(self.stack) == 0:
            return None

        return self.stack.pop()

    def get_stack(self):
        return self.stack
    `

    const clear = () => {
        setValue("")
        setStack([])
    }

    return(
    <div className="algorithm-container">
        <div className="code-section">
            <h3>Stack Implementation</h3>
            <SyntaxHighlighter
            language="python"
            style={vscDarkPlus}
            >
                {code}
            </SyntaxHighlighter>
        </div>

        <div className="execution-section">
            <h2>Stack</h2>
        <input
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Enter value"
        />
    <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
        <button onClick={push}>Push</button>
        <button onClick={pop}>Pop</button>
        <button onClick={clear}>Clear</button>
    </div>
    <p className="result">{stack.join(", ")}</p>
        </div>
        
    </div>
    )
}