import { atom } from "recoil";

export const stateActiveDndId = atom<string | null>({
	key: "stateActiveDndId",

	default: null,
});
