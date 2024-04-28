import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import plantData from "./../data/plantData.json";
import 'react-vertical-timeline-component/style.min.css';
import { RiPlantFill } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import { IoMdSunny, IoIosInformationCircle } from "react-icons/io";
import { GiWateringCan, GiHospitalCross, GiTreeGrowth, GiPoisonBottle } from "react-icons/gi";
import { VscColorMode } from "react-icons/vsc";
import { ImLocation2 } from "react-icons/im";
import { styles } from "../style";
import { experiences } from '../constants'
import { textVariant } from "../utils/motion";

const propertyIcons =[
    {
        propName : "name",
        icon : <RiPlantFill color="green" size={140}/>
    },
    {
        propName : "botanicalName",
        icon : <TbPlant2 color="green" size={32}/>
    },
    {
        propName : "sunExposure",
        icon : <IoMdSunny color="green" size={32}/>
    },
    {
        propName : "watering",
        icon : <GiWateringCan color="green" size={32}/>
    },
    {
        propName : "color",
        icon : <VscColorMode color="green" size={32}/>
    },
    {
        propName : "region",
        icon : <ImLocation2 color="green" size={32}/>
    },
    {
        propName : "medicinalUses",
        icon : <GiHospitalCross color="green" size={32}/>
    },
    {
        propName : "yearsToGrow",
        icon : <GiTreeGrowth color="green" size={32}/>
    },
   
    {
        propName : "overview",
        icon : <IoIosInformationCircle color="green" size={32}/>
    },
    {
        propName : "poisonousToHumans",
        icon : <GiPoisonBottle color="green" size={32}/>
    },
   
]

const ExperienceCard = ({icon,title, description})=>(

   

  <VerticalTimelineElement
  contentStyle={{background: 'rgb(0, 140, 0, 0.8)', color:'#fff', width:'400px', marginLeft:'60px', marginRight:'60px'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  className="text-center"
  textClassName = {{width : '64px'}}
//   date={experience.date}
  iconStyle={{background: 'white'}}
  icon={
    
      
        propertyIcons.map((property, index)=>{
            return property.propName===title && property.icon
        })
      
   
  }>
  <div className="">
    <h3 className="text-white text-[24px] font-bold capitalize">{title.split(/(?=[A-Z])/).map(word=>word+ " ")}</h3>
    <p className="text-white text-[16px] font-semibold" style={{margin:0}}>{typeof description ==="boolean"?description.toString():description}</p>
  </div>

  {/* <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point,index)=>(
      <li 
      key={`experience-point-${index}`}
      className="text-white-100 text-[14px] pl-1 tracking-wider">
      {point}
      </li>
    ))}
  </ul> */}
  </VerticalTimelineElement>
  )

export default function PlantInfoVert({name}) {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <div className="text-center">
            <h2 className={``}>
            Plant Informations</h2>
        </div>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={true} lineColor='#09bef0'>
        {plantData.data.map((plant, index) => {
            return plant.name===name && 
            Object.keys(plant).map((key, index) => {
            return (

                propertyIcons.map((property, index)=>{

                    return property.propName===key && <ExperienceCard icon = {''} title = {key} description = {plant[key]}/>

                })
                
                
            );
            });
        })}
        </VerticalTimeline>
      </div>
    </>
  )
}


