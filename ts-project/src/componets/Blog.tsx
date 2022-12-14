import { Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Blog } from "./types";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState } from "react";

interface BlogProps {
  blog: Blog;
}

const BlogDisplay = ({ blog }: BlogProps) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
  };
  return (
    <Link to={`/details/${blog.id}`}>
      <Card
        onClick={handleClick}
        style={{ border: selected ? "3px solid red" : "none" }}
        key={blog.id}
      >
        <Card.Img variant="top" src={blog.imageUrl} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted my-4">
            {blog.newsSite}
          </Card.Subtitle>
          <div className="d-flex justify-content-between styleme">
            <Card.Subtitle className="mb-2 text-muted my-4">
              Updated date: <br />
              {format(new Date(blog.updatedAt), "MM/dd/yyyy")}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted my-4">
              Publish date: <br />
              {format(new Date(blog.publishedAt), "MM/dd/yyyy")}
            </Card.Subtitle>
          </div>
          <Card.Text>{blog.summary}</Card.Text>
          <Card.Link href={blog.url}>Read More</Card.Link>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default BlogDisplay;
