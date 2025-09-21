import * as Yup from "yup";

const createGameSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  category: Yup.string().required("Category is required"),
  rating: Yup.number().min(0).max(5).required("Rating is required"),
  users: Yup.number().min(0).required("Users is required"),
  status: Yup.string().required("Status is required"),
  imageBase64: Yup.string().required("Image is required"),
});

export default createGameSchema;