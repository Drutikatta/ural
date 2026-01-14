import React, { useState } from "react";
import { quizQuestions } from "../data/quiz";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Alert,
  LinearProgress,
  Fade,
  Grow,
  Container,
  Paper,
  Chip,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import {
  CheckCircleOutline,
  RadioButtonUnchecked,
  EmojiEvents,
  RestartAlt,
  CheckCircle,
  Cancel,
} from "@mui/icons-material";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const theme = useTheme();

  const handleOptionClick = (option) => {
    setSelected(option);
    const isCorrect = option === quizQuestions[current].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswers([...answers, { question: current, isCorrect }]);
  };

  const handleNext = () => {
    setSelected(null);
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
    setAnswers([]);
  };

  const progress = ((current + (selected ? 1 : 0)) / quizQuestions.length) * 100;
  const scorePercentage = (score / quizQuestions.length) * 100;

  if (showResult) {
    return (
      <Container maxWidth="md">
        <Fade in={showResult} timeout={800}>
          <Paper
            elevation={3}
            sx={{
              mt: 4,
              p: 4,
              textAlign: "center",
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
              borderRadius: 3,
            }}
          >
            <EmojiEvents
              sx={{
                fontSize: 80,
                color: scorePercentage >= 70 ? "gold" : theme.palette.grey[400],
                mb: 2,
              }}
            />
            <Typography variant="h3" gutterBottom fontWeight="bold">
              Quiz Complete!
            </Typography>
            <Typography variant="h4" sx={{ mt: 2, mb: 3 }}>
              Your Score: {score} / {quizQuestions.length}
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {scorePercentage >= 90 ? "Outstanding!" :
                 scorePercentage >= 70 ? "Great job!" :
                 scorePercentage >= 50 ? "Good effort!" :
                 "Keep practicing!"}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={scorePercentage}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  mt: 2,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 5,
                    backgroundColor: scorePercentage >= 70 ? theme.palette.success.main : theme.palette.warning.main,
                  },
                }}
              />
            </Box>

            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
              {answers.map((answer, index) => (
                <Chip
                  key={index}
                  label={index + 1}
                  size="small"
                  color={answer.isCorrect ? "success" : "error"}
                  icon={answer.isCorrect ? <CheckCircleOutline /> : <RadioButtonUnchecked />}
                />
              ))}
            </Stack>

            <Button
              variant="contained"
              size="large"
              startIcon={<RestartAlt />}
              onClick={handleRestart}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
              }}
            >
              Try Again
            </Button>
          </Paper>
        </Fade>
      </Container>
    );
  }

  const q = quizQuestions[current];

  // Function to determine button color and style
  const getButtonStyle = (option) => {
    if (!selected) return "primary";
    if (option === q.answer) return "success";
    if (option === selected) return "error";
    return "primary";
  };

  // Function to get button end icon
  const getButtonEndIcon = (option) => {
    if (!selected) return null;
    if (option === q.answer) return <CheckCircle />;
    if (option === selected && option !== q.answer) return <Cancel />;
    return null;
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Question {current + 1} of {quizQuestions.length}
          </Typography>
          <Chip
            label={`Score: ${score}`}
            color="primary"
            size="small"
          />
        </Stack>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            },
          }}
        />
      </Box>

      <Grow in key={current} timeout={500}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            overflow: 'visible',
          }}
        >
          {q.image && (
            <CardMedia
              component="img"
              height="250"
              image={q.image}
              alt={`Question ${current + 1}`}
              sx={{
                objectFit: 'cover',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
          )}
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 600,
                lineHeight: 1.4,
                color: theme.palette.text.primary,
              }}
            >
              {q.question}
            </Typography>
            
            <Stack spacing={2}>
              {q.options.map((option, index) => (
                <Button
                  key={option}
                  variant={selected === option || (selected && option === q.answer) ? "contained" : "outlined"}
                  color={getButtonStyle(option)}
                  sx={{
                    py: 2,
                    px: 3,
                    justifyContent: "space-between",
                    textAlign: "left",
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      transform: !selected ? 'translateX(8px)' : 'none',
                      boxShadow: !selected ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                    },
                    ...(selected === option && {
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    }),
                    ...(selected && option === q.answer && {
                      boxShadow: '0 4px 20px rgba(76, 175, 80, 0.3)',
                    }),
                  }}
                  onClick={() => !selected && handleOptionClick(option)}
                  disabled={!!selected}
                  startIcon={
                    <Typography variant="h6" sx={{ mr: 1, fontWeight: 600 }}>
                      {String.fromCharCode(65 + index)}.
                    </Typography>
                  }
                  endIcon={getButtonEndIcon(option)}
                >
                  <span style={{ flex: 1 }}>{option}</span>
                </Button>
              ))}
            </Stack>

            {selected && (
              <Fade in timeout={500}>
                <Alert
                  severity={selected === q.answer ? "success" : "error"}
                  sx={{
                    mt: 3,
                    borderRadius: 2,
                    '& .MuiAlert-icon': {
                      fontSize: 28,
                    },
                  }}
                  variant="filled"
                >
                  <Typography variant="body1" fontWeight="medium">
                    {selected === q.answer 
                      ? "Correct! " 
                      : (
                        <>
                          Incorrect. The correct answer is: <strong>{q.answer}</strong>
                        </>
                      )}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {q.explanation}
                  </Typography>
                </Alert>
              </Fade>
            )}

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleNext}
                disabled={!selected}
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  background: selected
                    ? `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`
                    : theme.palette.grey[300],
                  boxShadow: selected ? '0 3px 5px 2px rgba(33, 203, 243, .3)' : 'none',
                  '&:hover': {
                    background: selected
                      ? `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`
                      : theme.palette.grey[300],
                  },
                }}
              >
                {current === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grow>
    </Container>
  );
}