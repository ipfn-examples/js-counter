/**
 * @license
 * Copyright (c) 2017 Łukasz Kurowski <crackcomm@gmail.com>
 */

export class Counter {
  count: number;

  constructor(count: number = 0) {
    this.count = count;
  }

  increment(count: number) {
    this.count += count;
    return this.count;
  }

}
