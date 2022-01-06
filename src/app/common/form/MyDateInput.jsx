import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext } from "formik";

export default function MyDateInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <DatePicker
        autoComplete='off'
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />
      {meta.touched && meta.error ? (
        <Label style={{ border: "none" }} basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
