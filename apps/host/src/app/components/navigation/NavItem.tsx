import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import * as React from "react";
import { PropsWithChildren } from "react";

interface INavItemProps extends PropsWithChildren {
  to: string;
}

export function NavItem({ children, to }: INavItemProps) {
  return <NavLink to={to}>
    {
      ({ isActive }) => <Button isActive={isActive}>
        {children}
      </Button>
    }
  </NavLink>;
}
