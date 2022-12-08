const router = require("express").Router();

const {createResume, readResume} = require("../controller/resume");

const {signup_post,login_post} = require("../controller/authControllers");

router.get("/", (req,res) => {
    res.status(200).json({
        status: "server is running and ready to receive requests ..."
    })
})

router.post('/signup', signup_post);
router.post('/login', login_post);


router.post("/saveResume",createResume);
router.get("/readResume/:user", readResume);

module.exports = router;