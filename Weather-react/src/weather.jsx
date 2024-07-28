import Cardi from "./card";
import Select from "./select";
import { useState } from "react";

export default function Weather() {
  let [info, setInfo] = useState({});
  let updateData = (data) => {
    console.log(data);
    setInfo(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ye apna app hai!!</h1>
      <Select updateData={updateData}></Select>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Cardi info={info} />
      </div>
    </div>
  );
}
