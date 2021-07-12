import React from "react";
import classNames from "classnames";
import "./Container.scss";

interface ContainerProps {
  weatherType: "BAD" | "GOOD";
}

const Container: React.FC<ContainerProps> = ({ weatherType, children }) => (
  <div
    className={classNames("container", {
      "container_bad-weather": weatherType === "BAD",
      "container_good-weather": weatherType === "GOOD",
    })}
  >
    {children}
  </div>
);

export default Container;
