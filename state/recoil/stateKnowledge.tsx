import { atom } from "recoil";
import { Knowledge } from "../../types/knowledge";

export const stateKnowledge = atom<Knowledge[]>({
  key: "stateKnowledge",

  default: [],
});
