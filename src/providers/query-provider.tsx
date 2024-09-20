"use client";

import { getQueryClient } from "@/service/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

function QueryProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
