import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Blog } from "./componets/types";
import BlogDisplay from "./componets/Blog";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  console.log(blogs[0]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        setBlogs(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Row>
        {blogs.map((blog) => (
          <BlogDisplay blog={blog} key={blog.id} />
        ))}
      </Row>
    </Container>
  );
};
export default BlogList;
