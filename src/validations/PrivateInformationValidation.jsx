// import * as yup from "yup";

// const privateSchema = yup.object().shape({
//   name: yup.string().min(2).required(),
//   surname: yup.string().min(2).required(),
//   image: yup.string().required(),
//   email: yup.string().email().required(),
//   phone_number: yup.string().required(),
// });

// export default privateSchema;

const privateValidation = (data, image) => {
  const errors = {};
  const noErrors = {};
  const gerorgianCharacters = /^[ა-ჰ]+$/;
  const email = /.*\@redberry.ge$/;
  const phone = /^\+\995\d{9}?/;

  if (!data.name) {
    errors.name = "Name is required";
  } else if (!gerorgianCharacters.test(data.name)) {
    errors.name = "Name should be in georgian";
  } else if (data.name.length <= 1) {
    errors.name = "Name should be longer than 1 character";
  } else {
    errors.name = "Success";
  }
  if (
    data.name &&
    gerorgianCharacters.test(data.name) &&
    data.name.length > 1
  ) {
    errors.name = "Success";
  }

  if (!data.surname) {
    errors.surname = "Surname is required";
  } else if (!gerorgianCharacters.test(data.surname)) {
    errors.surname = "Surname should be in georgian";
  } else if (data.surname.length <= 1) {
    errors.surname = "Surname should be longer than 1 character";
  }
  if (
    data.surname &&
    gerorgianCharacters.test(data.surname) &&
    data.surname.length > 1
  ) {
    errors.surname = "Success";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!email.test(data.email)) {
    errors.email = "Email should be in a specific format";
  }
  if (data.email && email.test(data.email)) {
    errors.email = "Success";
  }

  if (!data.phone_number) {
    errors.phone_number = "Phone_number is required";
  } else if (!phone.test(data.phone_number)) {
    errors.phone_number = "Phone_number should be in a specific format";
  }
  if (data.phone_number && phone.test(data.phone_number)) {
    errors.phone_number = "Success";
  }

  if (!image) {
    errors.image = "Image upload is neccessary";
  }
  if (image) {
    errors.image = "Success";
  }

  return errors;
};

export default privateValidation;
