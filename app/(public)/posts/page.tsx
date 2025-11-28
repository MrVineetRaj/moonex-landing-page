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
    <Suspense
      fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {Array.from({ length: 12 }).map((_, idx) => {
            return (
              <span
                className="min-h-64 w-full bg-description/50 animate-pulse col-span-1 rounded-md"
                key={idx}
              ></span>
            );
          })}
        </div>
      }
    >
      <PostPage posts={posts} error={error} search={search} page={1} />
    </Suspense>
  );
};

export default Page;
