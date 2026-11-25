import type { Collection } from "tinacms";

export const HomeCollection: Collection = {
  name: "home",
  label: "Home / Profile",
  path: "src/data",
  match: { include: "home" },
  format: "json",
  ui: { global: true },
  fields: [
    { name: "name", label: "Name", type: "string" },
    { name: "photoUrl", label: "Photo URL", type: "string" },
    {
      name: "intro",
      label: "Intro (plain text)",
      type: "string",
      ui: { component: "textarea" },
    },
    {
      name: "introHtml",
      label: "Intro (with HTML highlights)",
      type: "string",
      ui: { component: "textarea" },
    },
    { name: "webpageTitle", label: "Webpage / Browser Tab Title", type: "string" },
    { name: "resumeUrl", label: "Resume PDF URL", type: "string" },
    {
      name: "socials",
      label: "Social Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.name ?? "Social Link" }),
      },
      fields: [
        { name: "name", label: "Name", type: "string" },
        { name: "url", label: "URL", type: "string" },
        { name: "icon", label: "Icon (e.g. mdi:github)", type: "string" },
      ],
    },
  ],
};
