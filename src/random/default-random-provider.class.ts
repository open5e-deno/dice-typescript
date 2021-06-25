import { RandomProvider } from "./random-provider.class.ts";

export class DefaultRandomProvider implements RandomProvider {
  numberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
