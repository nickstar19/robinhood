const User =  require('../model/User');

const fetchMembers = async (req,res) =>{
    try{
        const members = await User.find();
        //console.log(members)
        return res.status(200).json(members);
    }catch(error){
        return res.status(500).json({error:'An error occurred'});
    }
}

const updateStatus = async (req,res) => {
    try{
        //console.log('received request:',req.body)
        const {userId} = req.body;
        //console.log(userId)
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }
        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { addedStatus: 1 }, 
            { new: true } // Returns the updated document
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(updatedUser);

    }catch(error)
    {
        return res.status(500).json({error:'An error occurred'});
    }
}
const getAddedMembers = async (req,res) => {
    try{
        const addedMembers = await User.find({ addedStatus : 1})
        if(!addedMembers)
            return res.status(400).json({error:"No members added yet!"})
        return res.status(200).json(addedMembers);
        
    }catch(error){
        return res.status(500).json({error:'an error occurred'});
    }
}

module.exports = {fetchMembers,updateStatus,getAddedMembers}