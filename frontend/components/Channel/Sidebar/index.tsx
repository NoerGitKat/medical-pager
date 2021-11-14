import Image from "next/image";
import icons from "./data";

const Sidebar = () => {
  return (
    <aside className="channel-list__sidebar">
      {icons.map((icon, i) => (
        <div key={icon.name} className={`channel-list__sidebar__icon${i + 1}`}>
          <div className={`channel-list__sidebar__icon${i + 1}__inner`}>
            <Image src={icon.path} alt={`${icon.name} Icon`} width="30" height="30" />
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
