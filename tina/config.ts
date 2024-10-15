import { defineConfig, wrapFieldsWithMeta } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "assets/media",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
        // User Info
        {
          label: 'User Info',
          name: 'siteSettings',
          path: 'content/authors/admin',
          format: 'md',
          fields: [
            {
              type: 'string',
              label: 'Site Title',
              name: 'title',
            },
          ],
          ui: {
            allowedActions: {
              create: false,
              delete: false,
            },
          },
        },

      // Main Pages
      {
        label: 'Main Pages',
        name: 'pages',
        path: 'content',
        format: 'md',
        match: {
          include: '*' ,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            fields: [
              {
                type: "string",
                name: "block",
                label: "Block",
                required: true,
                options: ["academics", "intro"]
              },
              {
                type: "object",
                name: "content",
                label: "Content",
                fields: [
                  {
                    type: "string",
                    name: "username",
                    label: "Username",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "design",
                label: "Design",
                fields: [
                  {
                    type: "string",
                    name: "date_format",
                    label: "Date Format",
                  },
                  {
                    type: "boolean",
                    name: "is_education_first",
                    label: "Is Education First?",
                  },
                ]
              } 
            ]
          },
        ]
      },

      // Projects
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        defaultItem: () => {
          return {
            type: 'projects',
            authors: ['admin'],
            date: () => {
              const date = new Date();
              const year = date.getFullYear();
              const month = (date.getMonth() + 1).toString().padStart(2, '0');
              const day = date.getDate().toString().padStart(2, '0');
              return `${year}-${month}-${day}`;
            },
          }
        },

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
            type: "object",
            name: "image",
            label: "Featured Image",
            required: false,
            fields: [
              {
                type: "image",
                name: "filename",
                label: "Featured Image",
                required: false,
              },
              {
                type: "rich-text",
                name: "caption",
                label: "Caption for featured image",
                parser: {
                  type: "markdown",
                  skipEscaping: "all"
                },
              }
            ],
          },
          {
            type: "string",
            name: "abstract",
            label: "Summary (Write at least 250 characters)",
            required: false,
            ui: {
              component: 'textarea',
              validate: (value) => {
                if(value?.length < 250) {
                  return 'Write atleast 250 characters';
                }
              }
            }
          },
          {
            type: "datetime",
            name: "date_start",
            label: "Start Date",
            required: true,
          },
          {
            type: "datetime",
            name: "date_end",
            label: "Ending Date",
            required: false,
          },
          {
            type: "string",
            name: "supervisor",
            label: "Supervisor",
            required: false,
          },
          {
            type: "string",
            name: "project_type",
            label: "Project Type",
            required: true
          },
          {
            type: "object",
            name: "tools",
            label: "Tools used for project",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name }
              }
            },
            fields: [
              {
                name: 'name',
                label: 'Tool Name',
                type: 'string'
              },              
              {
                name: 'pack',
                label: 'Icon Pack',
                type: 'string',
              },              
              {
                name: 'icon',
                label: 'Icon',
                type: 'string'
              },
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'gallery',
                label: 'Photo Gallery',
                match: {
                  start: '{{<',
                  end: '>}}',
                },
                fields: [
                  {
                    name: 'name',
                    label: 'Name of the Gallery to be inserted',
                    type: 'string',
                  }
                ],
              },
            ]
          },
          {
            type: "object",
            name: "galleries",
            label: "Photo Gallery for Later Use",
            description: "Insert photo galleries you want to use",
            list: true,
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                name: "name",
                label: "Gallery Name",
                type: "string",
              },
              {
                name: 'photos',
                label: 'Add photos to the Gallery',
                type: 'image',
                list: true,
              },
            ]
          },
        ],
      },

      // Research Projects
      {
        name: "research",
        label: "Research Projects",
        path: "content/research/",
        defaultItem: () => {
          return {
            type: 'projects',
            authors: ['admin'],
            date: () => {
              const date = new Date();
              const year = date.getFullYear();
              const month = (date.getMonth() + 1).toString().padStart(2, '0');
              const day = date.getDate().toString().padStart(2, '0');
              return `${year}-${month}-${day}`;
            },
          }
        },

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
            required: true,
          },
          {
            type: "object",
            name: "image",
            label: "Featured Image",
            required: false,
            fields: [
              {
                type: "image",
                name: "filename",
                label: "Featured Image",
                required: false,
              },
              {
                type: "rich-text",
                name: "caption",
                label: "Caption for featured image",
                parser: {
                  type: "markdown",
                  skipEscaping: "all"
                },
              }
            ],
          },
          {
            type: "string",
            name: "abstract",
            label: "Summary (Write at least 300 characters)",
            required: false,
            ui: {
              component: 'textarea',
              validate: (value) => {
                if(value?.length < 300) {
                  return 'Write atleast 250 characters';
                }
              }
            }
          },
          {
            type: "datetime",
            name: "date_start",
            label: "Start Date",
            required: true,
          },
          {
            type: "datetime",
            name: "date_end",
            label: "Ending Date",
            required: false,
          },
          {
            type: "string",
            name: "supervisor",
            label: "Supervisor",
            required: false,
          },
          {
            type: "string",
            name: "project_type",
            label: "Project Type",
            required: true
          },
          {
            type: "object",
            name: "tools",
            label: "Tools used for project",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name }
              }
            },
            fields: [
              {
                name: 'name',
                label: 'Tool Name',
                type: 'string'
              },              
              {
                name: 'pack',
                label: 'Icon Pack',
                type: 'string',
              },              
              {
                name: 'icon',
                label: 'Icon',
                type: 'string'
              },
            ]
          },
          {
            type: "rich-text",
            parser: {
              type: 'markdown',
              skipEscaping: 'all', // this allows {{< to go unescaped
            },
            name: "body",
            label: "Body",
            isBody: true,
            required: false,
            templates: [
              {
                name: 'gallery',
                label: 'Photo Gallery',
                match: {
                  start: '{{<',
                  end: '>}}',
                },
                fields: [
                  {
                    name: 'name',
                    label: 'Name of the Gallery to be inserted',
                    type: 'string',
                  }
                ]
              },
            ]
          },
          {
            type: "object",
            name: "galleries",
            label: "Photo Gallery for Later Use",
            description: "Insert photo galleries you want to use",
            list: true,
            ui: {
              itemProps: (item) => {
                // Field values are accessed by item?.<Field name>
                return { label: item?.name };
              },
            },
            fields: [
              {
                name: "name",
                label: "Gallery Name",
                type: "string",
              },
              {
                name: 'photos',
                label: 'Add photos to the Gallery',
                type: 'image',
                list: true,
              },
            ]
          },
        ],
      },
    ],
  },
});
