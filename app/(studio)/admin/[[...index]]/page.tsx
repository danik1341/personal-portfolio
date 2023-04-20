"use client";

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

// Admin Page /w Sanity config -- Server side rendering
const AdminPage = () => {
  return <NextStudio config={config} />;
};

export default AdminPage;
