"use client";

import dynamic from "next/dynamic";

const Agentation = dynamic(
  () => import("agentation").then(({ Agentation }) => Agentation),
  { ssr: false }
);

export function AgentationDevtools() {
  if (process.env.NODE_ENV !== "development") return null;

  return <Agentation appName="Vroom" />;
}
