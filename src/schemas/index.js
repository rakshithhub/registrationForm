import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(12).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).max(14).required("Please Enter Your Password"),
    confirmpassword: Yup.string().required().oneOf([Yup.ref("password"),null],"Please Enter Valid Password"),
});