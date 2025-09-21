import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Loader2, PlusCircle, Trash2, X } from "lucide-react";
import { blogSchema, blogValues } from "@/validators/blog-schema";
import { Input } from "@/components/ui/input";
import ImageUploader from "./image-uploader";
import { Card, CardContent } from "@/components/ui/card";
import { useBlogs } from "@/hooks/useBlogs";

const CreateBlog = ({ initialData, open, onOpenChange }) => {
  const initialValues = initialData || blogValues;
  const { isLoading, handleCreateBlogs } = useBlogs();

  const handleSubmit = async (values: any, { resetForm, setSubmitting }) => {
    try{
      console.log(values);
      let response = await handleCreateBlogs(values);
      if(response?.success){
        resetForm();
        onOpenChange();
      }
    }catch(error){
      console.log(error);
    }finally{
      setSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[90vw] max-w-3xl min-h-[90vh] overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>Create Blog</SheetTitle>
        </SheetHeader>

        <Formik enableReinitialize initialValues={initialValues} validationSchema={blogSchema} onSubmit={handleSubmit}>
          {({ values, isSubmitting, errors, touched }) => (
            <Form className="space-y-6 mx-2">
              <div>
                <label className="block mb-1 font-medium">Heading</label>
                <Field name="heading" as={Input} placeholder="Enter heading" className={`w-full ${errors?.heading && touched?.heading ? "border border-red-600" : ""}`} />
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <Field name="description" as={Input} placeholder="Enter description" className={`w-full ${errors?.description && touched?.description ? "border border-red-600" : ""}`} />
              </div>

              <FieldArray name="images">
                {({ push, remove }) => (
                  <div>
                    <label className="block mb-2 font-medium">Images</label>

                    <ImageUploader
                      onUpload={(uploadedUrls: any) => {
                        uploadedUrls.forEach((url: any) => push(url));
                      }}
                    />

                    {values?.images?.length > 0 && (
                      <div className="flex gap-4 mt-4 flex-wrap">
                        {values?.images?.map((url, index) => (
                          <div key={index} className="relative">
                            <img
                              src={url}
                              alt={`image-${index}`}
                              className="w-20 h-20 rounded-full object-cover border"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute w-6 h-6 -top-0 -right-0 rounded-full"
                              onClick={() => remove(index)}
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <ErrorMessage name="images" component="p" className="text-sm  text-red-500" />
                  </div>
                )}
              </FieldArray>

              <FieldArray name="tags">
                {({ push, remove }) => (
                  <div>
                    <label className="block mb-2 font-medium">Tags</label>
                    {values?.tags?.map((_, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <Field
                          name={`tags.${index}`}
                          as={Input}
                          placeholder="Tag"
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => push("")}
                    >
                      <PlusCircle className="w-4 h-4 mr-1" /> Add Tag
                    </Button>
                    <ErrorMessage
                      name="tags"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>
                )}
              </FieldArray>

              <FieldArray name="detail">
                {({ push, remove }) => (
                  <div>
                    <label className="block mb-2 font-medium">Details</label>
                    {values?.detail?.map((detail, index) => (
                      <Card key={index} className="mb-4">
                        <CardContent className="space-y-4 p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold">Detail {index + 1}</h3>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => remove(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div>
                            <label className="block mb-1">Subheading</label>
                            <Field
                              name={`detail.${index}.subheading`}
                              as={Input}
                              placeholder="Enter subheading"
                            />
                            <ErrorMessage
                              name={`detail.${index}.subheading`}
                              component="p"
                              className="text-sm text-red-500"
                            />
                          </div>

                          <div>
                            <label className="block mb-1">SubParagraph</label>
                            <Field
                              name={`detail.${index}.subParagraph`}
                              as={Input}
                              placeholder="Enter subParagraph"
                            />
                            <ErrorMessage
                              name={`detail.${index}.subParagraph`}
                              component="p"
                              className="text-sm text-red-500"
                            />
                          </div>

                          <FieldArray name={`detail.${index}.points`}>
                            {({ push, remove }) => (
                              <div>
                                <label className="block mb-2">Points</label>
                                {detail?.points?.map((_, pIndex) => (
                                  <div key={pIndex} className="flex items-center gap-2 mb-2">
                                    <Field name={`detail.${index}.points.${pIndex}`} as={Input} placeholder="Enter point" className="flex-1" />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => remove(pIndex)}>
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                ))}
                                <Button type="button" variant="outline" size="sm" onClick={() => push("")}>
                                  <PlusCircle className="w-4 h-4 mr-1" /> Add Point
                                </Button>
                                <ErrorMessage name={`detail.${index}.points`} component="p" className="text-sm text-red-500" />
                              </div>
                            )}
                          </FieldArray>
                        </CardContent>
                      </Card>
                    ))}

                    <Button type="button" variant="outline" size="sm" onClick={() => push({ subheading: "", subParagraph: "", points: [""] })}>
                      <PlusCircle className="w-4 h-4 mr-1" /> Add Detail
                    </Button>
                  </div>
                )}
              </FieldArray>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : initialData ? ("Update Blog") : ("Submit")}
              </Button>
            </Form>
          )}
        </Formik>
      </SheetContent>
    </Sheet>
  );
};

export default CreateBlog;