import "dotenv/config";
import { z } from "zod";

export const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().int().positive().default(3002),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
});

const parsed = environmentSchema.safeParse(process.env);

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("\n");
  throw new Error(`Invalid environment variables:\n${issues}`);
}

// `parsed` is narrowed to the success branch here, so `data` is no longer
// `undefined`. Export the narrowed value — its concrete type is what crosses
// the module boundary (the control-flow narrowing itself would not).
export const validatedEnvironment = parsed.data;
