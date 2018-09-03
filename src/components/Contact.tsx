import * as React from "react";
import { reduxForm, Field } from "redux-form";
import { isEmail } from "validator";

const required = (value) => (value ? null : "This field is required");
const email = (value) => (isEmail(value) ? null : "E-Mail is invalid");

const Input = ({ input, placeholder, type, meta }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    <div>
      {meta.touched &&
        ((meta.error && <span>{meta.error}</span>) ||
          (meta.warning && <span>{meta.warning}</span>))}
    </div>
  </div>
);

const Contact = (form: any) => (
  <div>
    <h1>Contact Page</h1>
    <form onSubmit={form.handleSubmit((e) => console.log(e))}>
      <Field
        component={Input}
        placeholder="Name"
        type="name"
        name="name"
        validate={required}
      />
      <Field
        component={Input}
        type="email"
        name="email"
        placeholder="E-Mail"
        validate={[required, email]}
      />
      <Field
        component={Input}
        placeholder="Password"
        type="password"
        name="password"
        validate={required}
      />
      <input type="submit" value="SUBMIT" />
      <input type="reset" onClick={form.reset} value="RESET" />
    </form>
  </div>
);

export default reduxForm({ form: "contact" })(Contact);
