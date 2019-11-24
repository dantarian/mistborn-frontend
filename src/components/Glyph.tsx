import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';

const GLYPH_NAMES = [
  'aluminium',
  'atium',
  'bendalloy',
  'brass',
  'bronze',
  'cadmium',
  'chromium',
  'copper',
  'duralumin',
  'electrum',
  'gold',
  'iron',
  'lerasium',
  'malatium',
  'nicrosil',
  'pewter',
  'steel',
  'tin',
  'zinc'
] as const;
type GlyphTuple = typeof GLYPH_NAMES;
export type GlyphName = GlyphTuple[number];

export interface IGlyphProps {
  name: GlyphName;
  big?: boolean;
  altText?: string;
}

const useStyles = makeStyles({
  icon: {
    height: '1em',
    width: '1em',
    verticalAlign: 'middle'
  },
  bigIcon: {
    height: '8em',
    width: '8em',
    verticalAlign: "middle"
  }
});

const Glyph: React.FC<IGlyphProps> = props => {
  const classes = useStyles(props);

  return <Icon>
    <img
      src={require(`./glyphs/${props.name}.svg`)}
      className={props.big ? classes.bigIcon : classes.icon}
      alt={props.altText || ""}
    />
  </Icon>
};

export const randomGlyph = (altText?: string) => {
  const glyph = GLYPH_NAMES[Math.floor(Math.random() * GLYPH_NAMES.length)];
  return <Glyph name={glyph} altText={altText} />;
};

export default Glyph;

