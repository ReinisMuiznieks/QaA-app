import React from "react";
import AddQuestion from "../../components/addQuestion/AddQuestion";
import "./home.scss";
import Container from "react-bootstrap/Container";
function Home() {
  return (
    <>
      <Container>
        <h1>Home</h1>
        <AddQuestion />
      </Container>
    </>
  );
}

export default Home;
