import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Award, Trophy, Brain, Timer, Leaf, Shield, Pill } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  category: "identification" | "prevention" | "treatment";
  points: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What are the characteristic symptoms of Early Blight in potatoes?",
    options: [
      "Water-soaked spots that quickly turn white",
      "Concentric rings forming a target-like pattern on leaves",
      "White fuzzy growth on the underside of leaves",
      "Yellow spots with red centers"
    ],
    correctAnswer: 1,
    explanation: "Early Blight (Alternaria solani) is characterized by dark brown to black lesions with concentric rings, giving them a target-like or bull's-eye appearance. These typically appear on older, lower leaves first.",
    difficulty: "easy",
    category: "identification",
    points: 10
  },
  {
    id: 2,
    question: "Which pathogen causes Late Blight, the disease that led to the Irish Potato Famine?",
    options: [
      "Alternaria solani",
      "Fusarium oxysporum",
      "Phytophthora infestans",
      "Rhizoctonia solani"
    ],
    correctAnswer: 2,
    explanation: "Late Blight is caused by the oomycete Phytophthora infestans. It's the same pathogen that caused the Irish Potato Famine in the 1840s, leading to approximately one million deaths and emigration of another million people.",
    difficulty: "medium",
    category: "identification",
    points: 15
  },
  {
    id: 3,
    question: "Which practice helps prevent the spread of soil-borne potato diseases?",
    options: [
      "Frequent overhead irrigation",
      "Planting potatoes in the same location each year",
      "Crop rotation with non-host plants",
      "Increasing plant density for higher yields"
    ],
    correctAnswer: 2,
    explanation: "Crop rotation with non-host plants (like grains or legumes) is one of the most effective cultural practices to prevent soil-borne diseases. It breaks the disease cycle by depriving pathogens of their host plants.",
    difficulty: "easy",
    category: "prevention",
    points: 10
  },
  {
    id: 4,
    question: "What weather conditions most favor the development and spread of Late Blight?",
    options: [
      "Hot and dry conditions",
      "Cool and wet conditions",
      "Hot and humid conditions",
      "Cold and dry conditions"
    ],
    correctAnswer: 1,
    explanation: "Late Blight thrives in cool (60-70°F/15-21°C) and wet conditions with high humidity. These conditions are ideal for spore production, germination, and infection, allowing the disease to spread rapidly.",
    difficulty: "medium",
    category: "prevention",
    points: 15
  },
  {
    id: 5,
    question: "What is the best approach for treating Early Blight once it's established in a potato field?",
    options: [
      "Applying nitrogen fertilizer to help plants outgrow the disease",
      "Removing infected leaves and applying appropriate fungicides",
      "Increasing irrigation to wash away spores",
      "Planting resistant varieties next season (no current treatment)"
    ],
    correctAnswer: 1,
    explanation: "For established Early Blight, removing infected leaves reduces inoculum, and applying appropriate fungicides (like chlorothalonil, azoxystrobin, or copper-based products) can help control the disease. Prevention through resistant varieties and cultural practices is best for the next season.",
    difficulty: "medium",
    category: "treatment",
    points: 15
  },
  {
    id: 6,
    question: "How does potato Black Scurf (Rhizoctonia solani) primarily affect the crop?",
    options: [
      "It causes wilting and leaf death",
      "It forms black, irregular masses (sclerotia) on tubers",
      "It rots tubers from the inside out",
      "It produces toxins that make potatoes inedible"
    ],
    correctAnswer: 1,
    explanation: "Black Scurf is identified by black, irregular masses called sclerotia on the surface of potato tubers. These are the resting structures of Rhizoctonia solani. While they don't affect edibility, they reduce marketability and can be a source of infection for future crops.",
    difficulty: "hard",
    category: "identification",
    points: 20
  },
  {
    id: 7,
    question: "Which cultural practice is most effective against Common Scab in potatoes?",
    options: [
      "Maintaining soil pH between 5.0-5.2",
      "Increasing soil pH above 7.0",
      "Heavy irrigation right after planting",
      "Adding fresh manure to soil"
    ],
    correctAnswer: 0,
    explanation: "Common Scab (Streptomyces scabies) thrives in neutral to alkaline soils. Maintaining a slightly acidic soil pH between 5.0-5.2 is one of the most effective ways to manage this disease. The pathogen is less active in acidic conditions.",
    difficulty: "hard",
    category: "prevention",
    points: 20
  },
  {
    id: 8,
    question: "In an integrated disease management approach for potatoes, which method should be used first?",
    options: [
      "Chemical fungicides",
      "Biological controls",
      "Prevention through cultural practices",
      "Genetic resistance"
    ],
    correctAnswer: 2,
    explanation: "In integrated disease management, prevention through cultural practices (like crop rotation, proper planting timing, and sanitation) should always be the first line of defense. Chemical controls should be used as a last resort or as part of a comprehensive strategy.",
    difficulty: "medium",
    category: "treatment",
    points: 15
  },
  {
    id: 9,
    question: "What is the primary way that Late Blight pathogen survives between growing seasons in cold climates?",
    options: [
      "As mycelia in soil",
      "In infected seed potatoes or volunteer plants",
      "As airborne spores",
      "In wild host plants"
    ],
    correctAnswer: 1,
    explanation: "In regions with freezing winters, Phytophthora infestans primarily survives between seasons in infected seed potatoes, cull piles, or volunteer potato plants that weren't removed from the field. The pathogen needs living host tissue to survive.",
    difficulty: "hard",
    category: "prevention",
    points: 20
  },
  {
    id: 10,
    question: "What is a key difference between viral and fungal diseases in potatoes?",
    options: [
      "Viral diseases can be directly treated with pesticides",
      "Fungal diseases can't spread from plant to plant",
      "Viral diseases generally don't show visible signs on tubers",
      "Viral diseases can't be transmitted through seed potatoes"
    ],
    correctAnswer: 0,
    explanation: "A key difference is that fungal diseases can often be treated with fungicides, while viral diseases have no direct treatment once a plant is infected. Viral disease management focuses on prevention through certified seed, vector control, and resistant varieties.",
    difficulty: "hard",
    category: "treatment",
    points: 20
  }
];

