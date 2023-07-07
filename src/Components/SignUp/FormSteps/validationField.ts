const validateField = (
  field: string,
  fieldName: string,
  errorMessage: string,
  setErrors: any
) => {
  if (field.trim() === "") {
    setErrors((prev: any) => {
      return { ...prev, [fieldName]: errorMessage };
    });
    return false;
  }
  return true;
};

export default validateField;
