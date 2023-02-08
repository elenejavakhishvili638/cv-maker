const educationValidation = (data) => {
  let error = {};
  if (!data.institute) {
    error.institute = "შეავსეთ ველი";
  } else if (data.institute.length <= 1) {
    error.institute = "ჩაწერეთ მინიმუმ 2 სიმბოლო";
  } else {
    error.institute = "Success";
  }

  if (!data.degree_id) {
    error.degree_id = "შეავსეთ ველი";
  } else {
    error.degree_id = "Success";
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

export default educationValidation;
