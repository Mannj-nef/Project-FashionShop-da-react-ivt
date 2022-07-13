import * as Yup from "yup";

export const VALIDATE_YUP = {
  TITLE: Yup.string()
    .required()
    .min(2, "Must be 2 characters or more")
    .max(80, "Must be 80 characters or less"),
  EMAIL: Yup.string().required().email("Invalid email address"),
  PASSWORD: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      " passWord minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte"
    ),
  DESCRIPTION: Yup.string()
    .required()
    .min(2, "Must be 2 characters or more")
    .max(150, "Must be 150 characters or less")
    .trim(),
};
