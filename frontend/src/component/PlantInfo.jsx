import React from "react";
import Accordion from "./InfoAccordian";
import plantData from "./../data/plantData.json";
import PlantInfoCard from "./PlantInfoCard";

export default function PlantInfo({name}) {
  return (
    <div className="App flex gap-6 flex-wrap w-[80%]  m-auto mt-8">
      {plantData.data.map((plant, index) => {
       
            console.log(plant.name, name)
        
        return plant.name===name && 
         Object.keys(plant).map((key, index) => {
          return (
            <div key={index} className="">
              <PlantInfoCard infoIcon = {''} infoTitle = {key} infoFDes = {plant[key]}/>
              {/* <Accordion title={key} content={plant[key]} /> */}
            </div>
          );
        });
      })}

      {/* <Accordion
        title={Object.keys(plantData.data[2])[0]}
        content={plantData.data[2].overview}
      /> */}
      {/* Add more accordion cards as needed */}
    </div>
  );
}
