"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { ThumbsUp, MessageSquare } from "lucide-react"

// Mock data for comments
const initialComments = [
  {
    id: 1,
    author: "Jane Cooper",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "2 days ago",
    content:
      "Great article! I particularly enjoyed your insights on AI-driven development tools. Do you think these tools will eventually replace human developers?",
    likes: 5,
    replies: [
      {
        id: 11,
        author: "Rahul Sharma",
        authorImage: "/placeholder.svg?height=40&width=40",
        date: "1 day ago",
        content:
          "Thanks for your comment, Jane! I believe AI tools will augment human capabilities rather than replace developers entirely. They'll handle repetitive tasks, allowing developers to focus on more creative and strategic aspects of development.",
        likes: 3,
      },
    ],
  },
  {
    id: 2,
    author: "Alex Johnson",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "3 days ago",
    content:
      "I've been experimenting with WebAssembly recently and the performance gains are impressive. It's great to see it gaining more mainstream adoption.",
    likes: 8,
    replies: [],
  },
]

export default function CommentSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const { ref, isInView } = useScrollAnimation()

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newComment.trim()) return

    // In a real app, you would send this to an API
    const newCommentObj = {
      id: comments.length + 10, // Just for demo
      author: "Guest User",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "Just now",
      content: newComment,
      likes: 0,
      replies: [],
    }

    setComments([...comments, newCommentObj])
    setNewComment("")
  }

  const handleReplySubmit = (e: React.FormEvent, commentId: number) => {
    e.preventDefault()

    if (!replyContent.trim()) return

    // In a real app, you would send this to an API
    const newReply = {
      id: Date.now(), // Just for demo
      author: "Guest User",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "Just now",
      content: replyContent,
      likes: 0,
    }

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        }
      }
      return comment
    })

    setComments(updatedComments)
    setReplyContent("")
    setReplyingTo(null)
  }

  const handleLike = (commentId: number, isReply = false, parentId?: number) => {
    if (isReply && parentId) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === parentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === commentId) {
              return { ...reply, likes: reply.likes + 1 }
            }
            return reply
          })
          return { ...comment, replies: updatedReplies }
        }
        return comment
      })
      setComments(updatedComments)
    } else {
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, likes: comment.likes + 1 }
        }
        return comment
      })
      setComments(updatedComments)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Comments ({comments.length})</h2>

            {/* Comment Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 min-h-[120px] mb-4"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                    disabled={!newComment.trim()}
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={comment.authorImage || "/placeholder.svg"}
                          alt={comment.author}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mr-2">{comment.author}</h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{comment.content}</p>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLike(comment.id)}
                          className="flex items-center text-gray-500 dark:text-gray-400 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <ThumbsUp size={14} className="mr-1" />
                          <span>{comment.likes} likes</span>
                        </button>
                        <button
                          onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                          className="flex items-center text-gray-500 dark:text-gray-400 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          <MessageSquare size={14} className="mr-1" />
                          <span>Reply</span>
                        </button>
                      </div>

                      {/* Reply Form */}
                      {replyingTo === comment.id && (
                        <div className="mt-4">
                          <form onSubmit={(e) => handleReplySubmit(e, comment.id)}>
                            <textarea
                              value={replyContent}
                              onChange={(e) => setReplyContent(e.target.value)}
                              placeholder="Write a reply..."
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 min-h-[80px] mb-4"
                            />
                            <div className="flex justify-end space-x-2">
                              <button
                                type="button"
                                onClick={() => setReplyingTo(null)}
                                className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="px-4 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                                disabled={!replyContent.trim()}
                              >
                                Reply
                              </button>
                            </div>
                          </form>
                        </div>
                      )}

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-4">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="pt-4">
                              <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                  <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                      src={reply.authorImage || "/placeholder.svg"}
                                      alt={reply.author}
                                      width={32}
                                      height={32}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center mb-1">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mr-2">{reply.author}</h4>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
                                  </div>
                                  <p className="text-gray-600 dark:text-gray-400 mb-2">{reply.content}</p>
                                  <button
                                    onClick={() => handleLike(reply.id, true, comment.id)}
                                    className="flex items-center text-gray-500 dark:text-gray-400 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                  >
                                    <ThumbsUp size={14} className="mr-1" />
                                    <span>{reply.likes} likes</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
