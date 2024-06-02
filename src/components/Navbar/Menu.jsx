export const DropdowMenu = ({ label, items }) => {
  return (
    <li className="dropdown dropdown-hover">
      <a tabIndex={0} role="button">
        {label}
      </a>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1] w-[200px] menu bg-base-200 rounded-box shadow-md`}
      >
        {items.map((item, i) => (
          <li key={i}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};
