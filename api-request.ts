import axios from "axios";

export async function apiGetALL() {
  const response = await axios("http://localhost:3000/api/list");
  return response.data;
}

export async function apiCreatePerson(body: any) {
  const response = await fetch(`http://localhost:3000/api/doctor-register`, {
    method: "POST",
    body,
  });

  return response;
}
