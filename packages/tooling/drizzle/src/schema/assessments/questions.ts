import {
  pgEnum,
  pgTable,
  text,
  uuid,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { assessmentsToQuestionsTable } from "../joins/assessments-to-questions.ts";
import { passagesToQuestionsTable } from "../joins/passages-to-questions.ts";
import { questionOptionsTable } from "./question-options.ts";

export const questionsType = ["multiple_choice", "true_false"] as const;
export const questionsTypeEnum = pgEnum("questions_type", questionsType);

export const questionsTable = pgTable("questions", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  type: questionsTypeEnum("type").notNull(),
  mark: integer("mark"),
  prompt: text("prompt").notNull(),
  hint: text("hint"),
  explanation: text("explanation"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const questionsRelationships = relations(questionsTable, ({ many }) => ({
  assessmentToQuestion: many(assessmentsToQuestionsTable),
  passageToQuestions: many(passagesToQuestionsTable),
  options: many(questionOptionsTable),
}));
