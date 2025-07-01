import {
  integer,
  jsonb,
  pgEnum,
  pgTable,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { accountsTable } from "../accounts/accounts.ts";
import { assessmentsTable } from "./assessments.ts";
import { relations } from "drizzle-orm";

export const submissionStatus = ["PASSED", "FAILED", "NOT SET"] as const;
export const submissionsStatusEnum = pgEnum(
  "submission_status",
  submissionStatus,
);

export const submissionsTable = pgTable("submissions", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => accountsTable.id),
  assessmentId: uuid("assessment_id")
    .notNull()
    .references(() => assessmentsTable.id),
  submission: jsonb("submission").notNull(),
  status: submissionsStatusEnum("status").notNull().default("NOT SET"),
  grade: integer("grade"),
  metadata: jsonb("metadata"),
  created_at: timestamp("created_at", { withTimezone: true }),
});

export const submissionsRelations = relations(submissionsTable, ({ one }) => ({
  account: one(accountsTable, {
    fields: [submissionsTable.userId],
    references: [accountsTable.id],
  }),
}));
