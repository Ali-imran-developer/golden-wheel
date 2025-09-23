import { useState } from "react";
import toast from "react-hot-toast";
import BlogsController from "@/controllers/blogsController";
import { useDispatch } from "react-redux";
import { setBlogDetail, setBlogs } from "@/store/slices/blog-slice";

export const useBlogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGetBlogs = async () => {
    try {
      setIsLoading(true);
      const data = await BlogsController.getBlog();
      dispatch(setBlogs(data));
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetBlogDetail = async (id: string) => {
    try {
      setIsLoading(true);
      const data = await BlogsController.getBlogDetail(id);
      dispatch(setBlogDetail(data?.data[0]));
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateBlogs = async (values: any) => {
    try {
      setIsLoading(true);
      const data = await BlogsController.createBlog(values);
      toast.success(data?.message);
      await handleGetBlogs();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateBlogs = async (id: string, values: any) => {
    try {
      setIsLoading(true);
      const data = await BlogsController.updateBlog(id, values);
      toast.success(data?.message);
      await handleGetBlogs();
      return data;
    } catch (error: any) {
      console.log("@Error", error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteBlogs = async (id: string) => {
    try {
      setIsLoading(true);
      const data = await BlogsController.deleteBlog(id);
      toast.success(data?.message);
      await handleGetBlogs();
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
    handleGetBlogs,
    handleCreateBlogs,
    handleUpdateBlogs,
    handleDeleteBlogs,
    handleGetBlogDetail,
  };
};
