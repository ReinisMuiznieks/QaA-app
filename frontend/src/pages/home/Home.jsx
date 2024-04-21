import React from "react";
import AddQuestion from "../../components/addQuestion/AddQuestion";
import "./home.scss";
import Container from "react-bootstrap/Container";
import QuestionCard from "../../components/questionCard/QuestionCard";
function Home() {
  return (
    <>
      <Container>
        <h1>Home</h1>
        <AddQuestion />
        <div className="pb-5"></div>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </Container>
    </>
  );
}

export default Home;
