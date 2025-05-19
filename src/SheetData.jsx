import React,{useState,useEffect} from 'react'

export default function SheetData() {
    const [data,setData]=useState([])
    async function getSheetData(){
        const data=await fetch("https://api.sheetbest.com/sheets/e472b28d-fb0a-493b-afb1-645a0c9615b6")
        const json=await data.json()
        setData(json)

    }
    useEffect(()=>{
        getSheetData()
    },[])
    console.log(data)
  return (
    <div className=' p-4 m-4'>
        {
            data.map((d,i)=>(
                <div className='p-10 bg-gray-300  m-10 rounded-lg' key={d.Id} >
                    <h1 className='text-xl font-bold p-4 m-4'>{d?.Title}</h1>
                    <img className='w-56 p-4 m-4' src={d.Image} alt={d.Title} />
                    <p className='p-4 m-4'>{d?.Body}</p>
                </div>
            ))
        }
      
    </div>
  )
}
