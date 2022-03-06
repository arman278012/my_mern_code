import { useState } from "react"

const Eventandling = () => {
let c=1
const [count, setCount] = useState(5);


    const doTask = () => {
        c++
        console.log("buttom was clicked!!")
        console.log("another line was operated")    
        // console.log(c)   
    }
    const updateState = () => {
        // console.log(count)
        setCount(count+1)
    }


    const handleChange = () => {
        console.log("input box was change")
        
    }
    return (
        <div>
            <h1>Event handling</h1>
            <button onClick={doTask} className="btn-btn-outline-primary">click me</button>
            <h1 className="dislay-4">{c}</h1>
            <h1 className="display-1">{count}</h1>

            <button className="btn btn-primary" onClick={updateState}>changestate</button>

            <input className="form-control mt-5" onChange={handleChange}/>
            
        </div>
    )   
}
export default Eventandling;