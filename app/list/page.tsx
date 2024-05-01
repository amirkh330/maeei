'use client'
import { apiGetALL } from "@/api-request";
import React, { useEffect } from "react";

export default async function  page() {
  const x =  await apiGetALL();
  await x.json()

  return "amir";
}
