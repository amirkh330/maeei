export async function apiGetALL() {
  const response = await fetch(`http://localhost:3000/api/list`);

  return response;
}

export async function apiCreatePerson(e: any) {
  const response = await fetch(`http://localhost:3000/api/doctor-register`, {
    method: "POST",
    body: e,
  });

  return response;
}
