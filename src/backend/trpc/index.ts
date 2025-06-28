import { router } from "@/backend/trpc/router";

export const appRouter = router({
  // ...
});

export type AppRouter = typeof appRouter;
