import axios from "axios";
const API="https://maeei.vercel.app"
// const API="http://localhost:3000"
export async function apiGetALL() {
  const response = await axios(`${API}/api/list`);
  return response.data;
}

export async function apiCreatePerson(body: any) {
  const response = await axios.post(
    `${API}/api/doctor-register`,
    body
  );

  return response;
}

export async function deleteItem() {
  const response = await axios.delete(`${API}/api/list`);
  return response.data;
}