import styles from "./index.module.scss";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./Center"), {
  ssr: false,
});

import LeftSidebar from "./LeftSidebar";
import Center from "./Center";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Middle Window + Right Sidebar */}
      <DynamicComponentWithNoSSR />

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default Layout;
