import * as React from "react";
import Glyph from "../src/components/Glyph";
import Sheet, { Power, Equipment } from "../src/components/Sheet";
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
    charm={3}
    wits={6}
    resources={5}
    influence={7}
    spirit={3}
    drive="Give the Skaa hope"
    profession="Pit fighter"
    speciality="Underworld contacts"
    feature="Unusually scarred and ugly"
    personality="Relentless"
    traits={["Comfortable in Wilderness"]}
    tragedy="My noble father paid to have me killed when he found out about me, ending my pit-fighting career and forcing me to abandon the life I'd known."
    destiny="To return non-Lord-Ruler religion to the Skaa."
    secrets={[
      "Existence of nicrosil as a metal, and its allomantic effects.",
      "House Demaux were breeding mistings via a brothel.",
      "House Venture's research mines, and the experiments conducted there.",
      "How Koloss are made.",
      "Basics of hemallurgy.",
      "Existence of Preservation and Ruin (but not their names).",
      "Steel Ministry dopes nobles' wine with atium."
    ]}
    powers={[
      new Power("Pewter", "Allomancy", 8, [
        "Unconscious Burning",
        "Slow Burning x2",
        "Denser Tissues",
        "Extreme Speed",
        "Inhuman Endurance (Trait)"
      ]),
      new Power("Skaa", undefined, undefined, [
        "Urban Racer",
        "Friends in Low Places"
      ])
    ]}
    equipment={[
      new Equipment("Misting Vial of Pewter", true, 3),
      new Equipment("Misting Vial of Pewter", true, 3),
      new Equipment("Violin", true),
      new Equipment("Short Staff", true, undefined, 1, "Touch/Striking"),
      new Equipment("Leather Armour", true, undefined, -1)
    ]}
  />
));
