const {addCollege,getAllColleges,deleteCollege,getCollegeBasedOnId,updateCollege,updateEmail}=require("../controller/collegeController")
const express=require("express");
const router=express.Router()


router.post("/add-college",addCollege);
router.get("/get-colleges",getAllColleges);         //getAllColleges is handler 
router.delete("/delete-college/:id",deleteCollege);  //delete college is handler 
router.get("/get-college/:id",getCollegeBasedOnId);
router.put("/update-college/:id",updateCollege)
router.patch("/update-email/:email",updateEmail)

module.exports=router;