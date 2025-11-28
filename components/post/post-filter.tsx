"use client";
import { useDebounce } from "@/hooks/use-debounce";
import { TPost } from "@/lib/types";
import { cn } from "@/lib/utils";
import axios from "axios";
import { SlidersHorizontalIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
  searchQuery: string;
  selectedTags: string[];
  setUpdatedPosts: (post: TPost[]) => void;
  setSelectedTags: (tags: string[]) => void;
  setSearchQuery: (query: string) => void;
  page: number;
}
const PostFilter = ({
  setUpdatedPosts,
  searchQuery,
  setSearchQuery,
  page,
}: Props) => {
  const debouncedQuery = useDebounce(`${searchQuery}`, 500);
  const searchParams = useSearchParams();

  const AVAILABLE_TAGS = ["id", "title", "description", "views"];

  const fetchNewPosts = useCallback(async () => {
    const params = new URLSearchParams(searchParams);
    console.log("here : ", { page, debouncedQuery });
    const { data: result } = await axios.get(
      `/api/posts?page=${page}&search=${debouncedQuery}`
    );
    if (debouncedQuery) {
      params.set("search", debouncedQuery);

      setUpdatedPosts(result.data);
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
  }, [debouncedQuery]);

  useEffect(() => {
    fetchNewPosts();
  }, [fetchNewPosts, debouncedQuery]);

  return (
    <div className="flex items-center justify-between gap-8 w-full mb-8 border-b pb-2 border-description">
      <h1 className="text-primary text-3xl font-bold ">Posts</h1>
      <input
        className="bg-white p-2 px-4 rounded-2xl outline-2 focus:outline-primary text-background w-full max-w-84"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Search posts by title..."
      />
    </div>
  );
};

export default PostFilter;
