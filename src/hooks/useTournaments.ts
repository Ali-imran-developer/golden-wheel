import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import TournamentsController from "@/controllers/tournamentsController";
import { setTournamentsData } from "@/store/slices/tournaments-slice";

export const useTournaments = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGetTournaments = async () => {
    try {
      setIsLoading(true);
      const data = await TournamentsController.getAllTournament();
      console.log(data);
      dispatch(setTournamentsData(data?.data));
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTournaments = async (values: any) => {
    try {
      setIsLoading(true);
      const data = await TournamentsController.createTournament(values);
      toast.success(data?.message);
      await handleGetTournaments();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTournaments = async (id: string, values: any) => {
    try {
      setIsLoading(true);
      const data = await TournamentsController.updateTournament(id, values);
      toast.success(data?.message);
      await handleGetTournaments();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTournaments = async (id: string) => {
    try {
      setIsLoading(true);
      const data = await TournamentsController.deleteTournament(id);
      toast.success(data?.message);
      await handleGetTournaments();
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
    handleGetTournaments,
    handleCreateTournaments,
    handleUpdateTournaments,
    handleDeleteTournaments,
  };
};
