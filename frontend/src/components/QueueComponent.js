import { useState } from "react"
import axios from "axios"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function QueueComponent(){
    const[value,setValue]=useState("")
    const[queue,setQueue]=useState([])

    const enqueue=async()=>{
        const res = await axios.post("http://localhost:5000/queue/enqueue",{
            value:value
        })

        setQueue(res.data.queue)
    }

    const dequeue=async()=>{
        const res=await axios.get("http://localhost:5000/queue/dequeue")
        setQueue(res.data.queue)
    }

    const code=`
    class Queue:

    def __init__(self):
        self.queue = []

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):

        if len(self.queue) == 0:
            return None

        return self.queue.pop(0)

    def get_queue(self):
        return self.queue
    `

    const clear = () => {
        setValue("")
        setQueue([])
    }

    return(
        <div className="algorithm-container">
            <div className="code-section">
                <h3>Queue Implementation</h3>
                <SyntaxHighlighter language="python" style={vscDarkPlus}>
                    {code}
                </SyntaxHighlighter>
            </div>

            <div className="execution-section">
                <h2>Queue</h2>
            <input value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Enter value" />
            <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
                <button onClick={enqueue}>Enqueue</button>
                <button onClick={dequeue}>Dequeue</button>
                <button onClick={clear}>Clear</button>
            </div>
            <p className="result">{queue.join(", ")}</p>
            </div>
            
        </div>
    )
}