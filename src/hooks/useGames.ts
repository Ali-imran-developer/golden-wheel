import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import GamesController from "@/controllers/gamesController";
import { setGames } from "@/store/slices/games-slice";

export const useGames = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGetGames = async () => {
    try {
      setIsLoading(true);
      const response = await GamesController.getAllGames();
      dispatch(setGames(response?.data));
      return response;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateGames = async (values: any) => {
    try {
      setIsLoading(true);
      const data = await GamesController.createGames(values);
      toast.success(data?.message);
      await handleGetGames();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateGames = async (id: string, values: any) => {
    try {
      setIsLoading(true);
      const data = await GamesController.updateGames(id, values);
      toast.success(data?.message);
      await handleGetGames();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteGames = async (id: string) => {
    try {
      setIsLoading(true);
      const data = await GamesController.deleteGames(id);
      toast.success(data?.message);
      await handleGetGames();
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
    handleGetGames,
    handleCreateGames,
    handleUpdateGames,
    handleDeleteGames,
  };
};
