import { defineType } from "sanity";

export const tag = defineType({
    name: "tag",
    title: "Tag",
    type: "document",

    fields: [
        {
            name: "name",
            title: "tag Name",
            type: "string"
        }, 
        {
            name: "slug",
            title: "Slug",
            type:"slug",
            options: {
                source: "name",
            }
        }
    ]
})