import * as yup from 'yup'

let UserInfoSchema = yup.object().shape({
  displayName: yup
    .string()
    .min(2, 'Minimum 2 characters are required')
    .typeError()
    .required(),
  // gender: yup.string().oneOf(['M', 'F', 'Other'], 'Invalid gender').required(),
  // subscription: yup
  //   .string()
  //   .oneOf(['Free', 'Trial', 'Standard', 'Premium'], 'Invalid subscription')
  //   .required(),
})

export default UserInfoSchema
