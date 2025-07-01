import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { passagesTable } from "../assessments/pasages.ts";
import { questionsTable } from "../assessments/questions.ts";
import { relations } from "drizzle-orm";

export const passagesToQuestionsTable = pgTable(
  "passage_to_questions",
  {
    passageId: uuid("passage_id")
      .notNull()
      .references(() => passagesTable.id),
    questionId: uuid("question_id")
      .notNull()
      .references(() => questionsTable.id),
  },
  (t) => [primaryKey({ columns: [t.passageId, t.questionId] })],
);

export const passageToQuestionsRelationships = relations(
  passagesToQuestionsTable,
  ({ one }) => ({
    passage: one(passagesTable, {
      fields: [passagesToQuestionsTable.passageId],
      references: [passagesTable.id],
    }),
    question: one(questionsTable, {
      fields: [passagesToQuestionsTable.questionId],
      references: [questionsTable.id],
    }),
  }),
);
