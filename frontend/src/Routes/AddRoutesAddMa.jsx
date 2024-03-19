import React from "react";
import { Route } from "react-router-dom";
import AddTests from "../pages/Subjects/AddTests";
const AddRoutesAddMa = () =>{
  const add = ["dklasdakl", "dklasdmaht2akl", "dklaarbecsdakl" , "dklas45dakl" 
, "dkl6f5f5as24akl" , "dklaenglishsdakl" , "dklfrnasasdakl" ,"dklamath1sdakl"];
  const routes = [];
  for (let i = 0; i < 8; i++) {
    routes.push(
      <React.Fragment key={i}>
        <Route
          path={`/${add[i]}`}
          element={<AddTests  IndexMatrail={i} />}
        />
      
      </React.Fragment>
    );
  }
  return routes;
};
export default AddRoutesAddMa;