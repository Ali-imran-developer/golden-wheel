import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import WelcomeController from "@/controllers/welcomeController";
import { setWelcomeData } from "@/store/slices/welcome-slice";

export const useWelcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGetWelcome = async () => {
    try {
      setIsLoading(true);
      const data = await WelcomeController.getWelcome();
      dispatch(setWelcomeData(data?.data));
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateWelcome = async (values: any) => {
    try {
      setIsLoading(true);
      const data = await WelcomeController.createWelcome(values);
      toast.success(data?.message);
      await handleGetWelcome();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateWelcome = async (values: any) => {
    try {
      setIsLoading(true);
      const data = await WelcomeController.updateWelcome(values);
      toast.success(data?.message);
      await handleGetWelcome();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteWelcome = async () => {
    try {
      setIsLoading(true);
      const data = await WelcomeController.deleteWelcome();
      toast.success(data?.message);
      await handleGetWelcome();
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
    handleGetWelcome,
    handleCreateWelcome,
    handleUpdateWelcome,
    handleDeleteWelcome,
  };
};
