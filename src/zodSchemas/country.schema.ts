import * as z from "zod";

export const countrySchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }),
  regionId: z
    .string()
    .nonempty({ message: "You must choose a region" })
});