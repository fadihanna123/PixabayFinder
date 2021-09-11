import { atom } from "recoil";
import { IList, SearchForm } from "types";

export const searchFormState = atom<SearchForm>({
  key: "searchFormState",
  default: {
    query: "",
  },
});

export const listState = atom<IList | null>({
  key: "listState",
  default: null,
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});

export const togglerState = atom<boolean>({
  key: "togglerState",
  default: false,
});

export const imagePreviewerState = atom<string>({
  key: "imagePreviewerState",
  default: "",
});
