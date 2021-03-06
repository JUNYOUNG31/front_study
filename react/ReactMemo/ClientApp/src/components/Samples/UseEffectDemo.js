import React,{useState, useEffect} from "react";

function UseEffectDemo() {
  const [ agree, setAgree ] = useState(false)

  // useEffect(()=> {
  //   console.log("페이지 로드 또는 변경")
  // });

  // 처음 로드할때만 적용
  useEffect(()=> {
    console.log("페이지 로드")
  }, []);

  return(
    <>
      <h1>UseEffectDemo</h1>
      <input type="checkbox" value={agree} onChange={()=> setAgree(agree => !agree)}/>
      {agree ? "동의함" : "동의하지않음"}
    </>
  )
}

export default UseEffectDemo