import React, { useEffect,useState} from 'react'
const Quote = () => {
  const [quote,setQuote]=useState(1)
    useEffect(()=>{
        const up=Math.floor(Math.random()*3)
        setQuote(up)
    },[])
    const down=["Be" ,"Do","Emerge"];
  return (
    <p className="quote">{down[quote]} your self</p>
  )
}
export default Quote