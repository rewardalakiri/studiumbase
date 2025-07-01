import {
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { accountsTable } from "../accounts/accounts.ts";
import { relations } from "drizzle-orm";
import { assessmentsToQuestionsTable } from "../joins/assessments-to-questions.ts";
import { assessmentsToPassagesTable } from "../joins/assessments-to-passages.ts";

export const assessmentsTable = pgTable("assessments", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: text("assessments").notNull(),
  description: text("description"),
  creatorId: uuid("creator_id")
    .notNull()
    .references(() => accountsTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  key: varchar("key", { length: 8 }),
  published: boolean("published").notNull(),
  settings: jsonb("settings").notNull(),
  isPublic: boolean("public").notNull(),
  media: jsonb("media"),
  numberOfQuestions: integer("number_of_questions"),
  instructions: text("instructions"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});

export const assessmentsRelations = relations(
  assessmentsTable,
  ({ one, many }) => ({
    account: one(accountsTable, {
      fields: [assessmentsTable.creatorId],
      references: [accountsTable.id],
    }),
    assessmentsToQuestions: many(assessmentsToQuestionsTable),
    assessmentsToPassages: many(assessmentsToPassagesTable),
  }),
);
