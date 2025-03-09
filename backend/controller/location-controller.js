const Location = require('../model/Location')
const assignLocation = async (req, res) => {
    const {
        link,
        ownerName,
        ownerContact,
        memberName,
        memberId,
        collectionStatus
    } = req.body;
    try {
        const location = await Location.create({
            link,
            ownerName,
            ownerContact,
            memberName,
            memberId,
            collectionStatus
        });
        if (!location)
            return res.status(400).json({ error: "Could not add location!" })
        return res.status(200).json(location);
    } catch (error) {
        return res.status(500).json({ error: 'an error occurred!' })
    }
}

const fetchLocations = async (req, res) => {
    try {
        const memberId = req.query.memberId;
        if (!memberId) {
            return res.status(400).json({ error: "Member ID is required" });
        }
        const locations = await Location.find({ memberId: memberId });
        if (!locations)
            return res.status(400).json({ error: "Locations not found" })
        return res.status(200).json(locations);
    } catch (error) {
        return res.status(500).json({ error: "An error occurred!" });
    }
}

const updateStatus = async (req, res) => {
    const { locationId } = req.body;
    if (!locationId) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    const updatedLocation = await Location.findByIdAndUpdate(
        locationId,
        { collectionStatus: 1 },
        { new: true } // Returns the updated document
    );
    if(!updatedLocation)
        return res.status(400).json({error:"Location Not Found"})

    return res.status(200).json(updatedLocation);
}

const fetchAllLocations = async (req,res) => {
    try{
        const locations = await Location.find();
        if(!locations)
            return res.status(400).json({error:"No locations found"});
        return res.status(200).json(locations);
    }catch(error){
        return res.status(500).json({error:"An error occurred"})
    }
}

module.exports = { assignLocation, fetchLocations,updateStatus,fetchAllLocations };