import axios from "axios"
import { useState } from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function QuickSortComponent(){
    const [input,setInput]=useState("")
    const [result,setResult]=useState([])

    const handleSort=async()=>{
        const arr=input.split(",").map(Number)
        const res =await axios.post("http://localhost:5000/sort/quick",{
            array:arr
        })
        setResult(res.data.sorted)
    }
    const code =`
    def quick_sort(arr):

    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr)//2]

    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)
    `

    const clear = () => {
        setInput("")
        setResult([])
    }

    return(
        <div className="algorithm-container">
            <div className="code-section">
                <h3>Quick Sort Algorithm</h3>
                  <SyntaxHighlighter language="python" style={vscDarkPlus}>
                    {code}
                  </SyntaxHighlighter>
            </div>

            <div className="execution-section">
                <h2>Quick Sort</h2>
            <input value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="5,3,8,2,1" />
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={handleSort}>Sort</button>
                <button onClick={clear}>Clear</button>
            </div>
            <p className="result">{result.join(", ")}</p>
            </div>
            
        </div>
    )
}