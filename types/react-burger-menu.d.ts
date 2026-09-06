// react-burger-menu ships no types, and @types/react-burger-menu only covers
// v2 and only the package root. The menu is imported by its deep path so that
// only the slide variant ends up in the bundle, so declare that path here.
declare module 'react-burger-menu/lib/menus/slide' {
  import type { ComponentType, ReactNode } from 'react';

  interface SlideMenuProps {
    children?: ReactNode;
    right?: boolean;
    isOpen?: boolean;
    customBurgerIcon?: ReactNode | false;
    customCrossIcon?: ReactNode | false;
    onStateChange?: (state: { isOpen: boolean }) => void;
    disableAutoFocus?: boolean;
    id?: string;
  }

  const SlideMenu: ComponentType<SlideMenuProps>;
  export default SlideMenu;
}
