import { LucideIcon } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export interface NavItemsModel {
  items: [string, string, ForwardRefExoticComponent<LucideIcon>];
}

export interface UserNavProp {
  name: string;
}
