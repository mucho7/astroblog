import "./App.css"

import { useState, useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./pages"

function App() {
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1000)
  // }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
  // return <>{isLoading ? <p>Loading</p> : <RouterProvider router={router} />}</>
}

export default App
