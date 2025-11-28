import PostPage from "@/components/post";
import { TPost } from "@/lib/types";
import axios, { AxiosError } from "axios";
import React from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
const Page = async ({ searchParams }: PageProps) => {
  let error: string = "";
  let posts: TPost[] = [];
  let search: string = "";
  try {
    const baseUrl = process.env.API_URL ;
    // const searchParams = searchParams;
    const params = await searchParams;
    search = params["search"] || "";

    const { data: result } = await axios.get(
      `${baseUrl}/api/posts?page=1&search=${search}`
    );
    posts = result.data;
    error = "";
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error) {
      error = error.message || "Error is coming from PublicAPI";
    } else {
      error = "Error loading posts";
    }
    posts = [];
  }

  return <PostPage posts={posts} error={error} search={search} page={1} />;
};

export default Page;
