const experienceValidation = (data) => {
  let error = {};
  if (!data.position) {
    error.position = "Position is required";
  } else if (data.position.length <= 1) {
    error.position = "Position should be longer than 1 character";
  }

  if (!data.employer) {
    error.employer = "Employer is required";
  } else if (data.employer.length <= 1) {
    error.employer = "Employer should be longer than 1 character";
  }

  if (!data.start_date) {
    error.start_date = "Starting date is required";
  }

  if (!data.due_date) {
    error.due_date = "Due date is required";
  }

  if (!data.description) {
    error.description = "Description is required";
  }

  return error;
};

export default experienceValidation;

// const errors = [];
// const error = {};

// //   console.log(data);
// data.forEach((item, index) => {
//   console.log("item", item);
//   if (!item.position) {
//     //   error.position = `${
//     //     !item.position &&
//     //     "Position is required" | (item.position.length <= 1) &&
//     //     "Position should be longer than 1 character"
//     //   }}`;
//     error[index].postion = "Position is required";
//   } else if (item.position.length <= 1) {
//     error[index].postion = "Position should be longer than 1 character";
//   }

//   //item.position.length <= 1

//   // else {
//   //     error.position = "Success";
//   //   }

//   // if (!item.employer) {
//   //   error.employer = "Employer is required";
//   // }
//   // else if (item.employer.length <= 1) {
//   //   error.employer = "Position should be longer than 1 character";
//   // }
//   errors.push(error);
// });

// return errors;
