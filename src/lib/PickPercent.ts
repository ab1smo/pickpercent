import _ from 'lodash';
import { IAddItem } from './interfaces/IAddItem';

export class PickPercent {
  private items: IAddItem[] = [];

  public add(option: IAddItem) {
    this.items.push(option);

    return this;
  }

  public addMany(options: IAddItem[]) {
    for (const option of options) {
      this.add(option);
    }
  }

  public pick() {
    if (this.items.length === 0) return null;

    const totalWeight = this.items.reduce((acc, item) => {
      acc += item.percent;
      return acc;
    }, -1);

    let random = _.random(0, totalWeight);

    for (const item of this.items) {
      random -= item.percent;

      if (random < 0) {
        if (item?.repeats && --item.repeats <= 0) {
          _.remove(this.items, item);
        }
        return item.name;
      }
    }
  }
}
