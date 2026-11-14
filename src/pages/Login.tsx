import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "123",
      password: "123",
    },
  });

  const handleLogin = (data: { id: string; password: string }) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <input type="text" {...register("id")} />
      <input type="text" {...register("password")} />
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
