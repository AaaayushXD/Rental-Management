import { LucideIcon } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export interface NavItemsModel {
  items: [string, string, ForwardRefExoticComponent<LucideIcon>];
}