export default function Learning() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const checkAnswer = () => {
    if (selectedOption === null) {
      toast({
        title: "Please select an answer",
        description: "You need to choose an option before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsAnswered(true);
    const isCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + questions[currentQuestionIndex].points);
      setCorrectAnswers(prev => prev + 1);
      toast({
        title: "Correct!",
        description: `You earned ${questions[currentQuestionIndex].points} points.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Review the explanation to learn more.",
        variant: "destructive",
      });
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCorrectAnswers(0);
    setQuizCompleted(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const getBadgeForDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return <Badge className="bg-green-500">Easy</Badge>;
      case "medium":
        return <Badge className="bg-amber-500">Medium</Badge>;
      case "hard":
        return <Badge className="bg-red-500">Hard</Badge>;
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "identification":
        return <Leaf className="h-4 w-4 mr-1" />;
      case "prevention":
        return <Shield className="h-4 w-4 mr-1" />;
      case "treatment":
        return <Pill className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Section */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary">Potato Disease Learning Challenge</h1>
            <p className="text-lg text-neutral-dark dark:text-gray-300 max-w-3xl mx-auto">
              Test your knowledge of potato diseases, prevention strategies, and treatment methods
            </p>
          </header>

          {!quizCompleted ? (
            <>
              {/* Progress Tracker */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium dark:text-gray-300">Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <span className="text-sm font-medium dark:text-gray-300">Score: {score}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question Card */}
              <Card className="mb-6 dark:bg-gray-900 dark:border-gray-800">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      {getBadgeForDifficulty(currentQuestion.difficulty)}
                      <Badge variant="outline" className="flex items-center">
                        {currentQuestion.category === "identification" && (
                          <Leaf className="h-4 w-4 mr-1" />
                        )}
                        {currentQuestion.category === "prevention" && (
                          <Shield className="h-4 w-4 mr-1" />
                        )}
                        {currentQuestion.category === "treatment" && (
                          <Pill className="h-4 w-4 mr-1" />
                        )}
                        {currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="dark:border-gray-700 dark:text-gray-300">
                      <Trophy className="h-4 w-4 mr-1" />
                      {currentQuestion.points} pts
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-3 dark:text-white">{currentQuestion.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedOption?.toString()} className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-2 p-3 rounded-md cursor-pointer 
                          ${selectedOption === index ? 'bg-primary-light dark:bg-primary-dark' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} 
                          ${isAnswered && index === currentQuestion.correctAnswer ? 'bg-green-100 dark:bg-green-900 border border-green-500' : ''}
                          ${isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer ? 'bg-red-100 dark:bg-red-900 border border-red-500' : ''}
                          transition-colors
                        `}
                        onClick={() => handleOptionSelect(index)}
                      >
                        <RadioGroupItem
                          value={index.toString()}
                          id={`option-${index}`}
                          disabled={isAnswered}
                          className="text-primary dark:text-primary"
                        />
                        <Label
                          htmlFor={`option-${index}`}
                          className={`flex-grow text-md cursor-pointer 
                            ${isAnswered && index === currentQuestion.correctAnswer ? 'font-medium text-green-700 dark:text-green-400' : ''}
                            ${isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer ? 'font-medium text-red-700 dark:text-red-400' : ''}
                            dark:text-gray-300
                          `}
                        >
                          {option}
                        </Label>
                        {isAnswered && index === currentQuestion.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        )}
                        {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && (
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                    ))}
                  </RadioGroup>

                  {isAnswered && (
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                      <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-1">Explanation</h4>
                      <p className="text-blue-800 dark:text-blue-300 text-sm">{currentQuestion.explanation}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  {!isAnswered ? (
                    <Button 
                      onClick={checkAnswer}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button 
                      onClick={nextQuestion}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </>
          ) : (
            // Quiz Completed Screen
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-center dark:text-white">Quiz Completed!</CardTitle>
                <CardDescription className="text-center text-lg dark:text-gray-400">Your potato disease knowledge assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-6">
                  {score >= 120 ? (
                    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-full mb-4">
                      <Trophy className="h-16 w-16 text-yellow-500" />
                    </div>
                  ) : score >= 80 ? (
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-full mb-4">
                      <Award className="h-16 w-16 text-blue-500" />
                    </div>
                  ) : (
                    <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded-full mb-4">
                      <Brain className="h-16 w-16 text-purple-500" />
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold mb-1 dark:text-white">{score} points</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">You answered {correctAnswers} out of {questions.length} questions correctly</p>
                  
                  <div className="w-full max-w-md">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Accuracy</h4>
                        <p className="text-2xl font-bold dark:text-white">{Math.round((correctAnswers / questions.length) * 100)}%</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Mastery</h4>
                        <p className="text-2xl font-bold dark:text-white">
                          {score >= 150 ? "Expert" : score >= 120 ? "Advanced" : score >= 80 ? "Intermediate" : "Beginner"}
                        </p>
                      </div>
                    </div>
                    
                    {score >= 120 && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-md mb-6">
                        <h4 className="font-medium text-green-700 dark:text-green-400 mb-1 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Excellent Knowledge!
                        </h4>
                        <p className="text-green-800 dark:text-green-300 text-sm">
                          You have a strong understanding of potato disease management. You're well-equipped to identify, prevent, and treat common potato diseases.
                        </p>
                      </div>
                    )}
                    
                    {score < 120 && score >= 80 && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md mb-6">
                        <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-1 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Good Progress!
                        </h4>
                        <p className="text-blue-800 dark:text-blue-300 text-sm">
                          You have a good foundation of potato disease knowledge. Continue learning to strengthen your understanding of specific diseases and management strategies.
                        </p>
                      </div>
                    )}
                    
                    {score < 80 && (
                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-md mb-6">
                        <h4 className="font-medium text-amber-700 dark:text-amber-400 mb-1 flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Keep Learning!
                        </h4>
                        <p className="text-amber-800 dark:text-amber-300 text-sm">
                          You're on your way to understanding potato diseases. Check out our Disease and Prevention pages to improve your knowledge.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={restartQuiz} className="bg-primary hover:bg-primary/90 text-white">
                  Take the Quiz Again
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Learning Resources */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary dark:text-primary">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="dark:bg-gray-900 dark:border-gray-800">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900/40 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                    <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="dark:text-white">Disease Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-300">Learn how to identify common potato diseases through visual symptoms and patterns.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full dark:border-gray-700 dark:text-gray-300" onClick={() => window.location.href = '/diseases'}>
                    Go to Disease Guide
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="dark:bg-gray-900 dark:border-gray-800">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/40 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="dark:text-white">Prevention Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-300">Discover proactive approaches to protect your potato crop from diseases before they start.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full dark:border-gray-700 dark:text-gray-300" onClick={() => window.location.href = '/prevention'}>
                    View Prevention Tips
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="dark:bg-gray-900 dark:border-gray-800">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-900/40 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                    <Pill className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="dark:text-white">Treatment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-300">Explore effective treatments for managing potato diseases once they've been identified.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full dark:border-gray-700 dark:text-gray-300" onClick={() => window.location.href = '/analyzer'}>
                    Try the Analyzer
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}