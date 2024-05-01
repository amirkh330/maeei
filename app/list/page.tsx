import { apiGetALL } from "@/api-request";
import React from "react";

export default function page() {
  const x = apiGetALL().then((e) => e);
  console.log("====================================");
  console.log(x);
  console.log("====================================");
  return "amir";
}
