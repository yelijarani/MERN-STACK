

const Colleges=require("../model/CollegeModel")
const addCollege=async(req,res)=>{
   try {
     const{name,code, address,departments,email,url}=req.body;
     //stored in one variable bcoz we have to insert into db 
     const newCollege={
        name:name,
        code:code,
        address:address,
        departments:departments,
        email:email,
        url:url
     }
     await Colleges.insertOne(newCollege)
     res.status(200).json({message:"New college add successfully"})
   } catch (err) {
        res.status(500).json({message:"Failed to add college record😭"})
   }

};
//add college

//get all colleges

const getAllColleges=async (req,res)=>{
    try {
       const foundColleges = await Colleges.find();
        //condition to send response with foundColleges empty
       if(foundColleges.length==0){
        res.status(404).json({message:"colleges not found"})
       }
       //global successfull response 
       res.status(200).json({foundColleges})
    }
    
     catch (error) {
        res.status(500).json({message:"failed to retrieve data"})
    }

}
//delete college
const deleteCollege=async(req,res)=>{
      try{
      const deleteDocument =  await Colleges.findByIdAndDelete(req.params.id);  
      console.log(deleteDocument);
      res.status(200).json({message:"College details deleted successfully"})
      
      }catch(error){
         res.status(500).json({message:"failed to delete college details"})

      }
}
//get colleges based on ID
const getCollegeBasedOnId=async(req,res)=>{
   try {
      const foundCollege= await Colleges.findById(req.params.id)
      res.status(200).json({foundCollege})
   } catch (error) {
      res.status(500).json({message:"Failed to get college details"})
   }
}
//update college details by id 
const updateCollege=async(req,res)=>{
   const udpatedCollegeDetails=req.body
  try {
  const updatedCollege= await Colleges.findByIdAndUpdate(req.params.id,udpatedCollegeDetails,{new:true})
   res.status(200).json({message:"college updated successfully"})
  } catch (error) {
   res.status(500).json({message:"failed to update college details"});
   
  }
};

//update college mail

const updateEmail=async(req,res)=>{
   try {
      const updatedEmail=await Colleges.findOneAndUpdate({email: req.params.email},{email:req.body.email},{new:true});
      res.status(200).json({message:"email updated successdfully "})
   } catch (error) {
      res.status(500).json({message:"failed to update mail "})
      
   }
}

module.exports={addCollege,getAllColleges,deleteCollege,getCollegeBasedOnId,updateCollege,updateEmail};