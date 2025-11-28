import PostPage from "@/components/post";
import { TPost } from "@/lib/types";
import axios, { AxiosError } from "axios";
import React, { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
const Page = async ({ searchParams }: PageProps) => {
  let error: string = "";
  let posts: TPost[] = [];
  let search: string = "";

  try {
    const baseUrl = process.env.API_URL;
    // const searchParams = searchParams;
    const params = await searchParams;
    search = params["search"] || "";

    const { data: result } = await axios.get(
      `${baseUrl}/api/posts?page=1&search=${search}`
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
    <Suspense fallback={<p>Loading post</p>}>
      <PostPage posts={posts} error={error} search={search} page={1} />
    </Suspense>
  );
};

export default Page;
