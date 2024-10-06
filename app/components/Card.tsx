import { time } from "console";
import React from "react";

interface Tprops {
  name: string;
  rollNo: number;
  distanceLearning: string;
  city: string;
  center: string;
  campus: string;
  dayTime: string;
}

const Card = (props: Tprops) => {
  return (
    <div className="md:content-around w-96 bg-teal-200 shadow rounded-3xl py-5 px-10 mx-20 my-20">
      <b>
        Name: {props.name} <br />
        Roll No: {props.rollNo} <br />
        Distance Learning: {props.distanceLearning} <br />
        City: {props.city} <br />
        Center: {props.center} <br />
        Campus: {props.campus} <br />
        Days/Time: {props.dayTime} <br />
      </b>
    </div>
  );
};

export default Card;
