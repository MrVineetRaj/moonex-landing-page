"use client";
import { TPost } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { PostCard } from "./post-card";
import PostFilter from "./post-filter";
import { useRouter } from "next/navigation";

interface Props {
  posts: TPost[];
  error: string;
  page: number;
  search: string;
}
const PostPage = ({ posts, error, page, search }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>(search);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayPosts, setDisplayPosts] = useState<TPost[]>(posts);
  const router = useRouter();

  return (
    <main className="w-full min-h-screen flex items-center flex-col my-4">
      <div className="w-full max-w-[1200px] mt-20 p-8 ">
        <PostFilter
          setUpdatedPosts={setDisplayPosts}
          page={page}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {displayPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-description text-lg">No Posts Available</p>
          </div>
        )}
      </div>
      <span className="flex items-center justify-end mt-4 gap-2">
        <button
          className="btn border text-primary hover:bg-primary hover:text-background hover:border-primary"
          onClick={() => {
            const query = searchQuery ? `?search=${searchQuery}` : "";
            if (page == 1) return;
            if (page == 2) router.push(`/posts${query}`);
            else {
              router.push(`/posts/${page - 1}${query}`);
            }
          }}
        >
          Prev
        </button>
        <button
          className="btn bg-primary text-background border border-primary"
          onClick={() => {
            if (posts.length < 12) return;
            const query = searchQuery ? `?search=${searchQuery}` : "";
            router.push(`/posts/${page + 1}${query}`);
          }}
        >
          Next
        </button>
      </span>
    </main>
  );
};

export default PostPage;
