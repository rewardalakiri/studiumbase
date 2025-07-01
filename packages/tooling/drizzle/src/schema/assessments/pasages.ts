import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { passagesToQuestionsTable } from "../joins/passages-to-questions.ts";
import { assessmentsToPassagesTable } from "../joins/assessments-to-passages.ts";

export const passagesTable = pgTable("passages", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  content: text("content").notNull(),
});

export const passageRelationships = relations(passagesTable, ({ many }) => ({
  passageToQuestions: many(passagesToQuestionsTable),
  assessmentsToPassages: many(assessmentsToPassagesTable),
}));
