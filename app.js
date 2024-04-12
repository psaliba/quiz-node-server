import express from "express";
import Hello from "./Hello.js";
import lab5 from "./lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/users/routes.js";
import session from "express-session";
import "dotenv/config";
import QuizRoutes from "./Kanbas/quizzes/routes.js";

if (process.env.NODE_ENV === "development"){
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
        directConnection: true
    });
} else {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
}

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}


app.use(session(sessionOptions));

// print every request to console for debugging
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

Hello(app);
lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);
QuizRoutes(app);



app.listen(process.env.PORT || 4000, () => console.log("Server is running on port 4000"));

