"use client";
import { TPost } from "@/lib/types";
import React, { useState } from "react";
import { Eye, Heart, ThumbsDown, Tag, X } from "lucide-react";

interface Prop {
  post: TPost;
}

export const PostCard = ({ post }: Prop) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="group relative bg-background/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {post.title}
            </h3>
            <p className="text-sm text-description mt-1">User #{post.userId}</p>
          </div>
          <div className="flex items-center gap-1 text-description text-sm ml-4">
            <Eye className="w-4 h-4" />
            <span>{post.views.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-description text-sm leading-relaxed mb-6 line-clamp-3">
          {post.body}
        </p>

        {post.tags.length > 0 && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Tag className="w-4 h-4 text-primary" />
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-description">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-green-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{post.reactions.likes}</span>
            </div>
            <div className="flex items-center gap-1 text-red-400">
              <ThumbsDown className="w-4 h-4" />
              <span className="text-sm">{post.reactions.dislikes}</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-sm text-primary hover:bg-primary hover:text-background rounded-lg border border-primary/30 transition-all duration-200 hover:scale-105"
          >
            Read More
          </button>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <FullPostView isOpen={isModalOpen} setOpen={setIsModalOpen} post={post} />
    </>
  );
};

const FullPostView = ({
  isOpen,
  setOpen,
  post,
}: {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
  post: TPost;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-background/90 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">#{post.userId}</span>
            </div>
            <div>
              <p className="text-sm text-description">User #{post.userId}</p>
              <div className="flex items-center gap-2 text-xs text-description">
                <Eye className="w-3 h-3" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-description" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <h1 className="text-2xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-description leading-relaxed mb-6">{post.body}</p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-white/10 bg-background/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-green-400">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">{post.reactions.likes}</span>
              <span className="text-sm text-description">Likes</span>
            </div>
            <div className="flex items-center gap-2 text-red-400">
              <ThumbsDown className="w-5 h-5" />
              <span className="font-semibold">{post.reactions.dislikes}</span>
              <span className="text-sm text-description">Dislikes</span>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="btn cta-btn text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
