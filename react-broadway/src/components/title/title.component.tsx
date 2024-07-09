import { Button } from "flowbite-react";
import { ReactElement,useState,useEffect } from "react"

export const Heading3 = ({children}:{children:ReactElement})=>{
    const [loading,setLoading]  = useState(true);
    useEffect(()=>{
       console.log('Heading3 component mounted');
    },[])
    useEffect(()=>{
        console.log(`called everytime when children prop changes)`);
        
    })
    useEffect(()=>{
        return ()=>{
            console.log('only called when loading state is updated');
        }
    },[loading])
    return (
        <>
        <h3>{children}</h3>
        <Button>some button</Button>
        </>
    )
} 