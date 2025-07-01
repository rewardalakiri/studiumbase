CREATE TYPE "public"."feedback_type" AS ENUM('SUBMISSION', 'ASSESSMENT', 'QUESTION', 'APPLICATION');--> statement-breakpoint
CREATE TYPE "public"."format_enum" AS ENUM('multiple_choice', 'true_false');--> statement-breakpoint
CREATE TYPE "public"."questions_type" AS ENUM('multiple_choice', 'true_false');--> statement-breakpoint
CREATE TYPE "public"."submission_status" AS ENUM('PASSED', 'FAILED', 'NOT SET');--> statement-breakpoint
CREATE TABLE "assessments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"assessments" text NOT NULL,
	"description" text,
	"creator_id" uuid NOT NULL,
	"key" varchar(8),
	"published" boolean NOT NULL,
	"settings" jsonb NOT NULL,
	"public" boolean NOT NULL,
	"media" jsonb,
	"number_of_questions" integer,
	"instructions" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "feedback" (
	"id" uuid,
	"type" "feedback_type" DEFAULT 'APPLICATION' NOT NULL,
	"content" text NOT NULL,
	"metadata" jsonb
);
--> statement-breakpoint
CREATE TABLE "passages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "question_options" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"text" text,
	"question_id" uuid NOT NULL,
	"is_correct" boolean NOT NULL,
	"type" "format_enum" NOT NULL,
	"score" integer DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"type" "questions_type" NOT NULL,
	"mark" integer,
	"prompt" text NOT NULL,
	"hint" text,
	"explanation" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"assessment_id" uuid NOT NULL,
	"submission" jsonb NOT NULL,
	"status" "submission_status" DEFAULT 'NOT SET' NOT NULL,
	"grade" integer,
	"metadata" jsonb,
	"created_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	CONSTRAINT "accounts_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "assessments_to_passages" (
	"assessments_id" uuid NOT NULL,
	"passage_id" uuid NOT NULL,
	CONSTRAINT "assessments_to_passages_assessments_id_passage_id_pk" PRIMARY KEY("assessments_id","passage_id")
);
--> statement-breakpoint
CREATE TABLE "assessments_to_questions" (
	"assessments_id" uuid NOT NULL,
	"questions_id" uuid NOT NULL,
	CONSTRAINT "assessments_to_questions_assessments_id_questions_id_pk" PRIMARY KEY("assessments_id","questions_id")
);
--> statement-breakpoint
CREATE TABLE "passage_to_questions" (
	"passage_id" uuid NOT NULL,
	"question_id" uuid NOT NULL,
	CONSTRAINT "passage_to_questions_passage_id_question_id_pk" PRIMARY KEY("passage_id","question_id")
);
--> statement-breakpoint
ALTER TABLE "assessments" ADD CONSTRAINT "assessments_creator_id_accounts_id_fk" FOREIGN KEY ("creator_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_id_accounts_id_fk" FOREIGN KEY ("id") REFERENCES "public"."accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "question_options" ADD CONSTRAINT "question_options_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_user_id_accounts_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."accounts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_assessment_id_assessments_id_fk" FOREIGN KEY ("assessment_id") REFERENCES "public"."assessments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessments_to_passages" ADD CONSTRAINT "assessments_to_passages_assessments_id_assessments_id_fk" FOREIGN KEY ("assessments_id") REFERENCES "public"."assessments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessments_to_passages" ADD CONSTRAINT "assessments_to_passages_passage_id_passages_id_fk" FOREIGN KEY ("passage_id") REFERENCES "public"."passages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessments_to_questions" ADD CONSTRAINT "assessments_to_questions_assessments_id_assessments_id_fk" FOREIGN KEY ("assessments_id") REFERENCES "public"."assessments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assessments_to_questions" ADD CONSTRAINT "assessments_to_questions_questions_id_questions_id_fk" FOREIGN KEY ("questions_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "passage_to_questions" ADD CONSTRAINT "passage_to_questions_passage_id_passages_id_fk" FOREIGN KEY ("passage_id") REFERENCES "public"."passages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "passage_to_questions" ADD CONSTRAINT "passage_to_questions_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;