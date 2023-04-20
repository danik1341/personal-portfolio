import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import project from "./sanity/schemas/project-schema";


// Sanity sever configuration
const config = defineConfig({
    projectId: 'hh6ywlyw',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-20-04',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: [project] }
})

export default config;