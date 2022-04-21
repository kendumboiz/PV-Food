import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: null,
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(1, "Must be at least 1 characters")
    .max(10, "Must be at least 10 characters")
    .required("Please let us know your first name 🤔"),

  lastName: Yup.string()
    .min(1, "Must be at least 1 characters")
    .max(10, "Must be at least 10 characters")
    .required("Please let us know your first name 🤔"),

  email: Yup.string().email("Invalid email address").required("Required"),

  phone: Yup.string()
    .required("This field is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Your phone number is not available"
    ),
});
