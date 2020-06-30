type Color = keyof ResistorColor["values"]
type ResistorBands = [Color,Color]

export class ResistorColor {
  private colors: ResistorBands;
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

  constructor(colors: ResistorBands) {
    this.colors = colors;
  }
  value = (): number => {
    const [a,b] = this.colors
    return this.values[a]*10 + this.values[b];
  };
}
