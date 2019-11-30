import * as React from "react";
import Glyph from "../src/components/Glyph";
import Sheet from "../src/components/Sheet";
import { storiesOf } from "@storybook/react";

storiesOf("Glyph", module)
  .add("aluminium", () => <Glyph name="aluminium" />)
  .add("atium", () => <Glyph name="atium" />)
  .add("bendalloy", () => <Glyph name="bendalloy" />)
  .add("brass", () => <Glyph name="brass" />)
  .add("bronze", () => <Glyph name="bronze" />)
  .add("cadmium", () => <Glyph name="cadmium" />)
  .add("chromium", () => <Glyph name="chromium" />)
  .add("copper", () => <Glyph name="copper" />)
  .add("duralumin", () => <Glyph name="duralumin" />)
  .add("electrum", () => <Glyph name="electrum" />)
  .add("gold", () => <Glyph name="gold" />)
  .add("iron", () => <Glyph name="iron" />)
  .add("lerasium", () => <Glyph name="lerasium" />)
  .add("malatium", () => <Glyph name="malatium" />)
  .add("nicrosil", () => <Glyph name="nicrosil" />)
  .add("pewter", () => <Glyph name="pewter" />)
  .add("steel", () => <Glyph name="steel" />)
  .add("tin", () => <Glyph name="tin" />)
  .add("zinc", () => <Glyph name="zinc" />)
  .add("big glyph", () => <Glyph name="atium" size={8} />)
  .add("medium glyph", () => <Glyph name="atium" size={5} />)
  .add("small glyph", () => <Glyph name="atium" size={0.5} />);

storiesOf("Sheet", module).add("Populated", () => (
  <Sheet
    name="Kalden"
    nickname="Scars"
    concept="Pewterarm Brawler"
    crewName="The Goldblades"
    cause="Make Urteau ours"
    target="The Steel Ministry"
    method="Theft/Spying"
    race="Skaa"
    gender="Male"
    height="5' 10''"
    weight="220 lbs"
    physique={6}
    charm={2}
    wits={6}
    resources={5}
    influence={6}
    spirit={3}
  />
));
