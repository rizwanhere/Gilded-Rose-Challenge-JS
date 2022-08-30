class BaseUpdateStrategy {
  getMinimumQuality() {
    return 0;
  }

  getMaximumQuality() {
    return 50;
  }

  appliesTo(item) {
    return true;
  }

  setQuality(item, value) {
    if (value < this.getMaximumQuality() && value > this.getMinimumQuality()) {
      item.quality = value;
    } else if (value >= this.getMaximumQuality()) {
      item.quality = this.getMaximumQuality();
    } else if (value <= this.getMinimumQuality()) {
      item.quality = this.getMinimumQuality();
    }
  }

  updateItem(item) {
    const qualityDecrement = item.sellIn < 1 ? 2 : 1;
    this.setQuality(item, item.quality - qualityDecrement);
    item.sellIn -= 1;
  }
}

module.exports = BaseUpdateStrategy;
