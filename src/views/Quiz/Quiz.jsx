import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Quiz.css";

// 10ta savolni o'z ichiga olgan misol
const questions = [
  {
    id: 1,
    question: "Fransiyaning poytaxti qaysi?",
    options: ["Parij", "London", "Berlin", "Madrid"],
    answer: "Parij",
  },
  {
    id: 2,
    question: "Qaysi sayyora Qizil Sayyora sifatida tanilgan?",
    options: ["Yer", "Mars", "Yupiter", "Venera"],
    answer: "Mars",
  },
  {
    id: 3,
    question: "Dunyoning eng katta okeani qaysi?",
    options: [
      "Atlantika okeani",
      "Hind okeani",
      "Tinch okeani",
      "Arktika okeani",
    ],
    answer: "Tinch okeani",
  },
  {
    id: 4,
    question: "'Hamlet' asarini kim yozgan?",
    options: ["Mark Tven", "J.K. Rouling", "Uilyam Shekspir", "Charlz Dikens"],
    answer: "Uilyam Shekspir",
  },
  {
    id: 5,
    question: "64 ning kvadrat ildizi nechiga teng?",
    options: ["6", "8", "10", "12"],
    answer: "8",
  },
  {
    id: 6,
    question: "Dunyoning eng baland tog'i qaysi?",
    options: ["Everest", "K2", "Kilimanjarro", "Makalu"],
    answer: "Everest",
  },
  {
    id: 7,
    question: "Qaysi elementning kimyoviy belgisi 'O'?",
    options: ["Oksijen", "Vodorod", "Azot", "Karbongaz"],
    answer: "Oksijen",
  },
  {
    id: 8,
    question: "Qaysi yulduz eng yaqin yulduz?",
    options: ["Yupiter", "Sirius", "Proxima Sentauri", "Alfa Sentauri"],
    answer: "Proxima Sentauri",
  },
  {
    id: 9,
    question: "Qaysi o‘simlik eng katta gulga ega?",
    options: ["Kardamon", "Nargis", "Titan arum", "Lotus"],
    answer: "Titan arum",
  },
  {
    id: 10,
    question: "Qaysi davlatda eng ko'p rasmiy tillar mavjud?",
    options: ["Shveytsariya", "Hindiston", "Kanada", "Belgiya"],
    answer: "Shveytsariya",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
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
        setSelectedOption("");
      } else {
        setIsQuizCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption("");
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
          <div className="quiz-title">
            <h2>{currentQuestion.question}</h2>
          </div>
          <div className="quiz-container">
            <ul className="quiz-list">
              {currentQuestion.options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
        <div>
          <h2>Test tugadi</h2>
          <p>
            Ballaringiz: {score} / {questions.length}
          </p>
          {score >= 10 ? (
            <p>Tabriklaymiz! Siz testni topshirdingiz.</p>
          ) : (
            <p>Afsuski, siz testni o'ta olmadingiz.</p>
          )}
          <button onClick={handleReset}>Yana urinish</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
