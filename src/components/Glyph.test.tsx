import { createMount, createShallow } from "@material-ui/core/test-utils";
import "jest-enzyme";
import * as React from "react";
import Glyph, { randomGlyph } from "./Glyph";

describe("Glyph", () => {
  let shallow: Function = createShallow();

  describe("Simple usage", () => {
    const glyph = shallow(<Glyph name="steel" />);

    it("renders an image", () => {
      expect(glyph).toContainMatchingElement("img");
    });

    it("has an empty alt text", () => {
      // These glyphs are intended to be decorative, so no alt text is preferred.
      expect(glyph).toContainMatchingElement("[alt='']");
    });
  });

  describe("Big glyph", () => {
    const glyph = shallow(<Glyph name="steel" size={5} />);

    it("renders", () => {
      // Can't explicitly check size, so just check that it doesn't fail completely.
      expect(glyph).toContainMatchingElement("img");
    });
  });

  describe("Non-big glyph", () => {
    const glyph = shallow(<Glyph name="steel" size={0.5} />);

    it("is not big", () => {
      // Can't explicitly check size, so just check that it doesn't fail completely.
      expect(glyph).toContainMatchingElement("img");
    });
  });

  describe("With alt text", () => {
    const glyph = shallow(<Glyph name="steel" altText="Description" />);

    it("has alt text on the image", () => {
      expect(glyph).toContainMatchingElement("img[alt='Description']");
    });
  });
});

describe("randomGlyph", () => {
  let mount: Function = createMount();

  it("produces a random glyph", () => {
    const glyph = mount(randomGlyph());
    expect(glyph).toHaveDisplayName("Glyph");
  });

  it("can take a string argument for alt text", () => {
    const glyph = mount(randomGlyph("Description"));
    expect(glyph).toHaveDisplayName("Glyph");
    expect(glyph).toContainMatchingElement("img[alt='Description']");
  });
});
