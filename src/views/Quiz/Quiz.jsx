import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Quiz.css";
import { questions } from "../../quiz_data";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Javob berilgan savollar soni
  const answeredQuestionsCount = Object.keys(answers).length;
  const totalQuestionsCount = questions.length; // Umumiy savollar soni

  const handleSelectOption = (option) => {
    setSelectedOption(option); // Foydalanuvchi variantni tanlaganda tanlangan variantni saqlash
  };

  const handleNext = () => {
    if (selectedOption) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestionIndex]: selectedOption,
      }));

      if (selectedOption === currentQuestion.answer) {
        setScore((prevScore) => prevScore + 1);
      }

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(""); // Keyingi savolga o'tganda tanlangan variantni tozalash
      } else {
        setIsQuizCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption(""); // Oldingi savolga o'tganda ham tanlangan variantni tozalash
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setAnswers({});
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <div>
      <div className="container">
        <Navbar />
      </div>

      {!isQuizCompleted ? (
        <div>
          <div className="quiz-title container">
            <h2>{currentQuestion.question}</h2>
            {/* Umumiy savollar soni va javob berilgan savollar soni */}
            <p className="all-quetions">
              {answeredQuestionsCount} / {totalQuestionsCount}
            </p>
          </div>
          <div className="quiz-container container">
            <ul className="quiz-list">
              {currentQuestion.options.map((option, index) => (
                <li key={index}>
                  <button
                    className={`option-button ${
                      selectedOption === option ? "active" : ""
                    }`}
                    onClick={() => handleSelectOption(option)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="quiz-btns container">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Oldingi
            </button>

            <button onClick={handleNext} disabled={selectedOption === ""}>
              Keyingi
            </button>
          </div>
        </div>
      ) : (
        <div className="finally-quiz">
          <div className="finally-container">
            <h2 className="animate-text">Test tugadi</h2>
            <p className="animate-text">
              Ballaringiz: {score} / {questions.length}
            </p>
            {score >= 5 ? (
              <p className="animate-text">
                Tabriklaymiz! Siz testni topshirdingiz.
              </p>
            ) : (
              <p className="animate-text">
                Afsuski, siz testni o'ta olmadingiz.
              </p>
            )}
            <button className="animate-button" onClick={handleReset}>
              Yana urinish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
