import * as class_variance_authority_types from "class-variance-authority/types";
import { VariantProps } from "class-variance-authority";
import * as React from "react";
import React__default, { JSX } from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { IconType } from "@icons-pack/react-simple-icons";
export {
  SiFacebook as FacebookIcon,
  SiGithub as GithubIcon,
  SiGmail as GmailIcon,
  SiInstagram as InstagramIcon,
  SiLinkedin as LinkedinIcon,
  SiTelegram as TelegramIcon,
  SiTiktok as TiktokIcon,
} from "@icons-pack/react-simple-icons";
import { LucideIcon, LucideProps } from "lucide-react";
export {
  AlertOctagonIcon,
  AlertTriangleIcon,
  AtSignIcon,
  BanknoteIcon,
  BookMarkedIcon,
  BriefcaseBusinessIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileIcon,
  GavelIcon,
  HandshakeIcon,
  HelpCircleIcon,
  ImageIcon,
  InboxIcon,
  LanguagesIcon,
  LucideIcon,
  MailIcon,
  MapPinIcon,
  MegaphoneIcon,
  MenuIcon,
  MoreHorizontalIcon,
  PhoneIcon,
  SendIcon,
  XIcon,
} from "lucide-react";
import * as tailwindcss_types_config from "tailwindcss/types/config";
import { Config } from "tailwindcss";
import { ClassValue } from "clsx";

/**
 * Adds button styles to any component, for use with Next.js <Link /> components.
 */
declare const buttonVariants: (
  props?:
    | ({
        variant?:
          | "default"
          | "destructive"
          | "outline"
          | "secondary"
          | "ghost"
          | "link"
          | "backLink"
          | "outlineLink"
          | null
          | undefined;
        size?: "default" | "sm" | "lg" | null | undefined;
      } & class_variance_authority_types.ClassProp)
    | undefined,
) => string;
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
declare const Card: React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
>;

declare const Collapsible: React.ForwardRefExoticComponent<
  CollapsiblePrimitive.CollapsibleProps & React.RefAttributes<HTMLDivElement>
>;
declare const CollapsibleTrigger: React.ForwardRefExoticComponent<
  CollapsiblePrimitive.CollapsibleTriggerProps &
    React.RefAttributes<HTMLButtonElement>
>;
declare const CollapsibleContent: React.ForwardRefExoticComponent<
  CollapsiblePrimitive.CollapsibleContentProps &
    React.RefAttributes<HTMLDivElement>
>;

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
declare const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>;
type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;
declare const Checkbox: React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
>;
type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;
declare const Radio: React.ForwardRefExoticComponent<
  RadioProps & React.RefAttributes<HTMLInputElement>
>;

declare const NavigationMenu: React.ForwardRefExoticComponent<
  Omit<
    NavigationMenuPrimitive.NavigationMenuProps &
      React.RefAttributes<HTMLElement>,
    "ref"
  > &
    React.RefAttributes<HTMLElement>
>;
declare const NavigationMenuList: React.ForwardRefExoticComponent<
  Omit<
    NavigationMenuPrimitive.NavigationMenuListProps &
      React.RefAttributes<HTMLUListElement>,
    "ref"
  > &
    React.RefAttributes<HTMLUListElement>
>;
declare const NavigationMenuItem: React.ForwardRefExoticComponent<
  NavigationMenuPrimitive.NavigationMenuItemProps &
    React.RefAttributes<HTMLLIElement>
>;
declare const navigationMenuTriggerStyle: (
  props?: class_variance_authority_types.ClassProp | undefined,
) => string;
declare const NavigationMenuTrigger: React.ForwardRefExoticComponent<
  Omit<
    NavigationMenuPrimitive.NavigationMenuTriggerProps &
      React.RefAttributes<HTMLButtonElement>,
    "ref"
  > &
    React.RefAttributes<HTMLButtonElement>
>;
declare const NavigationMenuContent: React.ForwardRefExoticComponent<
  Omit<
    NavigationMenuPrimitive.NavigationMenuContentProps &
      React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;
declare const NavigationMenuLink: React.ForwardRefExoticComponent<
  NavigationMenuPrimitive.NavigationMenuLinkProps &
    React.RefAttributes<HTMLAnchorElement>
>;
declare const NavigationMenuViewport: React.ForwardRefExoticComponent<
  Omit<
    NavigationMenuPrimitive.NavigationMenuViewportProps &
      React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;
declare const NavigationMenuIndicator: React.ForwardRefExoticComponent<
  Omit<
    NavigationMenuPrimitive.NavigationMenuIndicatorProps &
      React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;

declare const ScrollArea: React.ForwardRefExoticComponent<
  Omit<
    ScrollAreaPrimitive.ScrollAreaProps & React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;
declare const ScrollBar: React.ForwardRefExoticComponent<
  Omit<
    ScrollAreaPrimitive.ScrollAreaScrollbarProps &
      React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;

