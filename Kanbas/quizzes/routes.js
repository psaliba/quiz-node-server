import * as dao from "./dao.js";
export default function QuizRoutes(app) {

    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };

    const findAllQuizzesByCourse = async (req, res) => {
        const quizzes = await dao.findAllQuizzesByCourse(req.params.courseId);
        res.json(quizzes);
    };

    const findQuizById = async (req, res) => {
        console.log("got here")
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };

    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
        res.json(status);
    };

    app.post("/api/quizzes", createQuiz);
    app.get("/api/quizzes/:courseId", findAllQuizzesByCourse);
    app.get("/api/quiz/:quizId", findQuizById);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
}