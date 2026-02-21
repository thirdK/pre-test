import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { questions } from "./data/questions";
import logo from "./assets/KoreaIT.png";

function App() {
  const [step, setStep] = useState("welcome");
  const [score, setScore] = useState(0);

  const maxTotalScore = questions.length * 10;

  const handleQuizFinish = (finalScore) => {
    setScore(finalScore);
    setStep("result");
  };

  const handleRestart = () => {
    setScore(0);
    setStep("welcome");
  };

  return (
    <div className="app-main">
      <div className="app-container">
        {/* 브랜드: app-container padding 영역 활용 */}
        {step === "welcome" && (
          <>
            <div className="brand-header">
              <img src={logo} alt="KoreaIT Logo" className="brand-logo" />
            </div>
            <p className="brand-footer">© KOREA AI ACADEMY</p>
          </>
        )}

        {step === "welcome" && <Welcome onStart={() => setStep("quiz")} />}
        {step === "quiz" && <Quiz onFinish={handleQuizFinish} />}
        {step === "result" && (
          <Result
            score={score}
            totalScore={maxTotalScore}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
