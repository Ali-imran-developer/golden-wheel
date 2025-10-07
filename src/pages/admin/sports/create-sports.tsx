import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
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

const FormikInput = ({ name, type }) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {name}
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

const CreatedSports = ({ open, openChange }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);
    resetForm();
    openChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={openChange}>
      <SheetContent side="right" className="w-full max-w-md bg-gray-600 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create Sport</SheetTitle>
        </SheetHeader>

        <Formik
          initialValues={{
            sport: "",
            league: "",
            homeTeam: "",
            awayTeam: "",
            homeOdds: "",
            drawOdds: "",
            awayOdds: "",
            status: "",
            betCount: 0,
          }}
          validationSchema={SportSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4 mt-4">
              {[
                "sport",
                "league",
                "homeTeam",
                "awayTeam",
                "homeOdds",
                "drawOdds",
                "awayOdds",
                "status",
                "betCount",
              ].map((field) => (
                <FormikInput
                  key={field}
                  name={field}
                  type={["homeOdds", "drawOdds", "awayOdds", "betCount"].includes(field) ? "number" : "text"}
                />
              ))}

              <SheetFooter className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => openChange(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </SheetFooter>
            </Form>
          )}
        </Formik>
      </SheetContent>
    </Sheet>
  );
};

export default CreatedSports;