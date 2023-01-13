import Head from "next/head";
import styled from "@emotion/styled";
import { useEffect } from "react";
import new1 from "../new";

export default function Home() {
  useEffect(() => {
    new1();
  }, []);
  return <></>;
}
