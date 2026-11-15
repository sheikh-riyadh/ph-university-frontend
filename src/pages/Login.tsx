import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "phunversity!@",
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data: { id: string; password: string }) => {
    try {
      const response = await login(data).unwrap();
      const user = await verifyToken(response.data.accessToken);
      dispatch(setUser({ user, token: response.data.accessToken }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <input type="text" {...register("id")} />
      <input type="text" {...register("password")} />
      <Button disabled={isLoading} htmlType="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
