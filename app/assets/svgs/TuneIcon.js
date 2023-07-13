import * as React from 'react';
import Svg, {
  Rect,
  G,
  Defs,
  Pattern,
  Use,
  ClipPath,
  Image,
} from 'react-native-svg';
const TuneIcon = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={22} height={22} fill="#F5F5F5" />
    <G clipPath="url(#clip0_0_1)">
      <Rect
        width={375}
        height={812}
        transform="translate(-334 -172)"
        fill="#FAFAFA"
      />
      <Rect
        x={0.289795}
        y={0.271729}
        width={21.2102}
        height={21.2102}
        fill="url(#pattern0)"
        fillOpacity={0.6}
      />
    </G>
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_0_1" transform="scale(0.0104167)" />
      </Pattern>
      <ClipPath id="clip0_0_1">
        <Rect
          width={375}
          height={812}
          fill="white"
          transform="translate(-334 -172)"
        />
      </ClipPath>
      <Image
        id="image0_0_1"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABmUlEQVR4nO3aUWrDMBCE4T2I81h89xJys0DtC0wxpC8hYCu1Mivp/0AvoTTyjtdJ7I0AAAAAgBwuEXGNiDUi9LS2124RMbs32XPx7y8K/7y2v5ncm+3R9UDx/9a3e7M9WgsCWNyb7ZEKFwigL6IDCKDpM/LTa0/2/aU/ABGAv8iiA/yF1pstnn1/6Q9ABOAvsugAf6H1Zotn31/6A9DoAXyaej/A7EQABDA00QHtPJD5Me+1S7eCALbHlzjZXPBQ/ovq1zE9HrgvLwq/PM58ig8AQAMuzJp6i38/+LWWWdMKmDU1Wwt+WTNrWgE398zE3VUCGJpa7wANttIF6i6ICMBfFNEB46w9Z/+/09+w9bWHAIIA7Gep6AB/oTTKJah1omAEMDTRAQQwtLWgA5g1rYBZU7OZWVO/iVlTAECvmL00YvbSjNlLM2YvzbjbaEYAZgRgRgCVZX/oreSLAIIA6ID/4BIUXIKU4FrOZ0D4i8mHcPgLyregaGtVl25DoyEAMwIwIwAzZi/NmL00Y/YyAWYvAQAAACCO+QUI7czUjzPVTAAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default TuneIcon;
