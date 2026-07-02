import { validatedEnvironment } from "./schema";
import { EnvironmentType } from "./types";

export const ENVIRONMENT: EnvironmentType = Object.freeze(validatedEnvironment);
