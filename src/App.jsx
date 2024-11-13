import axios from "axios"
import { useState, useEffect } from "react"


const App = () => {
  const [quote, setQuote] = useState('')

  const callApi = () => {
    axios('https://api.adviceslip.com/advice')
    .then((response) => {setQuote(response.data.slip.advice)})
  }

  useEffect(() => {
    callApi()
  },[])

  
  console.log(quote)
  return (
    <div className="h-screen w-screen">
      <div className="card bg-base-100 image-full w-full sm:w-96 shadow-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48">
        <div className="card-body">
          <p>{quote}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm m-auto" onClick={(e) => callApi()}>GIVE ME ADVICE!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App