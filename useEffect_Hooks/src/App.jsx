import { useEffect, useState } from 'react'
import PostItem from './components/PostItem'
import './App.css'

function App() {
  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null)
  const [count,setcount] = useState(1)




  async function fetchData(count) {
    try {
      setloading(true)
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`)
      let final = await res.json()
      setposts(final)
    } catch (error) {
      seterror(error)
    }finally{
      setTimeout(() => {
            setloading(false)
      },1500)
      
    }
  }
  

  useEffect(() => {
    fetchData(count)
  }, [count])




  return (
    <>
      <div className="buttons">
        <button disabled={count == 1 ? true : false}  onClick={() => { setcount(count - 1) }}>Previous</button>
        <button disabled={count == 10 ? true : false}  onClick={() => {  setcount(count + 1) }}>Next</button>
      </div>
    <div className="main">
      {loading ? <h1>Data is loading! Please Wait</h1> : <PostItem data={posts} />}
    </div>
    
      
    </>
  )
}

export default App
