import { useState } from "react";
import axios from "axios";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SortComponent(){

 const [input,setInput] = useState("")
 const [result,setResult] = useState([])

const handleSort = async () => {

  try {
    const arr = input.split(",").map(Number)
    const res = await axios.post(
      "http://localhost:5000/sort",
      { array: arr }
    )
    setResult(res.data.sorted)
  } catch(error) {
    console.error(error)
  }
}

const code=`
def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n-i-1):

            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

    return arr
  `

  const clear = () => {
  setInput("")
  setResult([])
}

 return(
   <div className="algorithm-container">
    <div className="code-section">
        <h3>Bubble Sort Algorithm</h3>

        <SyntaxHighlighter
        language="python"
        style={vscDarkPlus}
        >
          {code}
        </SyntaxHighlighter>
    </div>

    <div className="execution-section">
        <h2>Bubble Sort</h2>

     <input
       value={input}
       onChange={(e)=>setInput(e.target.value)}
       placeholder="5,3,8,1"
     />

     <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <button onClick={handleSort}>Sort</button>
      <button onClick={clear}>Clear</button>
    </div>

     <p className="result">{result.join(", ")}</p>
    </div>
   </div>
 )
}