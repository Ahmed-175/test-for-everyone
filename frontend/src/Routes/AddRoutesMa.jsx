import React from "react";
import { Route } from "react-router-dom";
import MaterialComponent from "../pages/Test3Sec/MaterialComponent";
import TestContainer from "../pages/Test3Sec/TestContainer";
import Results from "../pages/Test3Sec/Resluts";

const AddRoutesMa = () => {
  const matiral = [
    "Physics",
    "AppliedMathematics",
    "Arabic",
    "Biology",
    "Chemistry",
    "Englich",
    "French",
    "Puremathematics",
  ];
  const routes = [];

  for (let i = 0; i < 8; i++) {
    routes.push(
      <React.Fragment key={i}>
        <Route
          path={`/${matiral[i]}`}
          element={<MaterialComponent materialIndex={i} />}
        />
        <Route
          path={`/${matiral[i]}/Test/:id`}
          element={<TestContainer materialIndex={i} />}
        />
        <Route
          path={`/${matiral[i]}/reslut/:id`}
          element={<Results materialIndex={i} />}
        />
      </React.Fragment>
    );
  }
  return routes;
};
export default AddRoutesMa;