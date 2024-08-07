import { type ReactElement } from "react";
import { GoalsSection, MainHero } from "../components/sections";

export default async function DashboardPage(): Promise<ReactElement> {
  return (
    <>
    <MainHero/>
    <GoalsSection/>    
    </>
  );
}
