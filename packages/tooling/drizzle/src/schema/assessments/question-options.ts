import {
  boolean,
  pgTable,
  text,
  uuid,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";
import { questionsTable } from "./questions.ts";
import { relations } from "drizzle-orm";

const questionsOptionsType = ["multiple_choice", "true_false"] as const;
export const formatEnum = pgEnum("format_enum", questionsOptionsType);

export const questionOptionsTable = pgTable("question_options", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  text: text("text"),
  questionId: uuid("question_id")
    .notNull()
    .references(() => questionsTable.id),
  isCorrect: boolean("is_correct").notNull(),
  type: formatEnum("type").notNull(),
  score: integer("score").default(1),
});

export const questionOptionsRelationships = relations(
  questionOptionsTable,
  ({ one }) => ({
    question: one(questionsTable, {
      fields: [questionOptionsTable.questionId],
      references: [questionsTable.id],
    }),
  }),
);
