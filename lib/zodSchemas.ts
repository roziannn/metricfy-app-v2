import { z } from "zod";

export const courseLevel = ["Beginner", "Intermedi", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archieved"] as const;

export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "IT & Software",
  "Office Tools & ERP",
  "Marketing",
  "Project Management",
  "Health & Fitness",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters long" })
    .max(500, { message: "Description must be at most 500 characters long" }),
  fileKey: z.string().min(1, { message: "File is required" }),

  price: z.coerce.number<number>().min(1, { message: "Price must be at least 1" }),
  duration: z.coerce.number<number>().min(1, { message: "Duration must be at least 1 hour" }),

  level: z.enum(courseLevel, { message: "Invalid course level selected" }),
  category: z.enum(courseCategories, { message: "Category is required" }),
  smallDescription: z
    .string()
    .min(5, { message: "Small description must be at least 5 characters long" })
    .max(255, { message: "Small description must be at most 255 characters long" }),
  slug: z.string().min(5, { message: "Slug must be at least 5 characters long" }),
  status: z.enum(courseStatus, { message: "Invalid course status selected" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
