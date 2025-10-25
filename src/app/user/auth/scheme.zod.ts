import z from "@zod";

const errorMessage = {
  noType: "Incorrect data type",
  notEmpty: "The value must not be empty.",
  email: "Invalid email value",
};

export const schemaEmail = z
  .string({ error: errorMessage.noType })
  .refine((val) => val.length > 0, {
    error: errorMessage.notEmpty,
  })
  .email({ error: errorMessage.email }); // Zod recognized this approach as outdated, but for now we will leave it as it is.

export type TypeSchemaEmail = z.infer<typeof schemaEmail>;

export const schemaRegistration = z.object({});
