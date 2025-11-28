"use client";
import { useDebounce } from "@/hooks/use-debounce";
import { TPost } from "@/lib/types";
import { cn } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { SlidersHorizontalIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
  searchQuery: string;
  // selectedTags: string[];
  setUpdatedPosts: (post: TPost[]) => void;
  // setSelectedTags: (tags: string[]) => void;
  setSearchQuery: (query: string) => void;
  page: number;
  setIsLoading: (val: boolean) => void;
  setError: (val: string) => void;
  selectedTag: string;
  setSelectedTag: (val: string) => void;
}
const PostFilter = ({
  setUpdatedPosts,
  searchQuery,
  setSearchQuery,
  page,
  setIsLoading,
  setError,
  selectedTag,
  setSelectedTag,
}: Props) => {
  const debouncedQuery = useDebounce(`${searchQuery}`, 500);
  const searchParams = useSearchParams();
  const [isFilterMenuOpen, setIsOpenFilterMenuOpen] = useState<boolean>(false);

  const SORTABLE_OPTIONS = ["title", "userId", "views"];
  const fetchNewPosts = useCallback(async () => {
    const params = new URLSearchParams(searchParams);
    let error = "";

    setIsLoading(true);
    setSearchQuery(debouncedQuery);

    try {
      const { data: result } = await axios.get(
        `/api/posts?page=${page}&search=${debouncedQuery}&sortBy=${selectedTag}`
      );
      setUpdatedPosts(result.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        error = err.response?.data.message || "Error is coming from PublicAPI";
      } else if (err instanceof Error) {
        error = err.message || "Error is coming from PublicAPI";
      } else {
        error = "Error loading posts";
      }
      setUpdatedPosts([]);
    } finally {
      setError(error);
      setIsLoading(false);
      if (selectedTag) {
        params.set("sortBy", selectedTag);
      } else {
        params.delete("sortBy");
      }
      if (debouncedQuery) {
        params.set("search", debouncedQuery);
      } else {
        params.delete("search");
      }
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
  }, [debouncedQuery, selectedTag]);

  useEffect(() => {
    fetchNewPosts();
  }, [fetchNewPosts, debouncedQuery]);

  return (
    <div className="flex flex-col w-full gap-4 mb-8 border-b pb-2 border-description">
      <div className="w-full flex items-center justify-between gap-8">
        <h1 className="text-primary text-3xl font-bold ">Posts</h1>
        <span className="flex items-center justify-end gap-2 w-full">
          <input
            className="bg-white p-2 px-4 rounded-2xl outline-2 focus:outline-primary text-background w-full max-w-84"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search posts..."
          />
          <SlidersHorizontalIcon
            className="cursor-pointer"
            onClick={() => {
              setIsOpenFilterMenuOpen((prev) => !prev);
            }}
          />
        </span>
      </div>
      {isFilterMenuOpen && (
        <div>
          <div className="flex flex-wrap gap-8 items-center">
            <span className="text-sm font-semibold text-description">
              SortBy
            </span>{" "}
            {SORTABLE_OPTIONS?.map((field, idx) => (
              <span
                className={cn(
                  "btn text-xs",
                  selectedTag.split("_")[0] === field
                    ? "cta-btn"
                    : "border rounded-3xl"
                )}
                onClick={() => {
                  const tag =
                    selectedTag.split("_")[0] === field
                      ? ""
                      : field + "_" + "asc";

                  setSelectedTag(tag);
                }}
                key={field}
              >
                {field}
              </span>
            ))}
          </div>
          {selectedTag && (
            <span className="flex items-center gap-2 justify-end my-4">
              <button
                className={cn(
                  "btn text-xs",
                  selectedTag.split("_")[1] == "asc"
                    ? "cta-btn"
                    : "border rounded-3xl text-primary font-semibold"
                )}
                onClick={() => {
                  if (selectedTag.endsWith("_asc")) {
                    return;
                  }
                  setSelectedTag(selectedTag.split("_")[0] + "_asc");
                }}
              >
                Asc
              </button>
              <button
                className={cn(
                  "btn text-xs",
                  selectedTag.split("_")[1] == "desc"
                    ? "cta-btn"
                    : "border rounded-3xl text-primary font-semibold"
                )}
                onClick={() => {
                  if (selectedTag.endsWith("_desc")) {
                    return;
                  }
                  setSelectedTag(selectedTag.split("_")[0] + "_desc");
                }}
              >
                Desc
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostFilter;
