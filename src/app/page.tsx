import { redirect } from "next/navigation.js";

export default function Home() {
  redirect("/shop");
  return null;
}
