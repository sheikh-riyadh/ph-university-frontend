import { jwtDecode } from "jwt-decode";

export const verifyToken = async (token: string) => {
  const { role, userId } = jwtDecode(token) as { role: string; userId: string };
  return {
    role,
    userId,
  };
};
