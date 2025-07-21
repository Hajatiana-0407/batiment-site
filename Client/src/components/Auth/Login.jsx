import { BiLogIn, BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { BsExclamationCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import useForm from "../../Hooks/useForm";
import { object, string } from "yup";
import { login } from "../../Redux/AsyncThunk/AuthThunk";
import { getAuthState } from "../../Redux/Slice/AuthSlice";

export const LoginSchema = object({
  email: string()
    .email("Veuillez entrer un email valide")
    .required("L'email est requis"),
  password: string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .required("Le mot de passe est requis"),
});

const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { error, isAuthenticated, action } = useSelector(getAuthState);

  const { formValue, setFormValue, formErrors, onSubmite } = useForm(
    {
      email: "",
      password: "",
    },
    LoginSchema
  );

  const handleSubmit = () => {
    dispatch(login(formValue));
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/dashboard");
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <div className="w-screen h-screen pt-[calc(100vh/5)]">
      <div className="relative shadow p-5 w-[95%] sm:w-96 bg-surface mx-auto border-gray-300 border rounded">
        <div className="border-2 border-gray-300 flex justify-center items-center w-11/12 p-2 rounded-lg mx-auto">
          <BiUser size={60} />
        </div>
        <form
          onSubmit={(e) => {
            onSubmite(handleSubmit, e);
          }}
          className="flex flex-col gap-4 my-2"
        >
          <Input
            label="E-mail"
            name="email"
            type="email"
            icon={<MdEmail />}
            errorMessage={formErrors?.email}
            onChange={setFormValue}
            value={formValue.email}
          />
          <Input
            label="Mot de passe"
            name="password"
            type="password"
            icon={<TbLockPassword />}
            errorMessage={formErrors?.password}
            onChange={setFormValue}
            value={formValue.password}
          />

          {error === true && (
            <div className="text-red-500 px-1 p-[2px] mt-1 rounded text-sm bg-red-500/10">
              <span>
                <BsExclamationCircle className="inline-block mr-1" size={18} />
              </span>
              <span>Email ou mot de passe incorrect.</span>
            </div>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex justify-center items-center space-x-2"
          >
            {!action.isLoading && <BiLogIn className="w-4 h-4" />}
            {action.isLoading && (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            <span>Se connecter</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
