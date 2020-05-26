(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct Answer.");
      sc = callback(true);
    } else {
      console.log("Wrong Answer. Please try again.");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("your current Score is: " + score);
    console.log("-----------------------");
  };

  var q1 = new Question(
    "Is Js the coolest programming lang?",
    ["yes", "no"],
    0
  );
  var q2 = new Question(
    "Whats the name of this courses?",
    ["John", "Marry", "Jonas"],
    1
  );
  var q3 = new Question(
    "What does best describe coding?",
    ["boring", "hard", "Tedios", "fun"],
    3
  );

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer !");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
