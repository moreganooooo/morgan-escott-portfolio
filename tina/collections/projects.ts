import type { Collection } from "tinacms";

export const ProjectsCollection: Collection = {
  name: "projects",
  label: "Projects",
  path: "src/data",
  match: { include: "projects" },
  format: "json",
  ui: { global: true },
  fields: [
    {
      name: "items",
      label: "Projects",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title ?? "Project" }),
      },
      fields: [
        { name: "title", label: "Title", type: "string" },
        {
          name: "description",
          label: "Description",
          type: "string",
          ui: { component: "textarea" },
        },
        { name: "images", label: "Images (filenames or URLs)", type: "string", list: true },
        { name: "tech", label: "Tech Stack", type: "string", list: true },
        { name: "platforms", label: "Platforms (e.g. web, apple-ios, android)", type: "string", list: true },
        { name: "link", label: "Project Link", type: "string" },
        { name: "category", label: "Category", type: "string" },
        {
          name: "roles",
          label: "Relevant Categories",
          type: "string",
          list: true,
          options: [
            { value: "all",       label: "All / General" },
            { value: "sales-ops", label: "Sales Operations & CRM" },
            { value: "marketing", label: "Marketing & Copywriting" },
            { value: "creative",  label: "Branding & Creative" },
            { value: "admin",     label: "Executive & Admin Support" },
          ],
        },
      ],
    },
  ],
};
