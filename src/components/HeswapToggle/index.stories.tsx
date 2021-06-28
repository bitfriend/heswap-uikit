import React, { useState } from "react";
import HeswapToggle from "./HeswapToggle";

export default {
  title: "Components/HeswapToggle",
  component: HeswapToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <HeswapToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <HeswapToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
