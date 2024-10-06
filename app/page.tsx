import React from "react";
import Card from "./components/Card";

const page = () => {
  return (
    <div>
      <Card
        name="Tayyaba Hussain"
        rollNo={42883}
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        dayTime="Monday-02:00PM-05:00PM"
      />
       <Card
        name="Shumaila"
        rollNo={42838}
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        dayTime="Tuesday-07:00PM-10:00PM"
      />
       <Card
        name="Najma"
        rollNo={42834}
        distanceLearning="No"
        city="Karachi"
        center="Governer House Karachi"
        campus="Main"
        dayTime="Wednesday-09:00AM-12:00PM"
      />
    </div>
  );
};

export default page;
