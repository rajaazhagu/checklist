import React, { useEffect,useState} from 'react'

const Text = () => {
        const [quote,setQuote]=useState(1)
          useEffect(()=>{
              const up=Math.floor(Math.random()*3)
              setQuote(up)
          },[])
          const down=["Be" ,"Do","Emerge"];
    return(
         
    <div className="quote">
     <p className="quote1">{down[quote]} your self</p>
     <p className="quote2">{down[quote]} your self</p>
     <p className="quote3">{down[quote]} your self</p>
  </div>)
  }

export default Text