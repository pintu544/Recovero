import axios from "axios";
const api_url = "https://recovero-task-7san5pt43-pintu870.vercel.app/allUsers";


export const signup = async (signUpData) => {
  console.log(signUpData);
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/signup`,
      data: signUpData
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const signin = async (signInData) => {
  console.log(signInData);
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/signin`,
      data: signInData
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};


export const deleteUser = async (id) => {
  console.log(id);
  try {
    const responce = await axios({
      method: "DELETE",
      url: `${api_url}/deleteUser/${id}`
    })
    return responce
  } catch (error) {
    console.log(error);
    return error;
  }
}

