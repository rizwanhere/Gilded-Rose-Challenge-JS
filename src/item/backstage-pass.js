const BaseUpdateStrategy = require("./updateStrategy");

class BackstagePassUpdateStrategy extends BaseUpdateStrategy {
  appliesTo(item) {
    return item.name === "Backstage passes to a TAFKAL80ETC concert";
  }

  updateItem(item) {
    let qualityIncrement = 1;
    if (item.sellIn < 1) {
      qualityIncrement = -item.quality;
    } else if (item.sellIn < 6) {
      qualityIncrement = 3;
    } else if (item.sellIn < 11) {
      qualityIncrement = 2;
    }

    super.setQuality(item, item.quality + qualityIncrement);
    item.sellIn -= 1;
  }
}

module.exports = BackstagePassUpdateStrategy;
