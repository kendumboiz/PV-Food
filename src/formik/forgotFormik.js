import * as Yup from "yup";

export const initialResetPwValues = {
  email: "",
};

export const initialVerifyResetPwValues = {
  oobCode: "",
};

export const initialConfirmResetPwValues = {
  newPassword: "",
};

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});
