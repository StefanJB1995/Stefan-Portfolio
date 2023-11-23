export class Project {
    // id?: number;
    // title?: string;
    // description?: string;
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imgName: string[],
        public folderName: string,
        public github: string,
        public website: string
    ) { }
}