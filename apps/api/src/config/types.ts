import { z } from "zod";
import { environmentSchema } from "./schema";

export type EnvironmentType = z.infer<typeof environmentSchema>;
