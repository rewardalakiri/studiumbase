import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { assessmentsTable } from "../assessments/assessments.ts";
import { questionsTable } from "../assessments/questions.ts";
import { relations } from "drizzle-orm";
import { passagesTable } from "../assessments/pasages.ts";

export const assessmentsToPassagesTable = pgTable(
  "assessments_to_passages",
  {
    assessmentId: uuid("assessments_id")
      .notNull()
      .references(() => assessmentsTable.id),
    passageId: uuid("passage_id")
      .notNull()
      .references(() => passagesTable.id),
  },
  (t) => [primaryKey({ columns: [t.assessmentId, t.passageId] })],
);

export const assessmentsToPassagesRelationships = relations(
  assessmentsToPassagesTable,
  ({ one }) => ({
    assessment: one(assessmentsTable, {
      fields: [assessmentsToPassagesTable.assessmentId],
      references: [assessmentsTable.id],
    }),
    passage: one(passagesTable, {
      fields: [assessmentsToPassagesTable.passageId],
      references: [passagesTable.id],
    }),
  }),
);
