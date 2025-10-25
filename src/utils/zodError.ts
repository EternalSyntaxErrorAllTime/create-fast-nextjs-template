import type { $ZodIssueBase } from "zod/v4/core";

type TypeerrorTextZod = {
  textError: string;
  mapError: Record<string, string[]>;
};

/**
 * textZodErrorObj — transforms a Zod validation error into readable text and a structured map.
 *
 * Features:
 * - Converts all Zod issue messages into a single joined text string (`textError`)
 * - Builds a map (`mapError`) where each key is a field path and value is an array of messages
 *
 * @example
 *  const parse = schema.safeParse(data);
 *  if (parse.error)  {
 *    const { textError, mapError } = textZodErrorObj(parse.error);
 *  }
 *
 * @param {{ issues: $ZodIssueBase[] }} error - Zod error object containing validation issues.
 *
 * @returns {{ textError: string; mapError: Record<string, string[]> }}
 * Returns a formatted error summary:
 * - `textError`: concatenated messages separated by newlines
 * - `mapError`: key-value pairs of field paths and their corresponding error messages
 */
const textZodErrorObj = (error: {
  issues: $ZodIssueBase[];
}): TypeerrorTextZod => {
  const textError = error.issues.map((issue) => issue.message).join("\n");

  const mapError: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "_root";
    if (!mapError[key]) {
      mapError[key] = [];
    }
    mapError[key].push(issue.message);
  }

  return { textError, mapError };
};

export default textZodErrorObj;
