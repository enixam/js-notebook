import React from "react";
import { Cell } from "../../redux";
import TextCell from "../TextCell";
import CodeCell from "../CodeCell";
import ActionBar from "../ActionBar";
import { useSelector } from "../../hooks";
import classes from "./CellItem.module.css";

interface CellItemProps {
  cell: Cell;
}

const CellItem: React.FC<CellItemProps> = ({ cell }) => {
  return (
    <>
      {cell.type === "code" && (
        <div className="cell-list-item">
          <div className="code-cell">
            <div className="action-bar-wrapper">
              <ActionBar id={cell.id} />
            </div>
            <CodeCell cell={cell} />
          </div>
        </div>
      )}
      {cell.type === "text" && (
        <div className="cell-list-item">
          <div className="text-cell">
            <TextCell cell={cell} />
            <ActionBar id={cell.id} />
          </div>
        </div>
      )}
    </>
  );
};
export default React.memo(CellItem);