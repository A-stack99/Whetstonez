import * as React from "react"
import Svg, { Rect, G, Path, Circle, Defs, ClipPath } from "react-native-svg"
const Notification = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={43} height={43} x={0.5} y={0.5} stroke="#F5F5F5" rx={9.5} />
    <G clipPath="url(#a)">
      <Path
        stroke="#0B0C15"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M22 16.94v3.33M22.02 12.5c-3.68 0-6.66 2.98-6.66 6.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1c-.01-3.66-3.01-6.66-6.67-6.66Z"
      />
      <Path
        stroke="#0B0C15"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M25.33 29.32c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35"
      />
      <Circle cx={27} cy={15} r={4} fill="#E74C3C" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 10h24v24H10z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Notification;
