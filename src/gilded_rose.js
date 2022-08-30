const {
  Item,
  AgedBrieUpdateStrategy,
  BackstagePassUpdateStrategy,
  BaseUpdateStrategy,
  SulfurasUpdateStrategy,
} = require("./item");

class Shop {
  constructor(items = []) {
    this.items = items;
    this.updateStrategies = [
      new AgedBrieUpdateStrategy(),
      new BackstagePassUpdateStrategy(),
      new SulfurasUpdateStrategy(),
      new BaseUpdateStrategy(),
    ];
  }

  updateQuality() {
    for (let item of this.items) {
      const strategy = this.updateStrategies.find((strategy) =>
        strategy.appliesTo(item)
      );
      strategy.updateItem(item);
    }
    return this.items;
  }
}

module.exports = {
  Shop,
  Item,
};
