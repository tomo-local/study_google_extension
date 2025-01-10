import { useState, useReducer } from "react"

import "./globals.css"

function IndexPopup() {
  const [data, setData] = useState("")
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h2>
        Welcome to your{" "}
        <a
          href="https://www.plasmo.com"
          target="_blank"
          className="text-blue-500">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
      <br />
      <button
        onClick={() => increase()}
        type="button"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Count:
        <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          {count}
        </span>
      </button>{" "}
    </div>
  )
}

export default IndexPopup