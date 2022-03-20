import React, { useEffect } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { useAuth } from "../utils/AuthContext";
import { isLoggedIn } from "../utils/isLoggedIn";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const initValue = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(from, { replace: true });
    }
  }, [isLoggedIn, currentUser]);

  const handleSignin = async (values) => {
    const val = await login(values.email, values.password);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[400px] h-[450px]">
        <h1 className="text-[32px] leading-[60px] mb-2 font-bold">Log in</h1>
        <Formik
          initialValues={initValue}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSignin(values, setSubmitting);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form>
              <div className="py-2">
                <Field
                  className="w-full bg-transparent outline-none border p-2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                <span className="text-red-600 py-1">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <div className="py-2">
                <Field
                  className="w-full bg-transparent outline-none border p-2"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />
                <span className="text-red-600 py-1">
                  {errors.password && touched.password && errors.password}
                </span>
              </div>
              <div className="flex justify-between">
                <p>Don't have an account?</p>
                <NavLink className={"text-blue-500"} to={"/signup"}>
                  Sign up
                </NavLink>
              </div>
              <div className="py-6 text-center">
                <button
                  className="w-full py-1 bg-blue-500 text-white rounded-2xl font-bold focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  type="submit"
                  //   disabled={isSubmitting}
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
