import React from "react";
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
  selectedGame?: any | null;
}

const CreateGames = ({ open, onClose, selectedGame }: CreateGamesProps) => {
  const { isLoading, handleCreateGames, handleUpdateGames } = useGames();

  const initialValues = {
    name: selectedGame?.name ?? "",
    category: selectedGame?.category ?? "",
    rating: selectedGame?.rating ?? null,
    users: selectedGame?.users ?? null,
    status: selectedGame?.status ?? "",
    imageBase64: selectedGame?.imageBase64 ?? selectedGame?.image,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: createGameSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        if (selectedGame?._id) {
          await handleUpdateGames(selectedGame?._id, values);
        } else {
          await handleCreateGames(values);
        }
        formik.resetForm();
        onClose();
      } catch (error) {
        console.error("Game Submit Error:", error);
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
    <Sheet open={open} onOpenChange={() => {}}>
      <SheetContent side="right" className="min-h-screen overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{selectedGame ? "Update Game" : "Create Game"}</SheetTitle>
        </SheetHeader>

        <form onSubmit={formik.handleSubmit} className="space-y-4 mt-6">
          <FormField
            id="name"
            name="name"
            placeholder="Enter game name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name as any}
          />

          <FormField
            id="category"
            name="category"
            placeholder="Enter category"
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && formik.errors.category as any}
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
            error={formik.touched.status && formik.errors.status as any}
          />

          <div>
            <Label htmlFor="image">Image</Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleFileChange}
              disabled={selectedGame?.image}
              className={`${formik.touched.imageBase64 && formik.errors.imageBase64 ? "border border-red-600" : ""}`}
            />
            {formik.touched.imageBase64 && formik.errors.imageBase64 && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.imageBase64 as any}
              </p>
            )}

            {console.log("formik.values", formik.values)as any}
            {formik.values.imageBase64 && (
              <img
                src={formik.values.imageBase64}
                alt="preview"
                className="mt-2 w-32 h-32 object-cover rounded-md border"
              />
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" disabled={isLoading} onClick={onClose} className="w-full">
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                selectedGame ? "Update Game" : "Create Game"
              )}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateGames;