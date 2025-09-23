import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import SportsController from "@/controllers/sportsController";
import { setSportsData } from "@/store/slices/sports-slice";

export const useSports = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGetSports = async () => {
    try {
      setIsLoading(true);
      const data = await SportsController.getAllSports();
      dispatch(setSportsData(data?.data));
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateSports = async (values: any) => {
    try {
      setIsLoading(true);
      const data = await SportsController.createSports(values);
      toast.success(data?.message);
      await handleGetSports();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateSports = async (id: string, values: any) => {
    try {
      setIsLoading(true);
      const data = await SportsController.updateSports(id, values);
      toast.success(data?.message);
      await handleGetSports();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSports = async (id: string) => {
    try {
      setIsLoading(true);
      const data = await SportsController.deleteSports(id);
      toast.success(data?.message);
      await handleGetSports();
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
    handleGetSports,
    handleCreateSports,
    handleUpdateSports,
    handleDeleteSports,
  };
};
