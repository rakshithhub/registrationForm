import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
}
export const SignUp = () => {

  const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    }
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row  form_data">
          <div className="col-xs-5 col-lg-4 col-md-5 col-sm-10 form_data1">
            <div className="form_heading">
              <h2>Welcome!</h2>
              <p>To The Rakshit Chaurasia for programmers.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  autoComplete="off"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                {errors.name && touched.name ? ( <p className="error_part">{errors.name}</p>) : null}
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="off"
                  aria-describedby="emailHelp"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (<p className="error_part">{errors.email}</p>) : null}
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (<p className="error_part">{errors.password}</p>) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  autoComplete="off"
                  id="confirmpassword"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmpassword && touched.confirmpassword ? (<p className="error_part">{errors.confirmpassword}</p>) : null}
              </div>
              <div className="btn_part">
                <p>Want to register using Gmail?</p>
                <button type="submit" className="btn_my">
                  registration
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-10 form_data2">
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&w=1000&q=80"
              alt="randomimage"
            />
          </div>
        </div>
      </div>
    </>
  );
};
