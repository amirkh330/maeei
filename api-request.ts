import axios from "axios";

export async function apiGetALL() {
  const response = await axios("http://localhost:3000/api/list");
  return response.data;
}

export async function apiCreatePerson(body: any) {
  const response = await axios.post(
    `http://localhost:3000/api/doctor-register`,
    body
  );

  return response;
}

export async function deleteItem() {
  const response = await axios.delete("http://localhost:3000/api/list");
  return response.data;
}