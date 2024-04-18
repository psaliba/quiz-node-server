import model from "./model.js";

export const createCourse = (course) => {
    // get random string for id, whole number
    course._id = Math.random().toString(36).substr(2, 9);
    return model.create(course);
}

export const findAllCourses = () => model.find();

export const findCourseById = (courseId) => model.find({course_id: courseId});

export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) => model.findOneAndDelete({_id: courseId});
