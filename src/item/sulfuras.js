const BaseUpdateStrategy = require("./updateStrategy");

class SulfurasUpdateStrategy extends BaseUpdateStrategy {
  appliesTo(item) {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }

  updateItem(item) {
    // we never update Sulfuras
  }
}

module.exports = SulfurasUpdateStrategy;
