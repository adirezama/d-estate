import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "/blogs/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: { type: "date", description: "The date of the post", required: true },
    image: {
      type: "string",
      description: "The featured image of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
      description: "The author of the post",
      required: true,
    },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));
const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "The title of the category",
      required: true,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: "/projects/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the project",
      required: true,
    },
    image: {
      type: "string",
      description: "The featured image of the project",
      required: true,
    },
    location: {
      type: "string",
      description: "The location of the project",
      required: true,
    },
    year: {
      type: "string",
      description: "The year of the project",
      required: true,
    },
    role: {
      type: "string",
      description: "The role of the project",
      required: true,
    },
    client: {
      type: "string",
      description: "The client of the project",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
});
