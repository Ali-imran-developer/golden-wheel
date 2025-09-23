import { useState } from "react";
import toast from "react-hot-toast";
import BlogsController from "@/controllers/blogsController";
import { useDispatch } from "react-redux";
import { setBlogs } from "@/store/slices/blog-slice";
import BannersController from "@/controllers/bannersController";
import { setBanners } from "@/store/slices/banner-slice";

export const useBanners = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGetBanners = async () => {
    try {
      setIsLoading(true);
      const data = await BannersController.getBanners();
      dispatch(setBanners(data));
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteBanner = async (id: string) => {
    try {
      setIsLoading(true);
      const data = await BannersController.deleteBanner(id);
      toast.success(data?.message);
      await handleGetBanners();
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
    handleGetBanners,
    handleDeleteBanner,
  };
};
