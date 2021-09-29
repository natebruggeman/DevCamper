
//@desc     get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ "success": true, message: 'Show all bootcamps' })
}


//@desc     get a single bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ "success": true, message: `Display bootcamp ${req.params.id}` })
}    


//@desc     create a bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ "success": true, message: 'Create new bootcamp' })
}

//@desc     update a bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ "success": true, message: `Update bootcamp ${req.params.id}` })
}


//@desc     delete a bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ "success": true, message: 'Delete a bootcamp' })
}



