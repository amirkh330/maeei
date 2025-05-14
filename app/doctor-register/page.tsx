/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Spinner
} from "@chakra-ui/react";
import { Suspense } from "react";
import { FormRender } from "./components/FormRender";

export default function page() {
  return <Suspense fallback={<Spinner/>}><FormRender/></Suspense>
}
