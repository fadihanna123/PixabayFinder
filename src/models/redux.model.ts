import { SearchForm } from 'models';

import { IList } from './list.model';

export class ActionTypes {
  constructor(public type: string, public payload: void) {}
}

export class TogglerReducerTypes {
  constructor(public togglerReducer: boolean) {}
}

export class SearchFormReducerTypes {
  constructor(public searchFormReducer: SearchForm) {}
}

export class VideoReducerTypes {
  constructor(public VideoReducer: string) {}
}

export class LoadingReducerTypes {
  constructor(public loadingReducer: boolean) {}
}

export class SearchTypeReducerTypes {
  constructor(public searchTypeReducer: string) {}
}

export class ImgListReducerTypes {
  constructor(public imgListReducer: IList) {}
}

export class VideoListReducerTypes {
  constructor(public VideoListReducer: any) {}
}

export class ImageReducerTypes {
  constructor(public imageReducer: string) {}
}
