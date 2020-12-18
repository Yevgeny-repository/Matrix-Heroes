export class HeroModel {
    constructor(
        public id: string,
        public name: string,
        public ability: string,
        public date: Date,
        public suit: string,
        public starting_power: number,
        public current_power: number,
        public trainingCount: number
      ) { }
}
