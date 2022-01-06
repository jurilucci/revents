import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

export default function MyTextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <textarea autoComplete='off' {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label style={{ border: "none" }} basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
