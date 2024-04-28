import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import  {uploadAWSURLGenrator, updatePlantImage, getResult} from  './../controller/plantController.js'


//router object
const router = express.Router();
const plant = express();
// plant.use(bodyParser.urlencoded({ extended: true }));
plant.use(express.static("./public"));

router.get('/get-upload-url', uploadAWSURLGenrator)
router.post('/update-plant-image', updatePlantImage)
router.get('/get-results', getResult)

export default router;