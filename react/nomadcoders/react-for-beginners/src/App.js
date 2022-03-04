import Button from "./Button";

import styles from "./App.module.css"
import { useState, useEffect } from "react"

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword((event.target.value))
  // 페이지들어올때 한번만 실행
  useEffect(() => {
    console.log("I run only once.");
  }, [])    
  // [counter] 가 변할때만 
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter])      
  // [keyword] 가 변할때만 실행
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword)
    }
  }, [keyword])   
  // 두개 넣을수도 있음
  useEffect(() => {
    console.log("I run when counter & keyword changes.");
  }, [counter, keyword])  


  // 컴포넌트를 생기고 사라질때 확인
  // function Hello() {
  //   useEffect(() => {
  //     console.log("created :)")
  //     return () => console.log("destroyed :(")
  //   }, [])
  //   return <h1>Hello</h1>
  // }

  function Hello() {
    useEffect(function() {
      console.log("hi :)")
      return function() {
        console.log("bye :(")
      }
    }, [])
    return <h1>Hello</h1>
  }


  const [showing, setShowing] = useState(false)
  const onShow = () => setShowing((prev) => !prev)

  return (
    <div>
      <Button text={"Continue"} />
      <hr/>
      <h1 className={styles.title}>Welcome</h1>
      <input
        type="text"
        value={keyword} 
        placeholder="search here..." 
        onChange={onChange}/>
      <hr/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <hr/>
      {showing ? <Hello/> : null}
      <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
