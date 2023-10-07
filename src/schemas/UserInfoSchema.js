import * as yup from 'yup'

let UserInfoSchema = yup.object().shape({
  displayName: yup.string().min(2, 'Minimum 2 characters are required').typeError().required(),
  photoURL: yup
    .string()
    .url('Invalid URL format') // Validate it's a valid URL
    .matches(/^(https?|ftp):/, 'Invalid URL format. Please enter a valid URL.'),
  // gender: yup.string().oneOf(['M', 'F', 'Other'], 'Invalid gender').required(),
  // subscription: yup
  //   .string()
  //   .oneOf(['Free', 'Trial', 'Standard', 'Premium'], 'Invalid subscription')
  //   .required(),
})

export default UserInfoSchema
