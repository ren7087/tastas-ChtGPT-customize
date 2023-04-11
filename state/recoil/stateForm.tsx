import { atom } from "recoil";

export const stateGender = atom({
	key: "stateGender",

	default: {},
});

export const stateTarget = atom({
	key: "stateTarget",

	default: {},
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
