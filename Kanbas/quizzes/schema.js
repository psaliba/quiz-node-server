import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Multiple Choice', 'True/False', 'Fill in the Blank'],
        required: true
    },
    points: {
        type: Number,
        default: 1
    },
    question:
    {
        type: String,
        required: true
    },

    // Going to need to update this so it can handle all types of questions
    options: [{
        type: String,
        required: true
    }],
    correct_option: {
        type: Number,
        required: true
    }
});

const quizSchema = new mongoose.Schema({
    course_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    published: {
        type: Boolean,
        default: false
    },
    available: {
        type: Date,
        required: true
    },
    available_until: {
        type: Date,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    quiz_type: {
        type: String,
        enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'],
        default: 'Graded Quiz'
    },
    points: {
        type: Number,
        default: 0
    },
    assignment_group: {
        type: String,
        enum: ['Quizzes', 'Exams', 'Assignments', 'Projects'],
        default: 'Quizzes'
    },
    shuffle_answers: {
        type: Boolean,
        default: true
    },
    time_limit: {
        type: Number,
        default: 20 // in minutes
    },
    multiple_attempts: {
        type: Boolean,
        default: false
    },
    show_correct_answers: {
        type: String,
        enum: ['Immediately', 'After Submitted', 'Never'], // think these are all the options
        default: 'After Submitted'
    },
    access_code: {
        type: String,
        default: ''
    },
    one_question_at_a_time: {
        type: Boolean,
        default: true
    },
    webcam_required: {
        type: Boolean,
        default: false
    },
    lock_questions_after_answering: {
        type: Boolean,
        default: false
    },
    questions: [questionSchema] // Embedding questions within the quiz document
},
    { collection: "quizzes" }
);

export default quizSchema;