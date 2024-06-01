import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import logoString from "@/assets/icon.jpeg";

const Header: React.FC = () => {
  return (
    <header className="z-1 flex items-center justify-center py-5">
      <div className="flex w-2/3 items-center justify-between">
        <h1 className="text-4xl font-bold text-app-color ">Wearable</h1>
        <div className="z-10 rounded-full">
          <img src={logoString} alt="logo" className="size-16 rounded-full" />
        </div>
        <NavigationMenu className="w-3/4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="#ai">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  AI
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#share">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Share
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#download">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Download now
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
