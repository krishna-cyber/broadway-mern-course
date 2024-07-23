import { Label, Textarea } from "flowbite-react";
import { useController } from "react-hook-form";

export interface TextInputInterface {
  control: any;
  defaultValue?: string | undefined;
  name: string;
  required?: boolean;
  errMsg?: string | null;
  type?: string;
  rows?: number;
}

export const TextInputComponent = ({
  control,
  type = "text",
  name,
  defaultValue = "",
  required = false,
  errMsg = null,
}: TextInputInterface) => {
  const { field } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
    rules: {
      required: required,
    },
  });
  return (
    <>
      <input
        type={type}
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
    rules: {
      required: required,
    },
  });

  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor={name} value={name.charAt(0).toUpperCase() + name.slice(1)} />
      </div>
      <Textarea
        {...field}
        placeholder="Enter your address details here..."
        required={required}
        rows={rows}

      >{defaultValue}</Textarea>
      <span className=" text-sm italic text-red-800">{errMsg}</span>
    </div>
  );
};
