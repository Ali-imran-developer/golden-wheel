import { useState } from "react";
import toast from "react-hot-toast";
import AuthController from "@/controllers/authController";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlePrimaryLogin = async (values: any) => {
    try {
      setIsLoading(true);
      const data: any = await AuthController.login(values);
      console.log("Login Data", data);
      AuthController.set({ token: data?.token });
      AuthController.set({ profile: data?.user });
      toast.success(data?.message);
      if(data?.user?.role === "admin"){
        navigate("/admin");
      }else{
        navigate("/");
      };
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrimarySignup = async (values: any) => {
    try {
      setIsLoading(true);
      const data: any = await AuthController.register(values);
      AuthController.set({ token: data?.token });
      AuthController.set({ profile: data?.user });
      toast.success(data?.message);
      navigate("/");
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handlePrimaryLogin,
    handlePrimarySignup,
  };
};
