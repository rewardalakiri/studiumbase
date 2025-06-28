import { createTRPCContext } from "@trpc/tanstack-react-query";
import { AppRouter } from "@/backend/trpc";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();
