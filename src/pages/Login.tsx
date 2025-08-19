import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log("Login form submitted:", values);
    // Add your login logic here
  };

  return (
    <div className="min-h-screen pt-16 bg-casino-dark flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h2>
          <p className="text-muted-foreground">
            Sign in to your Baji Live account
          </p>
        </div>

        <Card className="casino-shadow-elegant">
          <CardHeader className="text-center pb-4">
            <h3 className="text-xl font-semibold text-foreground">Login</h3>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, values, setFieldValue }) => (
                <Form className="space-y-6">
                  {/* Email Field */}
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
                        placeholder="Enter your password"
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

                  {/* Remember Me and Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-muted-foreground"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="text-primary hover:text-primary/80 casino-transition"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-card text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  {/* Social Login Buttons */}
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

        {/* Register Link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-primary/80 casino-transition font-medium"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;