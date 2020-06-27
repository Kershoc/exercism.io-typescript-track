type Color = keyof ResistorColor["values"]
type Duo<T> = {0:T, 1:T} & Array<T>

export class ResistorColor {
  private colors: Duo<Color>;
  private values = {
    black:0,
    brown:1,
    red:2,
    orange:3,
    yellow:4,
    green:5,
    blue:6,
    violet:7,
    grey:8,
    white:9};

  constructor(colors: Duo<Color>) {
    this.colors = colors;
  }
  value = (): number => {
    const [a,b] = this.colors
    return this.values[a]*10 + this.values[b];
  };
}
