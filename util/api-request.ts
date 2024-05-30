import axios from "axios";
// const API="https://maeei.vercel.app"
const API="http://localhost:3000"
export async function apiGetALL() {
  const response = await axios(`${API}/api/list`);
  return response.data;
}

export async function apiGetById(id:string) {
  const response = await axios( `${API}/api/doctor-register/${id}`);
  return response.data;
}


export async function apiCreatePerson(body: any) {
  const response = await axios.post(
    `${API}/api/doctor-register`,
    body
  );

  return response;
}

export async function apiUpdatePerson(body: any) {
  const response = await axios.put(
    `${API}/api/doctor-register`,
    body
  );

  return response;
}

export async function deleteALLItem() {
  const response = await axios.delete(`${API}/api/list`);
  return response.data;
}


export async function deleteItem(id?:string) {
  const response = await axios.delete(`${API}/api/list/${id}`);
  return response.data;
}