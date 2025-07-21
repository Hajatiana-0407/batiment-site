import { useState } from "react";
import { toast } from "react-toastify";
import { ValidationError } from "yup";

export default function useForm(initial, schemaValidation) {
  const [formValue, setAllFormValue] = useState(initial);
  const [formErrors, setFormErrors] = useState({});

  const setFormValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name) {
      setAllFormValue({
        ...formValue,
        [name]: value,
      });
    }
  };

  // ************************* Type file  ************************* //
  const handleInputFileChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files?.[0];
      const name = e.target.name;
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setAllFormValue({
          ...formValue,
          [name]: imageUrl,
        });
        return imageUrl;
      }
    }
    return;
  };

  const onSubmite = async (next, e) => {
    e.preventDefault();
    const toastId = toast.loading("Veuillez patienter...");
    try {
      await schemaValidation.validate(formValue, { abortEarly: false });
      setFormErrors({});
      next();
      toast.dismiss(toastId);
      toast.success("Opération réussie !");
    } catch (error) {
      const errors = {};
      if (error instanceof ValidationError) {
        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path] = err.message;
          }
        });
        setFormErrors(errors);
      }
      toast.dismiss(toastId);
    }
  };

  return {
    formValue,
    setFormValue,
    formErrors,
    onSubmite,
    handleInputFileChange,
  };
}
