import * as React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles, getThemeProps } from "@material-ui/styles";

const GLYPH_NAMES = [
  "aluminium",
  "atium",
  "bendalloy",
  "brass",
  "bronze",
  "cadmium",
  "chromium",
  "copper",
  "duralumin",
  "electrum",
  "gold",
  "iron",
  "lerasium",
  "malatium",
  "nicrosil",
  "pewter",
  "steel",
  "tin",
  "zinc"
] as const;
type GlyphTuple = typeof GLYPH_NAMES;
export type GlyphName = GlyphTuple[number];

export interface IGlyphProps {
  name: GlyphName;
  size?: number;
  altText?: string;
}

const useStyles = makeStyles({
  icon: {
    height: (props: IGlyphProps) => getSize(props.size),
    width: (props: IGlyphProps) => getSize(props.size),
    verticalAlign: "middle"
  }
});

const Glyph: React.FC<IGlyphProps> = props => {
  const classes = useStyles(props);

  return (
    <Icon>
      <img
        src={require(`./glyphs/${props.name}.svg`)}
        className={classes.icon}
        alt={props.altText || ""}
      />
    </Icon>
  );
};

export default Glyph;

export const randomGlyph = (altText?: string) => {
  const glyph = GLYPH_NAMES[Math.floor(Math.random() * GLYPH_NAMES.length)];
  return <Glyph name={glyph} altText={altText} />;
};

const getSize = (size?: number) => {
  if (size == null) {
    return "1em";
  }
  return Math.max(size, 1) + "em";
};
