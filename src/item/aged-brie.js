const BaseUpdateStrategy = require("./updateStrategy");

class AgedBrieUpdateStrategy extends BaseUpdateStrategy {
  appliesTo(item) {
    return item.name === "Aged Brie";
  }

  updateItem(item) {
    item.sellIn -= 1;
    const qualityIncrement = item.sellIn < 0 ? 2 : 1;
    super.setQuality(item, item.quality + qualityIncrement);
  }
}

module.exports = AgedBrieUpdateStrategy;
