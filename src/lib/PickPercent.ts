import _ from 'lodash';
import { IAddItem } from './interfaces/IAddItem';

export class PickPercent {
  private items: IAddItem[] = [];

  public add(option: IAddItem) {
    if (option.percent < 0 || option.percent > 100) {
      throw TypeError(`Item "${option.name}" - percentage out of range!`);
    }

    this.items.push(option);
  }

  public addMany(options: IAddItem[]) {
    for (const option of options) {
      this.add(option);
    }
  }

  public final() {
    if (this.items.length === 0) return null;

    let random = _.random(0, 100);

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
