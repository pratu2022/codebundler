import express from "express";
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, authorizeSubscibers, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Get All courses without lectures
router.route("/courses").get(getAllCourses);
// Create new Course - only admin
router.route("/createcourse").post(isAuthenticated, authorizeAdmin,singleUpload, createCourse);

// Add Lecture, Delete Course, Get Course Detail
router.route("/course/:id")
.get(isAuthenticated,authorizeSubscibers, getCourseLectures)
.post( isAuthenticated,authorizeAdmin,singleUpload,addLecture)
.delete(isAuthenticated,authorizeAdmin,deleteCourse)
// Delete Lecture
router.route("/lecture").delete(isAuthenticated,authorizeAdmin,deleteLecture)

export default router;