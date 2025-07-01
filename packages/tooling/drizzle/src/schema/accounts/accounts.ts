import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { assessmentsTable } from "../assessments/assessments.ts";
import { submissionsTable } from "../assessments/submissions.ts";
import { feedbackTable } from "../assessments/feedback.ts";

export const accountsTable = pgTable("accounts", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: text("name"),
  email: text("email").unique().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});

export const accountRelations = relations(accountsTable, ({ many }) => ({
  assessments: many(assessmentsTable),
  submissions: many(submissionsTable),
  feedback: many(feedbackTable),
}));
