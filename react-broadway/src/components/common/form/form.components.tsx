import { Textarea } from "flowbite-react";
import { useController } from "react-hook-form";

export interface TextInputInterface {
  control: any;
  defaultValue?: string | undefined;
  name: string;
  required?: boolean;
  errMsg?: string | null;
  type?: string;
  rows?: number;
  placeholder?:string;
}

export const TextInputComponent = ({
  control,
  type = "text",
  name,
  defaultValue = "",
  placeholder="",
  errMsg = null,
}: TextInputInterface) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
  });
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...field}
        className={`mt-1 w-full rounded-md ${
          errMsg
            ? `border-red-500 text-red-500`
            : `border-gray-200 text-gray-700`
        } bg-white text-sm  shadow-sm`}
      />
      <span className=" text-sm italic text-red-800">{errMsg}</span>
    </>
  );
};

export const TextAreaComponent = ({
  placeholder,
  control,
  rows = 3,
  name,
  defaultValue = "",
  required = false,
  errMsg = null,
}: TextInputInterface) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
  });

  return (
    <div className="max-w-md">
      
      <Textarea
        {...field}
        placeholder={placeholder}
        required={required}
        rows={rows}

      >{defaultValue}</Textarea>
      <span className=" text-sm italic text-red-800">{errMsg}</span>
    </div>
  );
};
