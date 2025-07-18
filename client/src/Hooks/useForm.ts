import React, { useState } from "react"
import { toast } from "react-toastify";
import { ValidationError, type AnyObjectSchema } from 'yup'


// function to use on the input change event
export default function useForm<T>(initial: T, schemaValidation: AnyObjectSchema): {
    formValue: T;
    setFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formErrors?: Partial<Record<keyof T, string>>;
    onSubmite: (next: () => void, e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleInputFileChange: (e: React.ChangeEvent<HTMLInputElement>) => string | undefined
} {

    const [formValue, setAllFormValue] = useState(initial);
    const [formErrors, setFormErrors] = useState<Partial<Record<keyof T, string>>>();

    const setFormValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name) {
            setAllFormValue({
                ...formValue,
                [name]: value
            });
        }
    }

    // ************************* Type file  ************************* //
    const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>): string | undefined => {
        if (e.target.type === 'file') {
            const file = e.target.files?.[0];
            const name = e.target.name
            if (file) {
                const imageUrl = URL.createObjectURL(file);
                setAllFormValue({
                    ...formValue,
                    [name]: imageUrl
                });
            }
        }
        return
    }

    const onSubmite = async (next: () => void, e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const toastId = toast.loading('Veuillez patienter...');
        try {
            await schemaValidation.validate(formValue, { abortEarly: false })
            setFormErrors({});
            next();
            toast.dismiss(toastId);
            toast.success('Opération réussie !');
        } catch (error) {
            const errors: Partial<Record<keyof T, string>> = {};
            if (error instanceof ValidationError) {
                error.inner.forEach((err) => {
                    if (err.path) {
                        errors[err.path as keyof T] = err.message;
                    }
                });
                setFormErrors(errors);
            }
            toast.dismiss(toastId);
        }
    }

    return {
        formValue,
        setFormValue,
        formErrors,
        onSubmite,
        handleInputFileChange
    }
}