import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postsService";
import { getAllTopics } from "../../services/topicsService";
import { Post } from "./Post";
import { PostFilterBar } from "./PostSearch";
import { DropdownFilter } from "../DropdownFilter";

export const PostsList = () => {
  const [allPosts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  // Fetch all posts and topics on initial render
  useEffect(() => {
    const fetchPostsAndTopics = async () => {
      const postArray = await getAllPosts();
      const topicArray = await getAllTopics(); // Fetch topics

      setPosts(postArray);
      setTopics(topicArray);
      setFilteredPosts(postArray);
    };

    fetchPostsAndTopics();
  }, []);

  // Filter posts based on the search term and selected topic
  useEffect(() => {
    const foundPosts = allPosts.filter((post) => {
      const matchesSearchTerm =
        post.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTopic = selectedTopic
        ? post.topicId === Number(selectedTopic)
        : true;

      return matchesSearchTerm && matchesTopic;
    });

    setFilteredPosts(foundPosts);
  }, [searchTerm, selectedTopic, allPosts]);

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      <PostFilterBar setSearchTerm={setSearchTerm} />
      <DropdownFilter
        options={topics}
        selectedOption={selectedTopic}
        setSelectedOption={setSelectedTopic}
      />
      <article className="posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((postObject) => (
            <Post post={postObject} key={postObject.id} />
          ))
        ) : (
          <p className="no-posts">No posts available.</p>
        )}
      </article>
    </div>
  );
};
