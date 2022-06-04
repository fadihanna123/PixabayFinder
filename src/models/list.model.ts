export class IList {
    constructor(
        public total: number,
        public totalHits: number,
        public hits: HitsOfList[]
    ) {}
}

export class HitsOfList {
    constructor(
        public id: number,
        public pageURL: string,
        public type: string,
        public tags: string,
        public previewURL: string,
        public previewWidth: number,
        public previewHeight: number,
        public webformatURL: string,
        public webformatWidth: number,
        public webformatHeight: number,
        public largeImageURL: string,
        public imageWidth: number,
        public imageHeight: number,
        public imageSize: number,
        public views: number,
        public downloads: number,
        public favorites: number,
        public likes: number,
        public comments: number,
        public user_id: number,
        public user: string,
        public userImageURL: string
    ) {}
}
