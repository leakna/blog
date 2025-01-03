import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data,getData]=useState(null);
  const [pend,setPending]=useState(true);
  const [error,setError]=useState(null);
  useEffect(()=>{
    fetch(url).then(res=>{
      if(res.ok)
        return res.json()
      else{
        throw Error("help me")
      }
    }).then((item)=>{
      getData(item)
      setPending(false)
    }).catch(err=>{
      setError(err.message)
    })
  },[])
  return {data,pend,error};
}
 
export default useFetch;