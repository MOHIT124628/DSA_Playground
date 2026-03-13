import { useState } from "react"
import axios from "axios";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function SearchComponent(){
    const [array,setArray]=useState("")
    const[target,setTarget]=useState("")
    const [index,setIndex]=useState(null)

    const search=async()=>{
        const arr = array.split(",").map(Number)
        const res = await axios.post("http://localhost:5000/search/binary",{
            array:arr,
            target:Number(target)
        })

        setIndex(res.data.index)
    }

    const code =`
    def binary_search(arr, target):

    left = 0
    right = len(arr) - 1

    while left <= right:

        mid = (left + right) // 2

        if arr[mid] == target:
            return mid

        elif arr[mid] < target:
            left = mid + 1

        else:
            right = mid - 1

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
            <h3>Binary Search Algorithm</h3>
            <SyntaxHighlighter
            language="python"
            style={vscDarkPlus}
            >
                {code}
            </SyntaxHighlighter>
        </div>

        <div className="execution-section">
            <h2>Binary Search</h2>
        <input
            placeholder="Array"
            value={array}
            onChange={(e)=>setArray(e.target.value)}
        />
        <input
            placeholder="Target"
            value={target}
            onChange={(e)=>setTarget(e.target.value)}
        />
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button onClick={search}>Search</button>
            <button onClick={clear}>Clear</button>
        </div>
        <p className="result">Index: {index}</p>
        </div>
    
    </div>
    )
}