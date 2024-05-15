import { IoCloseOutline } from "react-icons/io5";

export const MobileMenu = ({ items }) => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content items-end">
        <label
          className="btn btn-ghost btn-circle"
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
        >
          <IoCloseOutline className="w-5 h-5" />
        </label>
        {items.map((item, i) => (
          <li key={i}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
