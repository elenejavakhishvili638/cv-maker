const experienceValidation = (data) => {
  let error = {};
  if (!data.position) {
    error.position = "შეავსეთ ველი";
  } else if (data.position.length <= 1) {
    error.position = "ჩაწერეთ მინიმუმ 2 სიმბოლო";
  } else {
    error.position = "Success";
  }

  if (!data.employer) {
    error.employer = "შეავსეთ ველი";
  } else if (data.employer.length <= 1) {
    error.employer = "ჩაწერეთ მინიმუმ 2 სიმბოლო";
  } else {
    error.employer = "Success";
  }

  if (!data.start_date) {
    error.start_date = "შეავსეთ ველი";
  } else {
    error.start_date = "Success";
  }

  if (!data.due_date) {
    error.due_date = "შეავსეთ ველი";
  } else {
    error.due_date = "Success";
  }

  if (!data.description) {
    error.description = "შეავსეთ ველი";
  } else {
    error.description = "Success";
  }

  return error;
};

export default experienceValidation;
