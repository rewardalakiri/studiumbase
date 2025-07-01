import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { assessmentsTable } from "../assessments/assessments.ts";
import { questionsTable } from "../assessments/questions.ts";
import { relations } from "drizzle-orm";

export const assessmentsToQuestionsTable = pgTable(
  "assessments_to_questions",
  {
    assessmentId: uuid("assessments_id")
      .notNull()
      .references(() => assessmentsTable.id),
    questionId: uuid("questions_id")
      .notNull()
      .references(() => questionsTable.id),
  },
  (t) => [primaryKey({ columns: [t.assessmentId, t.questionId] })],
);

export const assessmentsToQuestionsRelationships = relations(
  assessmentsToQuestionsTable,
  ({ one }) => ({
    assessment: one(assessmentsTable, {
      fields: [assessmentsToQuestionsTable.assessmentId],
      references: [assessmentsTable.id],
    }),
    question: one(questionsTable, {
      fields: [assessmentsToQuestionsTable.questionId],
      references: [questionsTable.id],
    }),
  }),
);
