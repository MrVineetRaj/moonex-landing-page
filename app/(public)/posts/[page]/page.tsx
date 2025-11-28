import PostPage from "@/components/post";
import { TPost } from "@/lib/types";
import axios, { AxiosError } from "axios";
import React, { Suspense } from "react";

interface PageProps {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params, searchParams }: PageProps) => {
  let error: string = "";
  let posts: TPost[] = [];

  let page: string = "1";
  let search: string = "";
  let sortBy: string = "";
  try {
    const baseUrl = process.env.API_URL;

    const routeParams = await params;
    const queryParams = await searchParams;

    page = routeParams.page || "1";
    search = (queryParams.search as string) || "";
    sortBy = (queryParams.sortBy as string) || "";

    const { data: result } = await axios.get(
      `${baseUrl}/api/posts?page=${page}&search=${search}&sortBy=${sortBy}`
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
      <PostPage
        posts={posts}
        error={error}
        page={parseInt(page)}
        search={search}
        sortBy={sortBy}
      />
    </Suspense>
  );
};

export default Page;
