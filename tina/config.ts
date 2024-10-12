import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "login",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "content",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            required: false,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "math",
            label: "Math mode",
            required: false,
          },
          {
            type: "string",
            name: "authors",
            label: "Authors",
            list: true,
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
          {
            type: "object",
            name: "image",
            label: "Image Properties",
            fields: [
              {
                type: "string",
                name: "filename",
                label: "Featured image filename",
                required: false,
              },
              {
                type: "rich-text",
                name: "caption",
                label: "Caption for featured image"
              }
            ],
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: false,
          },
        ],
      },

      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      }
    ],
  },
});
