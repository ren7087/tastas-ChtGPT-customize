import { atom } from "recoil";

export const stateGender = atom<string>({
  key: "stateGender",

  default: "",
});

export const stateTarget = atom<string[]>({
  key: "stateTarget",

  default: [],
});

export const stateCategory = atom<string>({
  key: "stateCategory",

  default: "",
});

export const stateBrand = atom<string>({
  key: "stateBrand",

  default: "",
});

export const stateFree = atom<string>({
  key: "stateFree",

  default: "",
});
