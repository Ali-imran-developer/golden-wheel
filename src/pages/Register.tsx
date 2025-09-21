import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import signupSchema from "@/validators/signup-schema";
import { useAuth } from "@/hooks/useAuth";

const Register = () => {
  const { handlePrimarySignup, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (
    values: { userName: string; email: string; password: string; confirmPassword: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    const { userName, email, password } = values;
    try {
      await handlePrimarySignup({ userName, email, password });
      resetForm();
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-casino-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Join Baji Live
          </h2>
          <p className="text-muted-foreground">
            Create your account and start winning
          </p>
        </div>

        <Card className="casino-shadow-elegant">
          <CardHeader className="text-center pb-4">
            <h3 className="text-xl font-semibold text-foreground">Register</h3>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={signupSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, values, setFieldValue }) => (
                <Form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Field
                        as={Input}
                        id="userName"
                        name="userName"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={values.userName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("userName", e.target.value)
                        }
                      />
                    </div>
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="text-destructive text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={values.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("email", e.target.value)
                        }
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-destructive text-sm mt-1"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <Label htmlFor="password" className="text-foreground">
                      Password
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        value={values.password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("password", e.target.value)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground casino-transition"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-destructive text-sm mt-1"
                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <Label htmlFor="confirmPassword" className="text-foreground">
                      Confirm Password
                    </Label>
                    <div className="relative mt-2">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Field
                        as={Input}
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10"
                        value={values.confirmPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("confirmPassword", e.target.value)
                        }
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground casino-transition"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-destructive text-sm mt-1"
                    />
                  </div>

                  <div>
                    <div className="flex items-start">
                      <Field
                        type="checkbox"
                        name="termsAccepted"
                        className="h-4 w-4 text-primary focus:ring-primary border-border rounded mt-1"
                        // checked={}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("termsAccepted", e.target.checked)
                        }
                      />
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="termsAccepted"
                          className="text-muted-foreground"
                        >
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-primary hover:text-primary/80 casino-transition"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="text-primary hover:text-primary/80 casino-transition"
                          >
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="termsAccepted"
                      component="div"
                      className="text-destructive text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-card text-muted-foreground">
                        Or register with
                      </span>
                    </div>
                  </div>

                  {/* Social Register Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="casino-outline"
                      size="sm"
                      className="w-full"
                    >
                      Google
                    </Button>
                    <Button
                      type="button"
                      variant="casino-outline"
                      size="sm"
                      className="w-full"
                    >
                      Facebook
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-primary/80 casino-transition font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;