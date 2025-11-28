import PostPage from "@/components/post";
import { TPost } from "@/lib/types";
import axios, { AxiosError } from "axios";
import React from "react";

interface PageProps {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params, searchParams }: PageProps) => {
  let error: string = "";
  let posts: TPost[] = [];

  let page: string = "1";
  let search: string = "";
  try {
    const baseUrl = process.env.API_URL;

    // Await both params and searchParams
    const routeParams = await params;
    const queryParams = await searchParams;

    page = routeParams.page || "1";
    search = (queryParams.search as string) || "";

    const { data: result } = await axios.get(
      `${baseUrl}/api/posts?page=${page}&search=${search}`
    );
    posts = result.data;
    error = "";
  } catch (err) {
    if (err instanceof AxiosError) {
      error = err.response?.data.message || "Error is coming from PublicAPI";
    } else if (err instanceof Error) {
      error = err.message || "Error is coming from PublicAPI";
    } else {
      error = "Error loading posts";
    }
    posts = [];
  }

  return (
    <PostPage
      posts={posts}
      error={error}
      page={parseInt(page)}
      search={search}
    />
  );
};

export default Page;
