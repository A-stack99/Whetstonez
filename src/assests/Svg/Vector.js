import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Vector = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#235AFF"
      d="M13 8.06H8v5a1 1 0 0 1-2 0v-5H1a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 1 1 0 2Z"
    />
  </Svg>
)
export default Vector
