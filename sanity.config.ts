import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';


// Sanity sever configuration
const config = defineConfig({
    projectId: 'hh6ywlyw',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-20-04',
    basePath: '/admin',
    plugins: [deskTool()]
})

export default config;