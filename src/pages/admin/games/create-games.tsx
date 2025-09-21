import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import createGameSchema from "@/validators/game-schema";
import { useGames } from "@/hooks/useGames";
import { FormField } from "@/components/ui/form-field";

interface CreateGamesProps {
  open: boolean;
  onClose: () => void;
}

const CreateGames = ({ open, onClose }: CreateGamesProps) => {
  const { isLoading, handleCreateGames } = useGames();

  const initialValues = {
    name: "",
    category: "",
    rating: null,
    users: null,
    status: "",
    imageBase64: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: createGameSchema,
    onSubmit: async (values) => {
      try {
        console.log("Form Values:", values);
        await handleCreateGames(values);
        formik.resetForm();
        onClose();
      } catch (error) {
        console.error("Create Game Error:", error);
      }
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      formik.setFieldValue("imageBase64", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="min-h-screen overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create Game</SheetTitle>
        </SheetHeader>

        <form onSubmit={formik.handleSubmit} className="space-y-4 mt-6">
          <FormField
            id="name"
            name="name"
            placeholder="Enter game name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name}
          />

          <FormField
            id="category"
            name="category"
            placeholder="Enter category"
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && formik.errors.category}
          />

          <FormField
            id="rating"
            name="rating"
            type="number"
            placeholder="0 - 5"
            value={formik.values.rating}
            onChange={formik.handleChange}
            error={formik.touched.rating && formik.errors.rating as any}
          />

          <FormField
            id="users"
            name="users"
            type="number"
            placeholder="Number of users"
            value={formik.values.users}
            onChange={formik.handleChange}
            error={formik.touched.users && formik.errors.users as any}
          />

          <FormField
            id="status"
            name="status"
            placeholder="live / inactive"
            value={formik.values.status}
            onChange={formik.handleChange}
            error={formik.touched.status && formik.errors.status}
          />

          <div>
            <Label htmlFor="image">Image</Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleFileChange}
              className={`${formik.touched.imageBase64 && formik.errors.imageBase64 ? "border border-red-600" : ""}`}
            />
            {formik.touched.imageBase64 && formik.errors.imageBase64 && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.imageBase64}
              </p>
            )}

            {formik.values.imageBase64 && (
              <img
                src={formik.values.imageBase64}
                alt="preview"
                className="mt-2 w-32 h-32 object-cover rounded-md border"
              />
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              "Create Game"
            )}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateGames;
