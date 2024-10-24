"use client";

import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { IconButton, MenuHandler, MenuList, Menu as NavMenu } from "@material-tailwind/react";
import { usePathname } from "@/i18n/routing";
import Navigation from "./Navigation";

const Menu = ({ color, menuStyles }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  // close menu on navigation
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  // menu styles
  const styles = {
    menuButton: `text-2xl`,
    menuList: `w-full`,
    navigation: {
      container: `flex flex-col`,
      item: `w-full label capitalize py-4`,
    },
  };

  return (
    <nav className={menuStyles}>
      <NavMenu open={openMenu} handler={setOpenMenu}>
        {/* trigger */}
        <MenuHandler>
          <IconButton
            size="lg"
            variant="text"
            color={color}
            onClick={() => setOpenMenu(!openMenu)}
            className={styles.menuButton}
          >
            {openMenu ? <MdClose /> : <MdMenu />}
          </IconButton>
        </MenuHandler>

        {/* menu list */}
        <MenuList className={styles.menuList}>
          {/* navigation items */}
          <Navigation color="black" listStyles={styles.navigation.container} itemStyles={styles.navigation.item} />
        </MenuList>
      </NavMenu>
    </nav>
  );
};

export default Menu;