declare const Separator: React.ForwardRefExoticComponent<
  Omit<
    SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;

declare const Sheet: React.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<
  SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>;
declare const SheetClose: React.ForwardRefExoticComponent<
  SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>
>;
declare const sheetVariants: (
  props?:
    | ({
        side?: "top" | "bottom" | "left" | "right" | null | undefined;
      } & class_variance_authority_types.ClassProp)
    | undefined,
) => string;
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  closeLabel?: string;
}
declare const SheetContent: React.ForwardRefExoticComponent<
  SheetContentProps & React.RefAttributes<HTMLDivElement>
>;
declare function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
declare namespace SheetHeader {
  var displayName: string;
}
declare function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
declare namespace SheetFooter {
  var displayName: string;
}
declare const SheetTitle: React.ForwardRefExoticComponent<
  Omit<
    SheetPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>,
    "ref"
  > &
    React.RefAttributes<HTMLHeadingElement>
>;
declare const SheetDescription: React.ForwardRefExoticComponent<
  Omit<
    SheetPrimitive.DialogDescriptionProps &
      React.RefAttributes<HTMLParagraphElement>,
    "ref"
  > &
    React.RefAttributes<HTMLParagraphElement>
>;

type TabsProps = TabsPrimitive.TabsProps;
type TabsListProps = TabsPrimitive.TabsListProps;
type TabsContentProps = TabsPrimitive.TabsContentProps;
type TabsTriggerProps = TabsPrimitive.TabsTriggerProps;
declare const Tabs: React.ForwardRefExoticComponent<
  TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>
>;
declare const TabsList: React.ForwardRefExoticComponent<
  TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>
>;
declare const TabsContent: React.ForwardRefExoticComponent<
  TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>
>;
declare const TabsTrigger: React.ForwardRefExoticComponent<
  Omit<
    TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>,
    "ref"
  > &
    React.RefAttributes<HTMLButtonElement>
>;

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
declare const Textarea: React.ForwardRefExoticComponent<
  TextareaProps & React.RefAttributes<HTMLTextAreaElement>
>;

declare const Progress: React.ForwardRefExoticComponent<
  Omit<
    ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>,
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;

declare const TikLogo: LucideIcon;

declare const NavGuildIcon: LucideIcon;

declare const NavFuksisIcon: LucideIcon;

declare const NavCompaniesIcon: LucideIcon;

declare const NavEventsIcon: LucideIcon;

declare const NavApplicantsIcon: LucideIcon;

declare const icons: {
  readonly AlertOctagon: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly AlertTriangle: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly AtSign: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Banknote: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly BookMarked: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly BriefcaseBusiness: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly ChevronDown: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Chevronleft: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly ChevronRight: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly ChevronsUpDown: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly ChevronUp: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Circle: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Clock: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly ExternalLink: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Facebook: IconType;
  readonly File: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Gavel: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Github: IconType;
  readonly Gmail: IconType;
  readonly HelpCircle: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Image: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Inbox: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Instagram: IconType;
  readonly Languages: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Linkedin: IconType;
  readonly Mail: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly MapPin: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Megaphone: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Menu: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly MoreHorizontal: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly PaperAirplane: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Phone: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly Telegram: IconType;
  readonly TikLogo: LucideIcon;
  readonly Tiktok: IconType;
  readonly X: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
  readonly NavGuild: LucideIcon;
  readonly NavFuksis: LucideIcon;
  readonly NavCompanies: LucideIcon;
  readonly NavEvents: LucideIcon;
  readonly NavApplicants: LucideIcon;
  readonly Handshake: React__default.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React__default.RefAttributes<SVGSVGElement>
  >;
};

type IconName = keyof typeof icons;
type RenderIconProps = {
  name: IconName;
} & (LucideProps | React__default.ComponentProps<IconType>);
declare function RenderIcon({ name, ...props }: RenderIconProps): JSX.Element;

declare const config: Partial<Config>;
declare const plugin: {
  handler: tailwindcss_types_config.PluginCreator;
  config?: Partial<tailwindcss_types_config.Config>;
};

declare const cn: (...inputs: ClassValue[]) => string;

export {
  Button,
  type ButtonProps,
  Card,
  type CardProps,
  Checkbox,
  type CheckboxProps,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  type IconName,
  Input,
  type InputProps,
  NavApplicantsIcon,
  NavCompaniesIcon,
  NavEventsIcon,
  NavFuksisIcon,
  NavGuildIcon,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Progress,
  Radio,
  RenderIcon,
  ScrollArea,
  ScrollBar,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tabs,
  TabsContent,
  type TabsContentProps,
  TabsList,
  type TabsListProps,
  type TabsProps,
  TabsTrigger,
  type TabsTriggerProps,
  Textarea,
  type TextareaProps,
  TikLogo,
  buttonVariants,
  cn,
  config,
  plugin as default,
  icons,
  navigationMenuTriggerStyle,
  plugin,
};
