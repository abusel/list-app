import DropDown from "./dropDown.js";
import { useState, useEffect } from "react";
function ListItem({
  list,
  setSelectedListId,
  setSelectedPage,
  lists,
  setLists,
  hover,
  setHover,
  clicked,
}) {
  const [showDrop, setShowDrop] = useState(false);
  useEffect(() => {
    setShowDrop(false);
  }, [clicked]);

  return (
    <>
      <div
        className={hover && !showDrop ? "listItem noClick" : "listItem"}
        onClick={() => {
          setSelectedListId(list.id);
          setSelectedPage("view");
        }}
      >
        <div className="listItemWrapper">
          <p className="listText">
            {list.title.length > 23
              ? list.title.substring(0, 23) + "..."
              : list.title}
          </p>
          {showDrop && (
            <DropDown
              setSelectedPage={setSelectedPage}
              setSelectedListId={setSelectedListId}
              list={list}
              lists={lists}
              setLists={setLists}
              setShowDrop={setShowDrop}
            />
          )}

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={showDrop ? "selectedLine ellipses" : "ellipses"}
            onClick={(e) => {
              e.stopPropagation();
              setShowDrop((showDrop) => !showDrop);
              setHover((hover) => !hover);
            }}
          >
            <path
              className="ellipsesBackground"
              d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
              fill="none"
            />
            <g clip-path="url(#clip0_2_861)" className="ellipsesDots">
              <path
                d="M20.375 16C20.375 14.9648 21.2148 14.125 22.25 14.125C23.2852 14.125 24.125 14.9648 24.125 16C24.125 17.0352 23.2852 17.875 22.25 17.875C21.2148 17.875 20.375 17.0352 20.375 16ZM14.125 16C14.125 14.9648 14.9648 14.125 16 14.125C17.0352 14.125 17.875 14.9648 17.875 16C17.875 17.0352 17.0352 17.875 16 17.875C14.9648 17.875 14.125 17.0352 14.125 16ZM11.625 16C11.625 17.0352 10.7855 17.875 9.75 17.875C8.71445 17.875 7.875 17.0352 7.875 16C7.875 14.9648 8.71445 14.125 9.75 14.125C10.7855 14.125 11.625 14.9648 11.625 16Z"
                fill="#242424"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_861">
                <rect
                  width="17.5"
                  height="20"
                  fill="white"
                  transform="translate(7.25 6)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      {/* {showDrop && (
        <DropDown
          setSelectedPage={setSelectedPage}
          setSelectedListId={setSelectedListId}
          list={list}
          lists={lists}
          setLists={setLists}
          setShowDrop={setShowDrop}
        />
      )} */}
    </>
  );
}
export default ListItem;
