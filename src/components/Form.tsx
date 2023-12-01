import { Box, TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styleOne } from "../services/styles";
import Alert from "./Alert";
import { useState } from "react";

const Form = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (
      e.currentTarget.elements.namedItem("name") as HTMLInputElement
    ).value;
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const phone = (
      e.currentTarget.elements.namedItem("phone") as HTMLInputElement
    ).value;

    if (!name || !email || !phone) {
      return setOpen(true);
    }

    const data = {
      name,
      email,
      phone,
    };

    localStorage.setItem("user", JSON.stringify(data));

    navigate("/page_two");
  };

  return (
    <>
      <Container component="div" sx={styleOne.div}>
        <Box onSubmit={handleSubmit} component="form" sx={styleOne.form}>
          <TextField
            id="outlined-required"
            label="Name"
            placeholder="Add your name"
            type="text"
            name="name"
            sx={styleOne.textField}
          />
          <TextField
            id="outlined-required"
            label="phone"
            placeholder="Add your phone"
            type="phone"
            name="phone"
            sx={styleOne.textField}
          />
          <TextField
            id="outlined-required"
            label="Email"
            placeholder="Add your email"
            type="email"
            name="email"
            sx={styleOne.textField}
          />

          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Box>
      </Container>

      <Alert open={open} handleClose={handleClose}></Alert>
    </>
  );
};

export default Form;
