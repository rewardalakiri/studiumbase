import { jsonb, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { submissionsTable } from "./submissions.ts";
import { relations } from "drizzle-orm";
import { accountsTable } from "../accounts/accounts.ts";
import { assessmentsTable } from "./assessments.ts";

export const feedbackType = [
  "SUBMISSION",
  "ASSESSMENT",
  "QUESTION",
  "APPLICATION",
] as const;
export const feedbackTypeEnum = pgEnum("feedback_type", feedbackType);

export const feedbackTable = pgTable("feedback", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: uuid("id").references(() => accountsTable.id),
  type: feedbackTypeEnum("type").notNull().default("APPLICATION"),
  content: text("content").notNull(),
  metadata: jsonb("metadata"),
});

export const feedbackRelations = relations(feedbackTable, ({ one }) => ({
  account: one(accountsTable, {
    fields: [feedbackTable.userId],
    references: [accountsTable.id],
  }),
}));
