export const formValidators = {
  maxLength: (maxLength: number) => (value: string) =>
    value.length > maxLength && `Max length is ${maxLength} symbols`,
  required: (value: string) => !value && "Field is required",
};
