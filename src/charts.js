import React from "react";
import margData from "./marg.json";
export default function charts() {
  return (
    <div>
      charts
      <div className="margGlass">
        <div>smaller</div>
      </div>
      <div>

      {margData 
      
    && margData.map((margData) => {
          console.log(margData.flavor);
        <div key={margData.flavor+margData.type+margData.strength}>{margData.flavor}</div>
      })}
    </div>
    </div>
  );
}
