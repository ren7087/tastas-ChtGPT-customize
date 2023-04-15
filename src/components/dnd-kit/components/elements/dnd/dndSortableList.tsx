import { useMySortable } from "../../../features/hooks/useMyDndSortable";
import type { StateDndCard } from "../../../../../../state/recoil/stateDnd";

import { RxPerson } from "react-icons/rx";
import { TbTargetArrow } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { TbBrandDenodo } from "react-icons/tb";
import { VscGripper } from "react-icons/vsc";
import React from "react";

type Prop = {
  card: StateDndCard;
};

const ItemIcon = ({ selectedIcon }: { selectedIcon: string | undefined }) => {
  if (selectedIcon == "gender") {
    return <RxPerson className="w-4 h-4 mr-2" />;
  }
  if (selectedIcon == "target") {
    return <TbTargetArrow className="w-4 h-4 mr-2" />;
  }
  if (selectedIcon == "category") {
    return <BiCategoryAlt className="w-4 h-4 mr-2" />;
  }
  if (selectedIcon == "brand") {
    return <TbBrandDenodo className="w-4 h-4 mr-2" />;
  }
  return null;
};

const DndSortableList = React.memo(
  ({ card }: Prop) => {
    const { uuid, icon, name } = card;

    const { sortableProp } = useMySortable(uuid);

    return (
      <li className="flex m-8" {...sortableProp}>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <VscGripper />
          <ItemIcon selectedIcon={icon && icon} />
          {name}
        </button>
      </li>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.card.uuid === nextProps.card.uuid;
  }
);

DndSortableList.displayName = "DndSortableList";

export default DndSortableList;
