import { NavLink } from "react-router-dom";
const ObjectDetailHeader = () => {
  const activeStyle = "text-red-500 text-lg font-bold";
  return (
    <header>
      <nav>
        <NavLink to={"/sectionOne"}>
          Back
        </NavLink>
        <NavLink
          to={`.`}
          end
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Overview
        </NavLink>
        <NavLink
          to={`detail`}
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Details
        </NavLink>
        <NavLink
          to={`review`}
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Review
        </NavLink>
      </nav>
    </header>
  );
};

export default ObjectDetailHeader;
