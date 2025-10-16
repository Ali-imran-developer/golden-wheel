import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTournaments } from "@/hooks/useTournaments";
import { Loader2 } from "lucide-react";

const TournamentSchema = Yup.object().shape({
  name: Yup.string().required("Tournament name is required"),
  game: Yup.string().required("Game is required"),
  prizePool: Yup.string().required("Prize pool is required"),
  buyIn: Yup.string().required("Buy-in is required"),
  players: Yup.number().optional().typeError("Must be a number"),
  maxPlayers: Yup.number().required("Max players is required").typeError("Must be a number"),
  startDate: Yup.string().required("Start date is required"),
  startTime: Yup.string().required("Start time is required"),
  status: Yup.string().required("Status is required"),
  image: Yup.string().required("Image is required"),
  type: Yup.string().required("Type is required"),
  duration: Yup.string().required("Duration is required"),
});

const FormikInput = ({ name, type, label }: any) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        type={type}
        {...field}
        className={meta.touched && meta.error ? "border-red-600" : ""}
      />
      {meta.touched && meta.error && (
        <div className="text-red-600 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

interface CreateTournamentProps {
  open: boolean;
  openChange: (open: boolean) => void;
  selectedTournament?: any | null;
}

const CreateTournament = ({ open, openChange, selectedTournament }: CreateTournamentProps) => {
  const { isLoading, handleCreateTournaments, handleUpdateTournaments } = useTournaments();

  const initialValues = {
    name: selectedTournament?.name ?? "",
    game: selectedTournament?.game ?? "",
    prizePool: selectedTournament?.prizePool ?? "",
    buyIn: selectedTournament?.buyIn ?? "",
    players: selectedTournament?.players ?? 0,
    maxPlayers: selectedTournament?.maxPlayers ?? "",
    startDate: selectedTournament?.startDate ?? "",
    startTime: selectedTournament?.startTime ?? "",
    status: selectedTournament?.status ?? "",
    image: selectedTournament?.image ?? "",
    type: selectedTournament?.type ?? "",
    duration: selectedTournament?.duration ?? "",
  };

  const handleSubmit = async (values: any, { resetForm, setFieldValue }: any) => {
    try {
      if (selectedTournament?._id) {
        await handleUpdateTournaments(selectedTournament._id, values);
      } else {
        await handleCreateTournaments(values);
      }
      resetForm();
      openChange(false);
    } catch (error) {
      console.error("Tournament Submit Error:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFieldValue("image", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Sheet open={open} onOpenChange={() => {}}>
      <SheetContent side="right" className="w-full max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{selectedTournament ? "Update Tournament" : "Create Tournament"}</SheetTitle>
        </SheetHeader>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={TournamentSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, touched, errors }) => (
            <Form className="space-y-4 mt-4">
              <FormikInput name="name" type="text" label="Tournament Name" />
              <FormikInput name="game" type="text" label="Game" />
              <FormikInput name="prizePool" type="text" label="Prize Pool (e.g., $50,000)" />
              <FormikInput name="buyIn" type="text" label="Buy-In (e.g., $100)" />
              <FormikInput name="players" type="number" label="Current Players" />
              <FormikInput name="maxPlayers" type="number" label="Max Players" />
              <FormikInput name="startDate" type="text" label="Start Date (e.g., Dec 18, 2024)" />
              <FormikInput name="startTime" type="text" label="Start Time (e.g., 20:00)" />
              <FormikInput name="status" type="text" label="Status (e.g., live, registering)" />
              <FormikInput name="type" type="text" label="Type (e.g., Poker, Blackjack)" />
              <FormikInput name="duration" type="text" label="Duration (e.g., 3 hours)" />

              <div>
                <Label htmlFor="image">Image</Label>
                <Input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setFieldValue)}
                  disabled={!!selectedTournament?.image}
                  className={touched.image && errors.image ? "border-red-600" : ""}
                />
                {touched.image && errors.image && (
                  <p className="text-red-500 text-xs mt-1">{errors.image as any}</p>
                )}

                {values.image && (
                  <img
                    src={values.image}
                    alt="preview"
                    className="mt-2 w-full h-32 object-cover rounded-md border"
                  />
                )}
              </div>

              <SheetFooter className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => openChange(false)} disabled={isLoading}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    selectedTournament ? "Update Tournament" : "Create Tournament"
                  )}
                </Button>
              </SheetFooter>
            </Form>
          )}
        </Formik>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTournament;
