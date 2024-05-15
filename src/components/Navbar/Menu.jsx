import { useState } from "react";

export const DropdowMenu = ({ label, items }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
    >
      <a tabIndex={0} role="button">
        {label}
      </a>
      {openMenu && (
        <ul
          className={`w-[200px] absolute top-12 -left-10     menu bg-base-200 rounded-box shadow-md`}
        >
          {items.map((item, i) => (
            <li key={i}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
