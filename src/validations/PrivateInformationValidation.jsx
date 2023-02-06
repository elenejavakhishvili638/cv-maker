const privateValidation = (data, image) => {
  const errors = {};
  const gerorgianCharacters = /^[ა-ჰ]+$/;
  const email = /.*\@redberry.ge$/;
  const phone = /^\+\995\d{9}?/;

  if (!data.name) {
    errors.name = "შეავსეთ ველი";
  } else if (!gerorgianCharacters.test(data.name)) {
    errors.name = "შეავსეთ ველი ქართულად";
  } else if (data.name.length <= 1) {
    errors.name = "ჩაწერეთ მინიმუმ 2 სიმბოლო";
  } else {
    errors.name = "Success";
  }
  // if (
  //   data.name &&
  //   gerorgianCharacters.test(data.name) &&
  //   data.name.length > 1
  // ) {
  //   errors.name = "Success";
  // }

  if (!data.surname) {
    errors.surname = "შეავსეთ ველი";
  } else if (!gerorgianCharacters.test(data.surname)) {
    errors.surname = "შეავსეთ ველი ქართულად";
  } else if (data.surname.length <= 1) {
    errors.surname = "ჩაწერეთ მინიმუმ 2 სიმბოლო";
  } else {
    errors.surname = "Success";
  }
  // if (
  //   data.surname &&
  //   gerorgianCharacters.test(data.surname) &&
  //   data.surname.length > 1
  // )

  if (!data.email) {
    errors.email = "შეავსეთ ველი";
  } else if (!email.test(data.email)) {
    errors.email = "ელ.პოსტა უნდა მთავრდებოდეს @redberry.ge-თი";
  } else {
    errors.email = "Success";
  }
  // if (data.email && email.test(data.email)) {
  //   errors.email = "Success";
  // }

  if (!data.phone_number) {
    errors.phone_number = "შეავსეთ ველი";
  } else if (!phone.test(data.phone_number)) {
    errors.phone_number =
      "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს";
  } else {
    errors.phone_number = "Success";
  }
  // if (data.phone_number && phone.test(data.phone_number)) {
  //   errors.phone_number = "Success";
  // }

  if (!image) {
    errors.image = "Image upload is neccessary";
  }
  if (image) {
    errors.image = "Success";
  }

  return errors;
};

export default privateValidation;
