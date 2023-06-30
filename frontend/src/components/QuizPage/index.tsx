import { Box, Button, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Question, fetchQuestion } from './fetchQuiz';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../../context/PlayerContext';
import { Player } from '../../types/Player';
import { postPlayer } from './postPlayer';

const QuizPage = () => {
  const [questionsCount, setQuestionsCount] = useState(1);
  const [questions, setQuestions] = useState<Question[]>();
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();
  const { name: playerName } = useContext(PlayerContext);

  const nextQuestion = (answer: string) => {
    if (answer == questions?.[questionsCount - 1].correct_answer) {
      setPoints((prev) => prev + 1);
    }

    setQuestionsCount((prev) => {
      if (prev + 1 > 10) {
        const player: Player = {
          name: playerName,
          points: points
        };
        postPlayer(player);
        navigate('/');
      }

      return prev + 1;
    });
  };

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetchQuestion();
      setQuestions(
        response
          .filter(
            (question) =>
              question.multiple_correct_answers == 'false' && question.correct_answer != null
          )
          .slice(0, 10)
      );
    };

    dataFetch();
  }, []);

  return (
    <Box
      height="70vh"
      width="60vw"
      padding="30px"
      sx={{ backgroundColor: '#a2d2ff', borderRadius: '10px' }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around">
        <Typography fontWeight={'700'} variant="h3" fontFamily="Poppins">
          {questionsCount}/10
        </Typography>
        <Typography variant="h5" margin="30px" fontFamily="Poppins" textAlign="center">
          {questions?.[questionsCount - 1].question}
        </Typography>
        <Box display="flex" flexDirection="column" gap="30px">
          {questions?.[questionsCount - 1].answers.answer_a && (
            <Button
              variant="contained"
              onClick={() => {
                nextQuestion('answer_a');
              }}>
              {questions?.[questionsCount - 1].answers.answer_a}
            </Button>
          )}
          {questions?.[questionsCount - 1].answers.answer_b && (
            <Button
              variant="contained"
              onClick={() => {
                nextQuestion('answer_b');
              }}>
              {questions?.[questionsCount - 1].answers.answer_b}
            </Button>
          )}
          {questions?.[questionsCount - 1].answers.answer_c && (
            <Button
              variant="contained"
              onClick={() => {
                nextQuestion('answer_c');
              }}>
              {questions?.[questionsCount - 1].answers.answer_c}
            </Button>
          )}
          {questions?.[questionsCount - 1].answers.answer_d && (
            <Button
              variant="contained"
              onClick={() => {
                nextQuestion('answer_d');
              }}>
              {questions?.[questionsCount - 1].answers.answer_d}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default QuizPage;
