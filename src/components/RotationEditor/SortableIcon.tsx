import { useSortable } from "@dnd-kit/sortable";
import clsx from "clsx";
import { observer } from "mobx-react-lite";

import { ACTION_LOOKUP } from "../../lib/actions";
import Emoji from "../Emoji";
import { ActionIcon } from "../Icons";
import { actionFromId } from "./converters";

type SortableIconProps = {
  id: string;
  step: number;
  onRemove: (id: string) => void;
  active: boolean;
  disabled: boolean;
};

const SortableIcon = observer(function SortableIcon({
  id,
  step,
  onRemove,
  active,
  disabled,
}: SortableIconProps) {
  const actionName = actionFromId(id);

  const { setNodeRef, transform, transition, attributes, listeners } = useSortable({ id });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition,
      }
    : undefined;

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        if (node) {
          node.scrollIntoView = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
        }
      }}
      style={style}
      className={clsx("SortableIcon", { disabled, active }, step)}
      {...attributes}
      {...listeners}
    >
      <ActionIcon name={actionName} step={step} />

      <button
        className="remove"
        title={`Remove ${ACTION_LOOKUP[actionName].label}`}
        onClick={() => onRemove(id)}
        data-no-dnd
      >
        <Emoji emoji="❌" />
      </button>
    </div>
  );
});

export default SortableIcon;
