import React from "react";
import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, PlusCircle, Trash2 } from "lucide-react";
import { useWelcome } from "@/hooks/useWelcome";
import * as Yup from "yup";

const welcomeSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  cards: Yup.array().of(
    Yup.object().shape({
      subTitle: Yup.string().required("Sub title is required"),
      subDescription: Yup.string().required("Sub description is required"),
    })
  ),
});

const initialValues = {
  title: "",
  description: "",
  cards: [{ subTitle: "", subDescription: "" }],
};

interface CreateWelcomeProps {
  initialData: any | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateWelcome = ({ initialData, open, onOpenChange }: CreateWelcomeProps) => {
  const { isLoading, handleCreateWelcome, handleUpdateWelcome } = useWelcome();
  const formInitialValues = initialData || initialValues;

  const handleSubmit = async (values: any, { resetForm, setSubmitting }: any) => {
    try {
      console.log(values);
      let response;
      if (initialData) {
        response = await handleUpdateWelcome(values);
      } else {
        response = await handleCreateWelcome(values);
      }
      if (response?.success) {
        resetForm();
        onOpenChange(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={() => {}}>
      <SheetContent className="w-[90vw] max-w-3xl min-h-[90vh] overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>{initialData ? "Update Welcome Data" : "Create Welcome Data"}</SheetTitle>
        </SheetHeader>

        <Formik
          enableReinitialize
          initialValues={formInitialValues}
          validationSchema={welcomeSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting, errors, touched }) => (
            <Form className="space-y-6 mx-2">
              <div>
                <label className="block mb-1 font-medium">Title</label>
                <Field
                  name="title"
                  as={Input}
                  placeholder="Enter title"
                  className={`w-full ${errors?.title && touched?.title ? "border border-red-600" : ""}`}
                />
                <ErrorMessage name="title" component="p" className="text-sm text-red-500" />
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <Field
                  name="description"
                  as={Input}
                  placeholder="Enter description"
                  className={`w-full ${errors?.description && touched?.description ? "border border-red-600" : ""}`}
                />
                <ErrorMessage name="description" component="p" className="text-sm text-red-500" />
              </div>

              <FieldArray name="cards">
                {({ push, remove }) => (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block font-medium">Cards</label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => push({ subTitle: "", subDescription: "" })}
                      >
                        <PlusCircle className="w-4 h-4 mr-1" /> Add Card
                      </Button>
                    </div>

                    {values?.cards?.map((card: any, index: number) => (
                      <div key={index} className="border rounded-lg p-4 mb-4 space-y-4">
                        <div>
                          <label className="block mb-1">Sub Title</label>
                          <Field
                            name={`cards.${index}.subTitle`}
                            as={Input}
                            placeholder="Enter sub title"
                          />
                          <ErrorMessage name={`cards.${index}.subTitle`} component="p" className="text-sm text-red-500" />
                        </div>

                        <div>
                          <label className="block mb-1">Sub Description</label>
                          <Field
                            name={`cards.${index}.subDescription`}
                            as={Input}
                            placeholder="Enter sub description"
                          />
                          <ErrorMessage name={`cards.${index}.subDescription`} component="p" className="text-sm text-red-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>

              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={handleCancel} className="flex-1" disabled={isLoading}>
                  Cancel
                </Button>
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : initialData ? "Update Welcome Data" : "Create Welcome Data"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </SheetContent>
    </Sheet>
  );
};

export default CreateWelcome;