import React from "react";
import MiniCardGrid from "@oofin008/santi_component_ui/dist";
export default function Home() {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <MiniCardGrid data={Mockdata} />
    </div>
  );
}

const Mockdata = [
  {
    title: "test 1",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 1,
  },
  {
    title: "test 2",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 100,
  },
  {
    title: "test 3",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 1234,
  },
  {
    title: "test 4",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 12121,
  },
  {
    title: "test 5",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 1435345,
  },
  {
    title: "test 6",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 154323423,
  },
  {
    title: "test 7",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 1321342,
  },
  {
    title: "test 8",
    content: "lorem ipsum project description action mission mansion",
    startDate: "Jan, 2021",
    endDate: "-",
    clientName: "Ananta Solutions Co,. Ltd",
    teamSize: 13124452,
  },
];
