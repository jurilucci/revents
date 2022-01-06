import React from "react";
import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

export default function MySelectInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        autoComplete='off'
        cleareble={field.value.toString()}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label style={{ border: "none" }} basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
