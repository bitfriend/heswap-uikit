import React, { useState } from "react";
import LuckyChipToggle from "./LuckyChipToggle";

export default {
  title: "Components/LuckyChipToggle",
  component: LuckyChipToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <LuckyChipToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <LuckyChipToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
