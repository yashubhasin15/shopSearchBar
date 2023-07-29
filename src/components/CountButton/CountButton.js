import React,{useState,useEffect} from "react"
import "./CountButton.css"

const CountButton= (props)=>{
    const [currentCount,setCurrentCount]= useState(0)

    const increment= ()=>{
        setCurrentCount(currentCount+props.incrementBy)
    }

    useEffect(()=>{
      console.log("count changed")
      if(currentCount%10===0){
        console.log("count reached "+currentCount)
      }
      if(currentCount===50){
        setCurrentCount(0)
      }
    },[currentCount])

    const styles= {
      backgroundColor:props.color,
      height: "3rem",
      width: "4rem",
      borderRadius: props.borderRad,
    }

    return (
      <div className="outer-div">
        <button onClick={increment} style={styles}>+{props.incrementBy}</button>
        <div>{currentCount}</div>
      </div>
    )
}

export default CountButton