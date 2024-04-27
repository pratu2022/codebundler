import express from "express";
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlayList, resetPassword, updateProfile, updateUserRole, updateprofilepicture } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload  from "../middlewares/multer.js";

const router = express.Router();

//To Register a new User
router.route("/register").post( singleUpload,register);

//Login
router.route("/login").post(login);
//Logout
router.route("/logout").get(logout);

//Get my Profile
router.route("/me").get(isAuthenticated, getMyProfile)

//Delete my Profile
router.route("/me").delete(isAuthenticated,deleteMyProfile)

//ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);

//UpdateProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//UpdateProfilePicture
router.route("/updateprofilepicture").put(isAuthenticated,singleUpload, updateprofilepicture);

//ForgetPassword
router.route("/forgetpassword").post(forgetPassword);

//ResetPassword
router.route("/resetpassword/:token").put(resetPassword);

//Add to PlayList
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);

//RemoveFromPlaylist
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlayList);

//****Admin Routes****

router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers)

router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,updateUserRole).delete(isAuthenticated,authorizeAdmin,deleteUser)



export default router;