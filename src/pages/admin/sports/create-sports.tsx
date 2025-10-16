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
import { useSports } from "@/hooks/useSports";
import { Loader2 } from "lucide-react";

const SportSchema = Yup.object().shape({
  sport: Yup.string().required("Sport is required"),
  league: Yup.string().required("League is required"),
  homeTeam: Yup.string().required("Home team is required"),
  awayTeam: Yup.string().required("Away team is required"),
  homeOdds: Yup.number().required("Home odds are required").typeError("Must be a number"),
  drawOdds: Yup.number().required("Draw odds are required").typeError("Must be a number"),
  awayOdds: Yup.number().required("Away odds are required").typeError("Must be a number"),
  status: Yup.string().required("Status is required"),
  betCount: Yup.number().optional().typeError("Must be a number"),
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

interface CreatedSportsProps {
  open: boolean;
  openChange: (open: boolean) => void;
  selectedSport?: any | null;
}

const CreatedSports = ({ open, openChange, selectedSport }: CreatedSportsProps) => {
  const { isLoading, handleCreateSports, handleUpdateSports } = useSports();

  const initialValues = {
    sport: selectedSport?.sport ?? "",
    league: selectedSport?.league ?? "",
    homeTeam: selectedSport?.homeTeam ?? "",
    awayTeam: selectedSport?.awayTeam ?? "",
    homeOdds: selectedSport?.homeOdds ?? "",
    drawOdds: selectedSport?.drawOdds ?? "",
    awayOdds: selectedSport?.awayOdds ?? "",
    status: selectedSport?.status ?? "",
    betCount: selectedSport?.betCount ?? 0,
  };

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      if (selectedSport?._id) {
        await handleUpdateSports(selectedSport._id, values);
      } else {
        await handleCreateSports(values);
      }
      resetForm();
      openChange(false);
    } catch (error) {
      console.error("Sport Submit Error:", error);
    }
  };

  return (
    <Sheet open={open} onOpenChange={() => {}}>
      <SheetContent side="right" className="w-full max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{selectedSport ? "Update Sport" : "Create Sport"}</SheetTitle>
        </SheetHeader>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={SportSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4 mt-4">
              <FormikInput name="sport" type="text" label="Sport Name" />
              <FormikInput name="league" type="text" label="League" />
              <FormikInput name="homeTeam" type="text" label="Home Team" />
              <FormikInput name="awayTeam" type="text" label="Away Team" />
              <FormikInput name="homeOdds" type="number" label="Home Odds" />
              <FormikInput name="drawOdds" type="number" label="Draw Odds" />
              <FormikInput name="awayOdds" type="number" label="Away Odds" />
              <FormikInput name="status" type="text" label="Status (e.g., live, upcoming)" />
              <FormikInput name="betCount" type="number" label="Bet Count" />

              <SheetFooter className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => openChange(false)} disabled={isLoading}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    selectedSport ? "Update Sport" : "Create Sport"
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

export default CreatedSports;