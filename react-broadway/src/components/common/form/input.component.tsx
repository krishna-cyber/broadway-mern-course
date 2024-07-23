import { useController } from "react-hook-form"

export interface TextInputInterface{
    control:any,
    defaultValue?: string | undefined
    name:string,
    required:boolean
    errMsg?:string|null
    type?:string
}

export const TextInputComponent = ({control,type='text',name,defaultValue = "",required=false,errMsg=null}:TextInputInterface)=>{
    const {field} = useController({
        control:control,
        name: name,
        defaultValue:defaultValue,
        rules:{
            required:required
        }
       
    })
    return(
        <>
         <input
                  type={type}
                  {...field}
                  className= {`mt-1 w-full rounded-md ${errMsg?`border-red-500 text-red-500`:`border-gray-200 text-gray-700`} bg-white text-sm  shadow-sm`}
                />
                <span className=" text-sm italic text-red-800">
                    {errMsg}
                </span>
        </>
    )
}