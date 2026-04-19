import type { Collection } from "tinacms";

export const CareerCollection: Collection = {
  name: "career",
  label: "Career",
  path: "src/data",
  match: { include: "career" },
  format: "json",
  ui: { global: true },
  fields: [
    {
      name: "items",
      label: "Career Items",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.role && item?.company ? `${item.role} @ ${item.company}` : "Career Item",
        }),
      },
      fields: [
        { name: "company", label: "Company / Institution", type: "string" },
        { name: "role", label: "Role / Title", type: "string" },
        { name: "period", label: "Period (e.g. Jan 2023 - Present)", type: "string" },
        { name: "type", label: "Type (e.g. Full time job)", type: "string" },
        {
          name: "description",
          label: "Description",
          type: "string",
          ui: { component: "textarea" },
        },
        { name: "skills", label: "Skills", type: "string", list: true },
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
