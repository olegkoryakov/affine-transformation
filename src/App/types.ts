export interface App {
  translate(x: number, y: number): void,
  scale(x: number, y: number): void,
  rotate(angle: number): void,
  flip(): void,
}
