import type React from "react";
import clsx from "clsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { forwardRef, useState, type Ref } from "react";
import {  BsExclamationCircle } from "react-icons/bs";

// import React from 'react'
type InputPropsType = {
    label: string;
    name: string;
    placeholder?: string;
    required?: false | true;
    type?: 'text' | 'number' | 'password' | 'email';
    icon?: React.ReactNode,
    value?: string | number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    readonly?: boolean,
    errorMessage?: string
}


const Input = forwardRef(
    ({ label, name, placeholder = "", required = false, type = 'text', icon = "", value, readonly = false, onChange = () => { }, errorMessage = "" }: InputPropsType, ref: Ref<HTMLInputElement> | undefined) => {
        const [showPassWord, setShowPassWord] = useState(false);

        return (
            <div className="">
                {/* If there is an icon , we don't need the label  */}
                {!icon && <label
                    htmlFor={name}
                    className="block mb-2 text-base text-body text-secondary">
                    {label} :
                </label>}
                <div className="relative">
                    <input
                        ref={ref}
                        autoComplete="off"
                        type={type !== 'password' ? type
                            : showPassWord ? "text" : type
                        }
                        id={name}
                        className={clsx({
                            "ps-12": icon !== ""
                        }, "bg-background border border-ring text-primary text-sm rounded focus:ring-theme/50 focus:border-theme/50 focus:outline-1 focus:outline-theme/50 block w-full p-2")}
                        name={name}
                        placeholder={icon !== "" ? label : placeholder}
                        required={required}
                        value={value}
                        onChange={onChange}
                        readOnly={readonly}
                    />
                    {icon !== "" &&
                        <div className="absolute flex justify-center items-center w-10 top-0 left-0  text-xl text-secondary border-r border-ring h-full">
                            {icon}
                        </div>
                    }
                    {type === 'password' &&
                        <div>
                            <div
                                className="absolute z-20 flex justify-center items-center w-10 top-0 right-0  text-xl text-secondary  border-r border-ring h-full">
                                <span className="cursor-pointer" onClick={() => setShowPassWord(v => !v)}>
                                    {!showPassWord ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                        </div>
                    }
                </div>
                {errorMessage &&
                    <div className="text-red-500 px-1 p-[2px] mt-1 rounded text-sm bg-red-500/10">
                        <span>
                            <BsExclamationCircle className="inline-block mr-1" size={18} />
                        </span>
                        <span>{errorMessage}</span>
                    </div>
                }
            </div>
        )
    }
)

export default Input