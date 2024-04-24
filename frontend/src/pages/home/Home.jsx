import React from "react";
import AddQuestion from "../../components/addQuestion/AddQuestion";
import "./home.scss";
import Container from "react-bootstrap/Container";
import QuestionCard from "../../components/questionCard/QuestionCard";
import AuthService from "../../features/AuthService";
import { Button } from "@mui/material";

function Home() {
  const handleLogout = () => {
    AuthService.logout();
    window.location.reload();
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
