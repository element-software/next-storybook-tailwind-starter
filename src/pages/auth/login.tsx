import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button } from "@/components";
import { signIn } from "next-auth/react";

const Login: FC = () => {
  const { push } = useRouter();
  const [alert, setAlert] = useState<string>("");

  const initialValues = {
    identifier: "",
    password: "",
  };

  const validationSchema = Yup.object({
    identifier: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    setAlert("yes");

    const strapiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log("values", values);
    console.log("strapiUrl", strapiUrl);

    signIn("credentials", {
      identifier: values.identifier,
      password: values.password,
      redirect: false,
    }).then((response) => {
      console.log("response", response);
      if (response) {
        setAlert(response.toString());
      } else {
        // push("/");
      }
    });

    // axios
    //   .post(`${strapiUrl}api/auth/local`, values)
    //   .then((response) => {
    //     const jwt = response.data.jwt;
    //     const username = response.data.user.username;

    //     localStorage.setItem("jwt", jwt);
    //     localStorage.setItem("username", username);

    //     push("/");
    //     resetForm();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (!error.response.data.message) {
    //       setAlert("Something went wrong");
    //     } else {
    //       const messages: [] = error.response.data.message[0].messages;

    //       const list: string[] = [];
    //       messages.map((message: { id: any }, i: number) => {
    //         let item = "";
    //         if (i === 0) item += `<ul>`;

    //         item += `<li>${message.id}</li>`;

    //         if (i === messages.length - 1) item += `</ul>`;
    //         list.push(item);
    //       });

    //       setAlert(list.toString());
    //     }
    //   })
    //   .finally(() => {
    //     setSubmitting(false);
    //   });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full h-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        {alert && (
          <div style={{ backgroundColor: "lightcoral" }}>
            <div dangerouslySetInnerHTML={{ __html: alert }} />
          </div>
        )}
        <br />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) =>
            onSubmit(values, { setSubmitting, resetForm })
          }
        >
          {({ isSubmitting, isValid }) => (
            <Form className="mt-6">
              <div className="w-full">
                <div>
                  <label htmlFor="identifier">Username or Email</label>
                </div>
                <Field
                  type="text"
                  id="identifier"
                  name="identifier"
                  placeholder="Username or Email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <div className="error">
                  <ErrorMessage name="identifier" />
                </div>
              </div>

              <br />

              <div>
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <div className="error">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <br />

              <Button
                type="submit"
              >
                {isSubmitting ? "Loading..." : "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
