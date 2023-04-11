import { atom } from "recoil";

export const stateGender = atom<string | undefined>({
  key: "stateGender",

  default: "",
});

export const stateTarget = atom<string | undefined>({
  key: "stateTarget",

  default: "",
});

export const stateCategory = atom<string | undefined>({
  key: "stateCategory",

  default: "",
});

export const stateBrand = atom<string | undefined>({
  key: "stateBrand",

  default: "",
});

export const stateFree = atom<string | undefined>({
  key: "stateFree",

  default: "",
});
