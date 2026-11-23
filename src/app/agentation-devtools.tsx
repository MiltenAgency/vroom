"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Agentation = dynamic(
  () => import("agentation").then(({ Agentation }) => Agentation),
  { ssr: false }
);

export function AgentationDevtools() {
  const [mounted, setMounted] = useState(false);
  const [isOg, setIsOg] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.location.search.includes("og=true")) {
      setIsOg(true);
    }
  }, []);

  if (process.env.NODE_ENV !== "development") return null;
  if (!mounted || isOg) return null;

  return <Agentation appName="Vroom" />;
}
