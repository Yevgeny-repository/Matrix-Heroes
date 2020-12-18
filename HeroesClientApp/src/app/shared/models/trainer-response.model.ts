export class TrainerResponseModel {
    constructor(
        public action: string,
        public isAuthenticated: boolean,
        public message: string,
      ) { }
}

