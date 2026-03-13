import { useState } from "react"
import axios from "axios"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function LinearSearchComponent(){
    const[array,setArray]=useState("")
    const[target,setTarget]=useState("")
    const[index,setIndex]=useState(null)

    const search=async()=>{
        const arr = array.split(",").map(Number)
        const res = await axios.post("http://localhost:5000/search/linear",{
            array:arr,
            target:Number(target)
        })
        setIndex(res.data.index)
    }

    const code =`
    def linear_search(arr, target):

    for i in range(len(arr)):

        if arr[i] == target:
            return i

    return -1
    `

    const clear = () => {
        setArray("")
        setTarget("")
        setIndex(null)
    }

    return(
        <div className="algorithm-container">
            <div className="code-section">
                <h3>Linear Search Algorithm</h3>
                <SyntaxHighlighter language="python" style={vscDarkPlus}>
                    {code}
                </SyntaxHighlighter>
            </div>

            <div className="execution-section">
                <h2>Linear Search</h2>
            <input placeholder="Array"
            value={array}
            onChange={(e)=>setArray(e.target.value)} />
            <input placeholder="Target"
            value={target}
            onChange={(e)=>setTarget(e.target.value)} />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={search}>Search</button>
                <button onClick={clear}>Clear</button>
            </div>
            <p className="result">Index:{index}</p>
            </div>
            
        </div>
    )
}