import { useState } from "react";
import useFetch from "./fetch";

const Test = () => {
  const {data,pend,error}=useFetch("http://localhost:5000/data")
  const mainSteps = data?.[0]?.makeup?.softmakeup?.detail?.mainstep;
  const steps=data?.[0]?.makeup?.softmakeup?.detail?.step;
  return (  
    <div>
      {mainSteps&&mainSteps[0]}
      {steps&&steps[0]}
   
    </div>
  );
}
 
export default Test;