export interface Question {
  answers: Answers;
  question: string;
  correct_answer: string;
  multiple_correct_answers: string;
}

interface Answers {
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
}

export const fetchQuestion = async () => {
  const question = await fetch(
    'https://quizapi.io/api/v1/questions?apiKey=V1SlRb5EbN5hQdko5ZBSyzxEHYsoVyjXwS8hkwjB&limit=50'
  );
  const questionData = await question.json();

  return questionData as Question[];
};
