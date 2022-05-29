import { IAddItem } from './interfaces/IAddItem';

export class PickPercent {
  private array: IAddItem[] = [];

  public add(options: IAddItem) {
    const once = this.array.filter((item) => item.once);

    if (once.includes(options)) {
      throw TypeError(
        `Item "${options}" was already added with option "once: true"`
      );
    }

    if (options.percent < 0 || options.percent > 100) {
      throw TypeError(`Item "${options}" - percentage out of range!`);
    }

    this.array.push(options);
  }

  public final() {
    if (this.array.length === 0) return null;

    const total = this.array.reduce<number>((acc, item) => {
      acc += item.percent;
      return acc;
    }, 0);

    const random = Math.random() * total;

    const result = this.array
      .sort((a, b) => a.percent - b.percent)
      .find((item) => random <= item.percent);
    console.log(random, result);

    if (result?.once) this.array.slice(this.array.indexOf(result));
    if (result) return result.name;
  }
}
