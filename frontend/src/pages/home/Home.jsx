import React, { useState, useEffect } from "react";
import AddQuestion from "../../components/addQuestion/AddQuestion";
import "./home.scss";
import Container from "react-bootstrap/Container";
import QuestionCard from "../../components/questionCard/QuestionCard";
import AuthService from "../../features/AuthService";
import { Button } from "@mui/material";

function Home() {
  const [questions, setQuestions] = useState([]);

  const handleLogout = () => {
    AuthService.logout();
    window.location.reload();
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:5267/api/question");
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const questionsData = await response.json();
      setQuestions(questionsData);
    } catch (error) {
      console.error("Error fetching questions:", error.message);
    }
  };

  const handleQuestionAdded = (newQuestion) => {
    setQuestions((prevQuestions) => [newQuestion, ...prevQuestions]);
  };

  return (
    <>
      <Container>
        <Button
          onClick={handleLogout}
          id="logout-btn"
          size="small"
          color="error"
        >
          Logout
        </Button>
        <AddQuestion onQuestionAdded={handleQuestionAdded} />
        <div className="pb-5"></div>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            userId={question.userId}
            date={question.postedAt}
            content={question.content}
          />
        ))}
      </Container>
    </>
  );
}

export default Home;
