import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas";


// Sanity sever configuration
const config = defineConfig({
    projectId: 'hh6ywlyw',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-04-20',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;