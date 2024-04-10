import * as dao from "./dao.js";

export default function CourseRoutes(app) {
    const getCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    }
    app.get("/api/courses", getCourses);


    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    }

    app.post("/api/courses", createCourse);


    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params._id);
        res.json(status);
    }
    app.delete("/api/courses/:_id", deleteCourse);

    const updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.updateCourse(courseId, req.body);
        res.json(status);
    }
    app.put("/api/courses/:courseId", updateCourse);

    const getCourseById = async (req, res) => {
        const course = await dao.findCourseById(req.params.courseId);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.json(course);
    }

    app.get("/api/courses/:courseId", getCourseById);
}

