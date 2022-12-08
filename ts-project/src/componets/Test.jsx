import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Blog } from "./types";
import { format } from "date-fns";

import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  console.log(blogDetails.id);
  console.log(params.blogId);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.blogId}`
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        setBlogDetails(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={blogDetails.imageUrl} />
        <Card.Body>
          <Card.Title>{blogDetails.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted my-4">
            {blogDetails.newsSite}
          </Card.Subtitle>
          <div className="d-flex justify-content-between styleme">
            <Card.Subtitle className="mb-2 text-muted my-4">
              Updated date: <br />
              {format(new Date(blogDetails.updatedAt), "MM/dd/yyyy")}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted my-4">
              Publish date: <br />
              {format(new Date(blogDetails.publishedAt), "MM/dd/yyyy")}
            </Card.Subtitle>
          </div>
          <Card.Text>{blogDetails.summary}</Card.Text>
          <Card.Link href={blogDetails.url}>Read More</Card.Link>
        </Card.Body>
      </Card>
      <div>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    </Container>
  );
};
export default Details;
