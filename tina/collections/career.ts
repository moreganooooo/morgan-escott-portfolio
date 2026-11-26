import type { Collection } from "tinacms";

const careerFields = [
  { name: "company", label: "Company / Institution", type: "string" },
  { name: "role", label: "Role / Title", type: "string" },
  { name: "period", label: "Period", type: "string" },
  { name: "type", label: "Location / Type", type: "string" },
  { name: "description", label: "Description", type: "string", ui: { component: "textarea" } },
  { name: "skills", label: "Skills", type: "string", list: true },
  {
    name: "roles", label: "Relevant Categories", type: "string", list: true,
    options: [
      { value: "all", label: "All / General" },
      { value: "sales-ops", label: "Sales Operations & CRM" },
      { value: "marketing", label: "Marketing & Copywriting" },
      { value: "creative", label: "Branding & Creative" },
      { value: "admin", label: "Executive & Admin Support" }
    ]
  }
] as const;

const educationFields = [
  { name: "credential", label: "Credential", type: "string" },
  { name: "institution", label: "Institution", type: "string" },
  { name: "details", label: "Details", type: "string", ui: { component: "textarea" } }
] as const;

export const CareerCollection: Collection = {
  name: "career",
  label: "Career & Education",
  path: "src/data",
  match: { include: "career" },
  format: "json",
  ui: { global: true },
  fields: [
    {
      name: "items", label: "Career Items", type: "object", list: true,
      ui: { itemProps: (item) => ({ label: item?.role && item?.company ? `${item.role} @ ${item.company}` : "Career Item" }) },
      fields: [...careerFields]
    },
    {
      name: "education", label: "Education", type: "object", list: true,
      fields: [...educationFields]
    },
    { name: "development", label: "Certifications & Development", type: "string", list: true }
  ]
};
