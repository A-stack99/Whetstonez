import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const TickMark = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h32v32H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={100}
        height={100}
        preserveAspectRatio="none"
      />
    </Defs>
  </Svg>
)
export default TickMark
