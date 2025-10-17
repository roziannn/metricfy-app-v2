import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin";

export async function adminGetCourses() {
  await requireAdmin();

  const data = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      smallDescription: true,
      duration: true,
      level: true,
      status: true,
      price: true,
      fileKey: true,
      slug: true,
      category: true,
    },
  });

  return data;
}

// untk sbg interface nantinya dynamic sesuai yg diselect diatas
export type AdminCourseType = Awaited<ReturnType<typeof adminGetCourses>>[0];
