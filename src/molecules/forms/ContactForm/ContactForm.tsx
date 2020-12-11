import * as React from "react";
import styled from "styled-components";

import { Input } from "../../../atoms/input";
import { TextArea } from "../../../atoms/text-area";
import { Button } from "../../../atoms/button";

type IFormProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Form = styled.form<IFormProps>`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 1rem;
  }
`;

const ContactForm: React.FC = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(form);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        type="number"
        name="phone"
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value.toString() })}
      />
      <TextArea
        name="message"
        placeholder="Your Message"
        rows={7}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <Button variant="primary" type="submit">
        SUBMIT
      </Button>
    </Form>
  );
};

export default ContactForm;
