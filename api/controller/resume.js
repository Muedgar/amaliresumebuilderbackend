const Resume = require("../model/resume");

// create for the first time
const createResume = async (req,res) => {
    try {
        // since all data have been validated in the front end just create data
        // every time a user saves the first thing is to empty the cv and save again.
        await Resume.findOneAndDelete({user: req.body.user})
        .then(async d => {
            await Resume.create(req.body)
            .then(d => {
                res.status(201).json({status: "resume saved successfully!!!"});
            })
            .catch(e=> new Error(e.message));
        })
        .catch(e=> new Error(e.message))
        
    } catch (error) {
        res.status(400).json({error: "Bad Request"});
    }
}

// read the current data
const readResume = async (req,res) => {
    try {
        await Resume.findOne({user: req.params.user})
            .then(d=> {
                res.status(200).json(d);
            })
    } catch (error) {
        res.status(400).json({error: "Bad Request"});
    }
}

module.exports = {
    createResume,
    readResume
}