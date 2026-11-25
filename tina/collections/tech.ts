import type { Collection } from "tinacms";

export const TechCollection: Collection = {
  name: "tech",
  label: "Tech Stack",
  path: "src/data",
  match: { include: "tech" },
  format: "json",
  ui: { global: true },
  fields: [
    {
      name: "categories",
      label: "Categories",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title ?? "Category" }),
      },
      fields: [
        { name: "title", label: "Category Title", type: "string" },
        {
          name: "skills",
          label: "Skills",
          type: "object",
          list: true,
          ui: {
            itemProps: (item) => ({ label: item?.name ?? "Skill" }),
          },
          fields: [
            { name: "name", label: "Name", type: "string" },
            { name: "level", label: "Level (1=Beginner, 2=Proficient, 3=Expert)", type: "number" },
            { name: "icon", label: "Icon (e.g. skill-icons:flutter-dark)", type: "string" },
          ],
        },
      ],
    },
  ],
};
