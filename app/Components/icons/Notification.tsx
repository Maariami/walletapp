import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Notif({ color = "#3A3A3A" }) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.5454 20.8635C13.5454 22.5885 12.1341 23.9999 10.4091 23.9999C8.68407 23.9999 7.27271 22.5885 7.27271 20.8635"
        stroke={color}
        strokeWidth={1.04545}
        strokeLinecap="square"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7273 13.5455C17.7273 10.8795 17.7273 8.31818 17.7273 8.31818C17.7273 4.29318 14.4341 1 10.4091 1C6.38409 1 3.09091 4.29318 3.09091 8.31818C3.09091 8.31818 3.09091 10.8795 3.09091 13.5455C3.09091 17.7273 1 20.8636 1 20.8636H19.8182C19.8182 20.8636 17.7273 17.7273 17.7273 13.5455Z"
        stroke={color}
        strokeWidth={1.04545}
        strokeLinecap="square"
      />
    </Svg>
  );
}

export default Notif;
