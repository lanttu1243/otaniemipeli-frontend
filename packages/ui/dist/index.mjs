'use client'

// lib/components/button/index.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

// lib/utils/index.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
var cn = (...inputs) => twMerge(clsx(inputs));

// lib/components/button/index.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center text-pretty rounded-md font-mono text-sm font-bold ring-offset-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-primary-900 shadow-solid hover:bg-primary-600/90 border-2 border-gray-900",
        destructive: "bg-danger-500 text-danger-100 shadow-solid hover:bg-danger-500/90 border-2 border-gray-900",
        outline: "border-2 border-gray-900 hover:border-gray-800 hover:bg-gray-300/90 hover:text-gray-800",
        secondary: "shadow-solid border-2 border-gray-900 bg-gray-200 text-gray-800 hover:bg-gray-300/80",
        ghost: "hover:bg-gray-100",
        link: "after:content-alt-empty aria-[current='page']:after:content-alt-empty aria-[current='page']:shadow-underline justify-between rounded-none border-b-2 border-gray-900 text-gray-900 after:ml-2 after:content-['>>'] hover:after:translate-x-1 aria-[current='page']:after:content-['xx'] aria-[current='page']:hover:after:translate-x-0",
        backLink: "before:content-alt-empty aria-[current='page']:before:content-alt-empty aria-[current='page']:shadow-underline justify-between rounded-none text-gray-900 before:mr-2 before:content-['<<'] hover:before:-translate-x-1 aria-[current='page']:before:content-['xx'] aria-[current='page']:hover:before:translate-x-0",
        outlineLink: "shadow-solid border-2 border-gray-900 hover:border-gray-800 hover:bg-gray-300/90"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// lib/components/card/index.tsx
import * as React2 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = React2.forwardRef(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot2 : "div";
    return /* @__PURE__ */ jsx2(
      Comp,
      {
        className: cn(
          "shadow-solid rounded-md border-2 border-gray-900 p-4 md:p-6",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Card.displayName = "Card";

// lib/components/collapsible/index.tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive.CollapsibleContent;

// lib/components/input/index.tsx
import * as React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border-2 border-gray-900 bg-gray-100 px-3 py-2 text-sm ring-offset-gray-800 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
var Checkbox = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
    "input",
    {
      ref,
      type: "checkbox",
      className: cn(
        "peer size-4 shrink-0 cursor-pointer rounded border border-gray-900 accent-gray-900 ring-offset-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-100",
        className
      ),
      ...props
    }
  )
);
Checkbox.displayName = "Checkbox";
var Radio = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
    "input",
    {
      ref,
      type: "radio",
      className: cn(
        "peer size-4 shrink-0 cursor-pointer rounded border border-gray-900 accent-gray-900 ring-offset-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-100",
        className
      ),
      ...props
    }
  )
);
Radio.displayName = "Radio";

// lib/components/navigation-menu/index.tsx
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva2 } from "class-variance-authority";
import * as React10 from "react";

// lib/icons/index.tsx
import {
  SiFacebook as FacebookIcon,
  SiGithub as GithubIcon,
  SiGmail as GmailIcon,
  SiInstagram as InstagramIcon,
  SiLinkedin as LinkedinIcon,
  SiTelegram as TelegramIcon,
  SiTiktok as TiktokIcon
} from "@icons-pack/react-simple-icons";
import {
  AlertOctagonIcon,
  AlertTriangleIcon,
  AtSignIcon,
  BanknoteIcon,
  BookMarkedIcon,
  BriefcaseBusinessIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  CircleIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileIcon,
  GavelIcon,
  HelpCircleIcon,
  ImageIcon,
  InboxIcon,
  LanguagesIcon,
  MailIcon,
  MapPinIcon,
  MegaphoneIcon,
  MenuIcon,
  MoreHorizontalIcon,
  PhoneIcon,
  SendIcon,
  XIcon,
  HandshakeIcon
} from "lucide-react";

// lib/icons/tik-logo.tsx
import * as React4 from "react";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var TikLogo = React4.forwardRef(
  ({
    width = "87",
    height = "86",
    viewBox = "0 0 87 86",
    fill = "none",
    xmlns = "http://www.w3.org/2000/svg",
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "svg",
    {
      fill,
      height,
      viewBox,
      width,
      xmlns,
      ...rest,
      ref,
      children: [
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M67.0502 41.6166C66.9025 40.5367 66.6645 39.4895 66.32 38.4545C65.1796 35.0072 63.2515 31.8165 60.6754 29.2372C58.0992 26.6578 54.8462 24.6896 51.3019 23.7483C47.6263 22.7703 43.5816 22.8111 39.9511 23.9724C36.4233 25.1012 33.2646 27.2364 30.9715 30.1336C29.8557 31.5435 28.8793 33.0186 28.0835 34.6323C27.2795 36.2663 26.6026 37.9737 26.0488 39.7055C25.5484 41.2743 25.1423 42.8757 24.7936 44.4853C24.4162 46.2212 24.1618 47.9774 23.7762 49.7093C23.5957 50.5242 23.3701 51.3311 23.0707 52.1134C22.7835 52.7287 22.443 53.3074 22.0451 53.8575C21.5611 54.4402 21.0196 54.974 20.4289 55.4589C19.6535 56.0171 18.8249 56.4735 17.9511 56.8606C15.5391 57.8305 12.9834 58.5028 10.8462 60.035C8.73353 61.5508 6.93267 63.4904 5.75124 65.8131C5.09489 67.1008 4.57392 68.4699 4.30317 69.8921C4.1719 70.5889 4.19652 71.2653 4.56571 71.8969C4.88158 72.4348 5.50511 72.9482 6.12864 73.0908C6.28042 73.1234 6.43631 73.1479 6.59219 73.1642C6.67834 73.3272 6.76448 73.4942 6.85883 73.6532C7.11727 74.0851 7.43724 74.4844 7.75721 74.8675C7.94591 75.0916 8.15102 75.2994 8.37664 75.4828C9.14785 76.1144 9.95598 76.6319 10.9364 76.8886C11.9004 77.1412 12.9013 77.1372 13.8654 76.909C14.0171 76.8723 14.1648 76.8275 14.3084 76.7704C14.6325 76.6441 14.9647 76.5178 15.2683 76.3466C15.576 76.1714 15.8549 75.9351 16.1298 75.715C16.2569 75.6132 16.3718 75.495 16.4784 75.3727C16.7328 75.1364 16.9133 74.8593 17.0199 74.5374C17.184 74.2277 17.2579 73.8936 17.2456 73.535C17.2456 73.5228 17.2456 73.5105 17.2456 73.4983C17.262 73.3842 17.2702 73.262 17.2702 73.1438C17.262 70.3892 17.262 67.6224 17.6024 64.8841C17.7296 64.0324 17.8937 63.1808 18.1029 62.3454C19.4771 61.8483 20.8473 61.3348 22.1066 60.5891C24.0552 59.436 25.7412 57.8305 26.9513 55.9194C28.2066 53.9308 28.7522 51.6326 29.1624 49.3507C29.4906 47.5292 29.8393 45.7118 30.2946 43.9189C30.7663 42.0485 31.3366 40.1985 32.0708 38.4097C32.801 36.7471 33.683 35.1498 34.7742 33.691C35.5618 32.7171 36.4479 31.8247 37.4242 31.0342C38.3267 30.374 39.2989 29.8117 40.3203 29.3553C41.4977 28.8949 42.7201 28.5689 43.9672 28.3733C45.3209 28.2225 46.6869 28.2225 48.0406 28.3774C49.3328 28.577 50.5963 28.9152 51.8105 29.3961C53.0453 29.9462 54.2144 30.6308 55.3015 31.4335C56.4583 32.3544 57.5044 33.4017 58.4274 34.5508C59.3709 35.8099 60.1708 37.1709 60.8107 38.6093C61.2948 39.8073 61.6845 41.0543 61.8978 42.3297C61.9593 42.945 61.9675 43.5603 61.9101 44.1797C61.7583 45.0313 61.4999 45.8585 61.1758 46.6613C60.4908 48.2138 59.6621 49.7378 58.6489 51.1029C57.8695 52.0645 56.9875 52.9366 56.0194 53.7067C55.4123 54.159 54.7723 54.5909 54.0914 54.9251C53.9232 54.9821 53.755 55.031 53.5827 55.0718C53.5212 55.0759 53.4555 55.0759 53.394 55.0759C53.3366 55.0596 53.275 55.0433 53.2176 55.027C53.2053 55.0188 53.1889 55.0107 53.1766 55.0025C53.1561 54.9292 53.1397 54.8599 53.1232 54.7865C53.0863 54.2527 53.115 53.7108 53.1725 53.177C53.5294 50.9765 54.3703 48.9024 55.2359 46.8446C55.5517 46.1845 55.843 45.5121 56.1137 44.8316C56.2901 44.3875 56.4542 43.9352 56.6101 43.4829C56.8193 42.8635 56.6716 42.0322 56.3476 41.478C56.2737 41.3558 56.1876 41.2335 56.085 41.1154C55.9579 40.8505 55.7897 40.5979 55.5764 40.3534C54.2226 38.8131 52.2044 37.774 50.1738 37.4684C49.1113 37.3095 48.0776 37.232 47.0069 37.3624C45.928 37.4928 44.8861 37.6803 43.8728 38.0755C42.8637 38.4667 41.8874 38.915 41.0136 39.5547C40.0537 40.2597 39.1471 41.0257 38.3472 41.9059C36.895 43.4951 35.6972 45.3084 34.8111 47.2603C34.3147 48.3564 33.8676 49.477 33.5025 50.622C33.162 51.6978 32.8913 52.7939 32.9077 53.9308C32.9282 55.1655 33.1907 56.5306 33.8717 57.586C34.7209 58.9021 36.0377 59.8108 37.498 60.3365C38.0805 60.5484 38.7369 60.634 39.3522 60.6666C39.9388 60.6992 40.5542 60.6136 41.1244 60.4791C41.6946 60.3487 42.2361 60.0839 42.7611 59.8312C43.2042 59.6153 43.6431 59.383 44.0738 59.1385C45.5096 58.3235 46.8674 57.3496 48.1227 56.2698C48.3032 56.9462 48.6026 57.59 49.0498 58.1687C49.7964 59.1263 50.8629 59.8108 52.0567 60.092C52.9551 60.3039 53.7632 60.2795 54.6616 60.1368C55.3179 60.0309 55.9168 59.7782 56.5199 59.5093C57.3198 59.1507 58.0664 58.6373 58.7637 58.1157C59.617 57.48 60.4456 56.8158 61.1963 56.062C62.5624 54.6928 63.711 53.1036 64.6299 51.4085C65.6349 49.5503 66.6317 47.574 66.9804 45.4755C67.0912 44.8031 67.1855 44.1186 67.1937 43.434C67.2019 42.8187 67.1322 42.2197 67.0502 41.6166ZM43.7785 53.1118C42.6258 53.9716 41.3828 54.758 40.0742 55.3652C39.9593 55.4018 39.8445 55.4344 39.7255 55.463C39.6107 55.467 39.4999 55.467 39.385 55.463C39.262 55.4344 39.1348 55.4018 39.0158 55.3611C38.8723 55.2877 38.7328 55.2062 38.6015 55.1166C38.5113 55.0392 38.4292 54.9577 38.3472 54.8762C38.3308 54.8477 38.3144 54.8191 38.298 54.7865C38.2446 54.6195 38.1995 54.4483 38.1667 54.2731C38.1462 53.9756 38.1462 53.6782 38.1667 53.3766C38.2774 52.8347 38.4538 52.3009 38.6261 51.7752C38.8148 51.1966 39.024 50.622 39.2538 50.0556C39.8404 48.7354 40.5501 47.4762 41.4115 46.3149C42.113 45.4551 42.8924 44.6646 43.7539 43.9637C44.2543 43.6051 44.7917 43.2995 45.3496 43.0428C45.9772 42.8064 46.6254 42.6312 47.2858 42.5171C47.8683 42.4601 48.455 42.456 49.0375 42.509C49.4805 42.5864 49.9153 42.7046 50.342 42.8553C50.6045 42.9817 50.8588 43.1243 51.105 43.2832C50.9491 43.6703 50.7891 44.0534 50.6291 44.4364C49.8456 46.0867 48.8939 47.6555 47.7904 49.1143C46.6049 50.5935 45.2635 51.9382 43.7785 53.1118Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M27.6569 60.9844C27.9153 60.6666 28.2189 60.4139 28.5593 60.2346C28.8998 60.0553 29.2608 59.9453 29.6382 59.9086C30.0156 59.872 30.3971 59.9127 30.7868 60.0309C31.1765 60.1491 31.5457 60.3487 31.8985 60.6299C32.2472 60.907 32.522 61.2248 32.723 61.5753C32.9241 61.9257 33.0471 62.2924 33.0922 62.6673C33.1374 63.0422 33.1086 63.4171 33.0061 63.7879C32.8994 64.1587 32.7189 64.5051 32.4605 64.8229C32.2021 65.1408 31.8985 65.3934 31.558 65.5727C31.2175 65.752 30.8525 65.862 30.4751 65.8987C30.0977 65.9354 29.712 65.8905 29.3223 65.7724C28.9326 65.6542 28.5634 65.4545 28.2148 65.1734C27.862 64.8922 27.5871 64.5744 27.3861 64.2239C27.1851 63.8735 27.0661 63.5108 27.021 63.1359C26.9759 62.7611 27.0087 62.3902 27.1113 62.0194C27.2179 61.6486 27.3984 61.3022 27.6569 60.9844ZM28.8383 61.9257C28.6988 62.0968 28.6045 62.2802 28.5511 62.4799C28.4978 62.6755 28.4855 62.8751 28.5101 63.0667C28.5347 63.2623 28.5963 63.4497 28.6988 63.6249C28.7973 63.8001 28.9326 63.955 29.0967 64.0895C29.2608 64.2199 29.4413 64.3177 29.6382 64.3747C29.8351 64.4317 30.032 64.4562 30.2289 64.4399C30.4258 64.4236 30.6186 64.3706 30.8032 64.2769C30.9878 64.1832 31.1478 64.0528 31.2873 63.8816C31.4268 63.7105 31.5211 63.5271 31.5744 63.3275C31.6278 63.1319 31.6401 62.9322 31.6114 62.7366C31.5826 62.541 31.5211 62.3536 31.4227 62.1743C31.3242 61.9991 31.1888 61.8442 31.0247 61.7097C30.8607 61.5793 30.6802 61.4815 30.4833 61.4245C30.2864 61.3674 30.0894 61.3471 29.8925 61.3634C29.6956 61.3797 29.5028 61.4367 29.3223 61.5304C29.1377 61.6201 28.9737 61.7546 28.8383 61.9257Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M36.1319 64.8392L34.2039 68.7022L32.9076 68.0624L34.8356 64.1995L33.7691 63.6738L34.3146 62.5818L37.7441 64.2687L37.1985 65.3608L36.1319 64.8392Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M39.9388 69.6639L37.9451 69.1219L37.3708 69.9613L35.8817 69.5579L39.3932 64.7781L40.9192 65.1897L41.4976 71.0779L40.0085 70.6744L39.9388 69.6639ZM39.8567 68.5107L39.7173 66.5629L38.6015 68.1684L39.8567 68.5107Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M43.2083 71.2775L43.2985 65.7479L44.7466 65.7724L47.3638 69.1953L47.4171 65.8131L48.857 65.8376L48.7667 71.3672L47.3268 71.3427L44.7096 67.9198L44.6563 71.302L43.2083 71.2775Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M51.1255 65.2956L52.1182 70.7356L50.6948 70.9923L49.702 65.5523L51.1255 65.2956Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M55.5312 65.2549L53.8986 65.7968L54.1939 66.6729L55.7363 66.1595L56.126 67.3127L54.5836 67.8261L54.8872 68.7307L56.5199 68.1888L56.9096 69.342L53.9068 70.3403L52.1428 65.096L55.1456 64.0976L55.5312 65.2549Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M58.6243 68.7756L56.4419 63.6005L57.652 62.8385L60.1831 64.7374L59.5308 61.6568L60.741 60.8948L64.5191 65.0633L63.3007 65.8294L61.1799 63.3967L61.787 66.7829L61.2989 67.0886L58.5299 65.0633L59.8385 68.0054L58.6243 68.7756Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M62.8946 58.7677L66.7876 62.7203L65.7538 63.7268L61.8608 59.7742L62.8946 58.7677Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M27.4313 23.9521L30.553 26.9512L29.548 27.9862L26.4262 24.9871L25.6017 25.8346L24.7197 24.9871L27.3779 22.2569L28.2599 23.1045L27.4313 23.9521Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M29.6587 20.4843L33.0636 24.8607L31.9149 25.7409L28.5101 21.3645L29.6587 20.4843Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M34.6552 18.8788L33.1497 19.7101L33.6009 20.5169L35.0203 19.7346L35.6151 20.7981L34.1957 21.5805L34.6634 22.4158L36.1689 21.5846L36.7637 22.6481L33.9947 24.1762L31.2914 19.3434L34.0604 17.8153L34.6552 18.8788Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M38.2939 17.5097L39.6886 21.5927L38.3185 22.0532L36.9197 17.9701L35.7957 18.3491L35.4019 17.1959L39.0241 15.9735L39.4179 17.1267L38.2939 17.5097Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M40.7592 18.2798C40.7182 17.8724 40.7592 17.4812 40.8782 17.1144C40.9971 16.7477 41.1776 16.4176 41.4197 16.1324C41.6658 15.8431 41.9653 15.6067 42.3263 15.4234C42.6872 15.24 43.0934 15.1259 43.5446 15.0852C43.9917 15.0444 44.4102 15.077 44.7999 15.1911C45.1896 15.3052 45.5342 15.4804 45.8336 15.7168C46.129 15.9531 46.371 16.2424 46.5597 16.5806C46.7443 16.9188 46.8592 17.2937 46.8961 17.7012C46.933 18.1087 46.8961 18.4999 46.7771 18.8666C46.6582 19.2334 46.4777 19.5634 46.2315 19.8487C45.9854 20.138 45.6818 20.3743 45.3167 20.5577C44.9557 20.7411 44.5496 20.8552 44.1025 20.8959C43.6513 20.9367 43.2328 20.9041 42.8431 20.79C42.4534 20.6759 42.1129 20.5006 41.8176 20.2643C41.5222 20.028 41.2843 19.7386 41.0956 19.4004C40.911 19.0622 40.8002 18.6873 40.7592 18.2798ZM42.2688 18.1372C42.2893 18.3573 42.3509 18.5529 42.4534 18.7322C42.556 18.9114 42.6831 19.0581 42.839 19.1804C42.9949 19.3026 43.1713 19.3923 43.3641 19.4493C43.561 19.5064 43.762 19.5268 43.9753 19.5064C44.1845 19.486 44.3814 19.429 44.5619 19.3352C44.7424 19.2415 44.8983 19.1193 45.0296 18.9685C45.1609 18.8177 45.2593 18.6466 45.3249 18.4551C45.3906 18.2635 45.4111 18.0557 45.3906 17.8357C45.3701 17.6156 45.3085 17.42 45.206 17.2408C45.1034 17.0655 44.9763 16.9148 44.8163 16.7925C44.6563 16.6703 44.4799 16.5806 44.2871 16.5236C44.0943 16.4665 43.8892 16.4462 43.6759 16.4665C43.4626 16.4869 43.2698 16.544 43.0893 16.6377C42.9088 16.7314 42.7529 16.8536 42.6257 17.0044C42.4944 17.1552 42.4001 17.3263 42.3345 17.5178C42.2688 17.7094 42.2483 17.9172 42.2688 18.1372Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M49.9358 17.636L52.0771 15.7005L53.837 16.0142L51.1993 18.2065L53.0617 21.4949L51.2157 21.1689L49.7881 18.4795L49.3656 20.8389L47.9421 20.5862L48.9185 15.1422L50.3419 15.3948L49.9358 17.636Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M56.9136 17.1796L54.9364 22.3506L53.5826 21.8413L55.5599 16.6703L56.9136 17.1796Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M59.9861 18.6629L57.8694 22.4281L59.3831 23.2675L58.7842 24.331L56.0029 22.7907L58.7145 17.962L59.9861 18.6629Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M63.4812 22.5177L60.7861 25.8998L59.6498 25.0074L62.3449 21.6253L61.4137 20.8918L62.1726 19.9383L65.1713 22.2936L64.4124 23.2471L63.4812 22.5177Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M64.9211 28.7971L63.592 27.2242L62.6362 27.5909L61.6434 26.4173L67.2675 24.4696L68.2849 25.6716L65.3846 30.8426L64.3919 29.6691L64.9211 28.7971ZM65.5159 27.8028L66.5168 26.124L64.679 26.8167L65.5159 27.8028Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M46.2562 11.2792C50.5717 11.2792 54.7559 12.1186 58.6981 13.773C60.5933 14.5676 62.4188 15.5537 64.1253 16.6988C65.8195 17.8357 67.4111 19.1396 68.8592 20.5781C70.3073 22.0165 71.62 23.5975 72.7645 25.2804C73.9172 26.9797 74.9099 28.793 75.7098 30.6715C77.3753 34.5834 78.2204 38.7397 78.2204 43.0265C78.2204 47.3132 77.3753 51.4696 75.7098 55.3855C74.9099 57.2681 73.9172 59.0814 72.7645 60.7766C71.62 62.4595 70.3073 64.0406 68.8592 65.479C67.4111 66.9174 65.8195 68.2214 64.1253 69.3582C62.4147 70.5033 60.5892 71.4894 58.6981 72.284C54.76 73.9384 50.5758 74.7778 46.2562 74.7778C41.9366 74.7778 37.7565 73.9384 33.8143 72.284C31.9191 71.4894 30.0936 70.5033 28.3871 69.3582C26.6929 68.2214 25.1013 66.9174 23.6532 65.479C22.2051 64.0406 20.8924 62.4595 19.7479 60.7766C18.5952 59.0774 17.6025 57.264 16.8026 55.3855C15.1371 51.4737 14.292 47.3173 14.292 43.0265C14.292 38.7356 15.1371 34.5834 16.8026 30.6715C17.6025 28.7889 18.5952 26.9756 19.7479 25.2804C20.8924 23.5975 22.2051 22.0165 23.6532 20.5781C25.1013 19.1396 26.6929 17.8357 28.3871 16.6988C30.0977 15.5537 31.9232 14.5676 33.8143 13.773C37.7524 12.1146 41.9366 11.2792 46.2562 11.2792ZM46.2562 8.39014C26.9965 8.39014 11.3877 23.8991 11.3877 43.0265C11.3877 62.1539 27.0006 77.6628 46.2562 77.6628C65.5118 77.6628 81.1247 62.1539 81.1247 43.0265C81.1247 23.8991 65.5118 8.39014 46.2562 8.39014Z",
            fill: "currentColor"
          }
        )
      ]
    }
  )
);
TikLogo.displayName = "TikLogo";
var tik_logo_default = TikLogo;

// lib/icons/nav/guild.tsx
import * as React5 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var NavGuildIcon = React5.forwardRef(
  ({
    width = "64",
    height = "64",
    viewBox = "0 0 64 64",
    fill = "#ffffff",
    xmlns = "http://www.w3.org/2000/svg",
    ...rest
  }, ref) => /* @__PURE__ */ jsx5(
    "svg",
    {
      fill,
      height,
      viewBox,
      width,
      xmlns,
      ...rest,
      ref,
      children: /* @__PURE__ */ jsx5("path", { d: "M63.275,33.926c.271-1.208.379-2.442.346-3.682-.044-1.687-.356-3.329-.887-4.93-.285-.854-.635-1.685-1.033-2.491-.672-1.365-1.512-2.611-2.497-3.766-1.355-1.587-2.937-2.902-4.722-3.976-.769-.461-1.576-.869-2.409-1.221-.522-.223-1.056-.417-1.595-.592-.28-.09-.559-.172-.842-.253-.265-.076-.532-.145-.799-.214-.964-.245-1.944-.391-2.929-.472-1.292-.105-2.586-.102-3.875.068-1.294.171-2.551.509-3.764.999-.807.326-1.578.718-2.326,1.16-1.458.869-2.786,1.917-4,3.11-1.028,1.017-1.983,2.091-2.794,3.286-.631.926-1.202,1.889-1.71,2.889-.472.929-.915,1.876-1.375,2.813-.681,1.383-1.357,2.778-2.068,4.147-.442.856-.973,1.664-1.522,2.461-.444.647-.894,1.285-1.436,1.852-.522.549-1.108,1.004-1.861,1.2-.303.081-.609.11-.92.083-.056-.005-.108-.016-.161-.032-.176-.051-.331-.165-.49-.257-.102-.06-.197-.132-.291-.203-.197-.158-.399-.265-.606-.335l-.072-.022c-.44-.122-.904-.071-1.379.085-.397.131-.665.395-.827.78-.014.039-.036.08-.074.117,0-.005-.002-.008-.001-.012-.004.004-.006.005-.01.009-.002-.003,0-.007-.002-.01l-1.057-.184c-1.172-.265-2.347-.271-3.527-.09-1.256.196-2.438.603-3.572,1.163-1.134.558-2.178,1.25-3.142,2.068-.838.707-1.603,1.48-2.269,2.352-.344.452-.464.967-.383,1.522.06.402.187.757.37,1.072.016.026.032.053.049.077.014.024.03.045.044.069.303.447.732.803,1.266,1.075.158.079.309.161.441.278.028.025.054.05.081.08.011.011.019.023.031.033.005.006.011.013.014.019.011.013.021.026.029.038.012.016.024.031.035.049.017.024.032.053.05.08.025-.028.052-.051.076-.075.052-.051.096-.096.132-.152.503-.615,1.01-1.224,1.5-1.845.991-1.258,1.964-2.534,3.049-3.715.22-.243.459-.477.689-.712.018.013.033.025.048.039v.002s.003.004.005.006c-.06.128-.12.254-.183.381-.62,1.244-1.43,2.37-2.216,3.505-.412.592-.838,1.173-1.222,1.78-.35.553-.66,1.131-.978,1.703-.168.301-.314.617-.461.925-.033.069-.05.155-.042.234.042.445.182.847.376,1.227.033.065.067.128.102.192.148.263.321.522.5.778.06-.078.105-.134.138-.195.463-.814.924-1.629,1.379-2.447.59-1.058,1.168-2.123,1.909-3.088.172-.226.35-.45.58-.63l-.005.018s.009-.005.012-.008c-.112.352-.229.698-.377,1.027-.332.739-.673,1.472-1.019,2.202-.444.94-.853,1.892-1.222,2.862-.075.191-.124.392-.19.611.154.061.288.111.413.171.127.063.249.136.374.207,1.257-3.427,2.818-6.736,4.625-9.923l-.012.04.017-.031c-.079.259-.182.506-.283.758-.383.937-.769,1.87-1.145,2.809-.318.786-.645,1.564-.934,2.364-.273.757-.51,1.522-.732,2.294-.136.479-.227.977-.337,1.464-.022.096-.043.198-.047.297.001.099.013.177.043.236.048.087.143.13.294.145.394.036.798.058,1.198.069.259.007.301-.036.373-.273.391-1.265.808-2.518,1.313-3.739.371-.89.724-1.79,1.109-2.673.381-.868.792-1.717,1.201-2.571.126-.266.241-.565.442-.775.359-.376.779-.694,1.187-1.043.002.003,0,.005.005.009q.066.2-.046.468c-.107.25-.144.426-.09.558,0,.005.004.011.005.014.908.778,1.818.214,1.878.182.137-.073.266-.157.385-.248.225-.174.422-.378.596-.606.388-.496.758-1.003,1.136-1.504.087-.113.178-.229.275-.353l.005.009s.004-.004.006-.005c.106.171.196.333.307.482.123.172.272.282.441.333.154.047.325.044.511,0,1.06-.259,1.973-.78,2.763-1.531.776-.738,1.385-1.613,1.965-2.507.59-.907,1.164-1.827,1.726-2.752.747-1.229,1.4-2.508,2.057-3.788.749-1.454,1.478-2.923,2.252-4.36.706-1.306,1.473-2.575,2.337-3.785.457-.636.986-1.195,1.588-1.684.77-.625,1.546-1.253,2.354-1.82,1.658-1.163,3.495-1.913,5.493-2.244,1.267-.208,2.539-.217,3.812-.049.602.08,1.2.172,1.784.34l.154.047c.663.204,1.327.393,1.975.643.535.203,1.049.463,1.557.727.404.211.795.438,1.178.679.064.041.129.082.193.123.579.375,1.135.781,1.674,1.216,1.277,1.031,2.402,2.2,3.309,3.574,1.049,1.585,1.745,3.312,2.038,5.198.196,1.251.214,2.502.016,3.754-.088.566-.165,1.135-.291,1.694-.152.673-.331,1.343-.582,1.994-.267.698-.569,1.377-.938,2.03-.581,1.02-1.305,1.928-2.198,2.695-.749.643-1.567,1.186-2.406,1.699-.501.308-1.011.614-1.543.879-.919.46-1.875.81-2.918.826-.378.005-.737-.039-1.079-.136-.044-.013-.09-.027-.133-.043-.402-.129-.779-.335-1.127-.616-.339-.273-.518-.625-.518-1.066,0-.497.149-.95.362-1.389.423-.879,1.004-1.647,1.626-2.384.721-.858,1.525-1.64,2.32-2.428.7-.694,1.402-1.385,2.064-2.115.484-.527.91-1.11,1.349-1.679.255-.326.232-.702.119-1.07-.07-.22-.223-.37-.463-.443l-.154-.047c-.721-.233-1.317-.671-1.839-1.218-.453-.476-.865-.992-1.34-1.441-.842-.798-1.806-1.381-2.891-1.727-.056-.02-.116-.038-.176-.053-.196-.057-.396-.108-.602-.149-1.17-.24-2.329-.204-3.497.046-1.14.246-2.209.665-3.244,1.195-1.615.824-3.066,1.882-4.438,3.066-.926.798-1.793,1.662-2.606,2.571-.566.632-1.118,1.28-1.611,1.964-.985,1.373-1.606,2.894-1.642,4.61-.023,1.228.348,2.315,1.231,3.197.436.435.957.751,1.521,1.002.258.114.516.212.778.296.067.023.135.044.204.062,1.081.311,2.193.369,3.335.193,1.097-.17,2.148-.487,3.151-.955.703-.326,1.388-.691,2.076-1.046.237-.125.452-.273.676-.416.069-.044.129-.1.216-.126.002.003,0,.005,0,.007.005,0,.008-.002.011-.004.008.187-.066.328-.119.47-.425,1.14-.396,2.261.14,3.362.401.829,1.004,1.473,1.79,1.942.331.199.672.353,1.025.465.041.015.083.028.125.04.66.188,1.352.233,2.069.137,1.38-.185,2.717-.528,4.015-1.028.502-.193.988-.419,1.478-.64,1.415-.64,2.691-1.493,3.878-2.48,1.454-1.204,2.7-2.603,3.709-4.205.528-.83.974-1.7,1.358-2.61.379-.902.662-1.833.877-2.787ZM48.257,31.568c-.015.051-.031.101-.049.153l-.025.081c-.139.466-.309.914-.507,1.345-.077.166-.158.331-.243.492-.385.73-.854,1.407-1.403,2.044-.815.945-1.762,1.734-2.821,2.396-1.443.898-2.997,1.491-4.663,1.8-.89.166-1.79.238-2.693.187-.371-.019-.697-.123-.978-.302-.052-.033-.101-.069-.152-.106-.209-.164-.39-.375-.543-.628-.417-.705-.391-1.436-.119-2.183.338-.931.863-1.743,1.515-2.476.724-.814,1.558-1.506,2.417-2.171.566-.442,1.131-.889,1.713-1.312,1.182-.867,2.483-1.488,3.916-1.806,1.035-.225,2.074-.26,3.113-.016.031.007.062.016.094.024.147.037.293.079.438.131.059.02.117.04.175.065.355.144.626.404.83.725.246.389.193.802.086,1.216-.028.109-.062.221-.098.33l-.003.011Z" })
    }
  )
);
NavGuildIcon.displayName = "NavGuildIcon";
var guild_default = NavGuildIcon;

// lib/icons/nav/fuksis.tsx
import * as React6 from "react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var NavFuksisIcon = React6.forwardRef(
  ({
    width = "64",
    height = "64",
    viewBox = "0 0 64 64",
    fill = "#ffffff",
    xmlns = "http://www.w3.org/2000/svg",
    ...rest
  }, ref) => /* @__PURE__ */ jsxs2(
    "svg",
    {
      fill,
      height,
      viewBox,
      width,
      xmlns,
      ...rest,
      ref,
      children: [
        /* @__PURE__ */ jsx6("path", { d: "M24,14c0-4-3-9-9-9s-7.5,3.5-9.5,9.5c-1.5.5-1.5,2.09-1.5,3.5,0,1,.5,3.5,2.5,3.5,2.19,1.59,2.5,10.5,9,10s7.44-6.91,9-11c1.5-1.5,1.5-2.5,1.5-3.5,0-2-1.5-2.5-2-3ZM11.79,17.82c-.82.13-1.62-.66-1.79-1.75-.17-1.09.35-2.08,1.17-2.2.82-.13,1.62.65,1.79,1.74.17,1.09-.35,2.08-1.17,2.21ZM18.83,17.13c-.82.13-1.62-.65-1.79-1.74-.17-1.09.35-2.08,1.17-2.21s1.62.66,1.79,1.75c.17,1.09-.35,2.08-1.17,2.2Z" }),
        /* @__PURE__ */ jsx6("path", { d: "M59.87,17.44c-1.52-5.66-2.71-8.98-8.26-9.31-5.55-.32-8.59,4.14-8.81,7.83-.49.44-1.91.82-2.01,2.67-.06.92-.11,1.85,1.19,3.32,1.22,3.87,1.74,9.84,7.72,10.66,5.98.81,6.76-7.4,8.87-8.76,1.85.11,2.45-2.17,2.5-3.1.08-1.3.16-2.77-1.2-3.31ZM47.91,20.08c-.73-.04-1.28-.86-1.23-1.83.06-.97.69-1.73,1.42-1.69.73.04,1.28.86,1.23,1.84-.06.97-.69,1.72-1.42,1.68ZM54.11,20.79c-.73-.04-1.28-.86-1.23-1.84.06-.97.69-1.73,1.42-1.69.73.05,1.28.87,1.23,1.84-.06.97-.69,1.73-1.42,1.69Z" }),
        /* @__PURE__ */ jsx6("path", { d: "M4.026,31.679c1.706-2.124,4.924-2.195,6.77-.192,2.456,2.664,4.487,6.513,6.204,6.513,2,0,6-9.927,8.5-9.957,3.5-.043,5.5,4.32,6.5,8.139.844,3.224.976,14.415.996,17.825.003.564-.429,1.029-.991,1.075l-26.979,2.194c-.575.047-1.084-.361-1.156-.933-.443-3.507-1.87-15.119-1.87-19.342s.953-3.984,2.026-5.321Z" }),
        /* @__PURE__ */ jsx6("path", { d: "M59.279,30.777c-.734-.576-1.752-.619-2.542-.124-2.972,1.863-7.08,7.655-7.871,7.655-.942,0-5.654-9.061-8.01-9.1s-5.183,3.948-6.125,7.438c-.713,2.642-.887,11.142-.929,15.115-.012,1.175.888,2.154,2.059,2.247l23.138,1.825c1.188.094,2.24-.757,2.391-1.94.523-4.094,1.61-13.028,1.61-16.499,0-3.22-2.339-5.532-3.721-6.617Z" })
      ]
    }
  )
);
NavFuksisIcon.displayName = "NavFuksisIcon";
var fuksis_default = NavFuksisIcon;

// lib/icons/nav/companies.tsx
import * as React7 from "react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var NavCompaniesIcon = React7.forwardRef(
  ({
    width = "64",
    height = "64",
    viewBox = "0 0 64 64",
    fill = "#ffffff",
    xmlns = "http://www.w3.org/2000/svg",
    ...rest
  }, ref) => /* @__PURE__ */ jsxs3(
    "svg",
    {
      fill,
      height,
      viewBox,
      width,
      xmlns,
      ...rest,
      ref,
      children: [
        /* @__PURE__ */ jsx7(
          "rect",
          {
            x: "2.436",
            y: "12.404",
            width: "59.151",
            height: "43.912",
            rx: "3.738",
            ry: "3.738",
            transform: "translate(-4.815 5.219) rotate(-8.672)"
          }
        ),
        /* @__PURE__ */ jsx7("path", { d: "M16.06,12.473c-.287,0-.578-.062-.854-.193-.998-.473-1.424-1.665-.952-2.664C16.898,4.031,22.21.452,28.117.276c6.649-.176,10.977,4.026,12.147,5.325.74.82.674,2.085-.146,2.824-.82.74-2.086.674-2.824-.146-.627-.695-4.047-4.146-9.058-4.005-4.397.131-8.37,2.833-10.368,7.054-.342.722-1.06,1.145-1.809,1.145Z" })
      ]
    }
  )
);
NavCompaniesIcon.displayName = "NavCompaniesIcon";
var companies_default = NavCompaniesIcon;

// lib/icons/nav/events.tsx
import * as React8 from "react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var NavEventsIcon = React8.forwardRef(
  ({
    width = "64",
    height = "64",
    viewBox = "0 0 64 64",
    fill = "#ffffff",
    xmlns = "http://www.w3.org/2000/svg",
    ...rest
  }, ref) => /* @__PURE__ */ jsxs4(
    "svg",
    {
      fill,
      height,
      viewBox,
      width,
      xmlns,
      ...rest,
      ref,
      children: [
        /* @__PURE__ */ jsx8("path", { d: "M33.002,51.373c-.298,0-.602-.045-.9-.139-1.581-.497-2.459-2.182-1.962-3.762l3.98-12.665-7.53,1.506c-1.625.327-3.205-.728-3.53-2.354-.325-1.624.729-3.205,2.354-3.53l12.5-2.5c1.038-.208,2.112.149,2.819.937.709.789.948,1.893.631,2.904l-5.5,17.5c-.403,1.281-1.586,2.102-2.861,2.102Z" }),
        /* @__PURE__ */ jsx8("path", { d: "M15.799,19.758c-1.41,0-2.667-.999-2.943-2.435l-1.775-9.244c-.312-1.627.753-3.2,2.38-3.512,1.629-.313,3.199.753,3.512,2.38l1.775,9.244c.312,1.627-.753,3.2-2.38,3.512-.191.037-.382.054-.569.054Z" }),
        /* @__PURE__ */ jsx8("path", { d: "M60.451,51.332l-5.99-32.96c0-.02-.01-.03-.01-.05,0-.01-.01-.03-.01-.04l-1.99-10.95c-.29-1.63-1.86-2.7-3.49-2.41s-2.71,1.86-2.41,3.49l1.47,8.06-11.93,2.21-1.65-8.79c-.3-1.58-1.79-2.65-3.37-2.42l-7,1c-.8.12-1.53.55-2,1.21-.48.65-.67,1.47-.54,2.27l1.57,9.15-12.36,2.3-1.29-7.07c-.3-1.63-1.86-2.71-3.49-2.41-1.63.29-2.71,1.86-2.41,3.49l8,44c.14.79.6,1.5,1.28,1.95.49.33,1.08.51,1.67.51.21,0,.41-.02.61-.06l43-9c1.6-.34,2.63-1.88,2.34-3.48ZM16.901,57.302l-5.09-27.99,37.28-6.94,4.94,27.16-37.13,7.77Z" }),
        /* @__PURE__ */ jsx8("path", { d: "M40.921,15.373c-1.41,0-2.667-.999-2.943-2.435l-1.775-9.244c-.312-1.627.753-3.2,2.381-3.512,1.621-.313,3.198.753,3.512,2.38l1.775,9.244c.312,1.627-.753,3.2-2.381,3.512-.19.037-.381.054-.568.054Z" })
      ]
    }
  )
);
NavEventsIcon.displayName = "NavEventsIcon";
var events_default = NavEventsIcon;

// lib/icons/nav/applicants.tsx
import * as React9 from "react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var NavApplicantsIcon = React9.forwardRef(
  ({
    width = "64",
    height = "64",
    viewBox = "0 0 64 64",
    fill = "#ffffff",
    xmlns = "http://www.w3.org/2000/svg",
    ...rest
  }, ref) => /* @__PURE__ */ jsxs5(
    "svg",
    {
      fill,
      height,
      viewBox,
      width,
      xmlns,
      ...rest,
      ref,
      children: [
        /* @__PURE__ */ jsx9("path", { d: "M28.179,12.717c-.11-.442-.469-.774-.92-.84-1.572-.232-3.26-.877-9.26.123s-7.924,1.476-9.89,1.812c-.615.105-1.022.69-.913,1.305l5.616,31.826c.104.59.645.996,1.239.923,2.224-.273,7.566-.865,12.08-.865,4.303,0,7.14.538,8.88.825.651.107,1.31-.009,1.886-.331,1.987-1.108,7.761-3.714,10.101-4.494,1.949-.65,5.587-1.3,7.897-1.675,1.156-.188,1.933-1.288,1.73-2.441l-5.372-30.442c-.153-.866-.854-1.526-1.728-1.616-2.272-.233-6.666.459-9.526,1.174-3.229.807-7.762,2.57-9.389,3.605-.376.239-.569.673-.503,1.114l2.892,18.282-4.821-18.283Z" }),
        /* @__PURE__ */ jsx9("path", { d: "M54.769,11.744l1.182-.394c.552-.184,1.14.166,1.241.739l5.642,31.973c.091.518-.254,1.013-.773,1.105l-21.187,3.76c-.665.091-.864-.874-.217-1.053l17.508-4.651c.474-.126.775-.59.697-1.074l-4.733-29.348c-.074-.461.197-.909.64-1.057Z" }),
        /* @__PURE__ */ jsx9("path", { d: "M4.176,20.275l-.746.249c-.82.273-1.315,1.108-1.16,1.959l5.597,30.783c.074.408.461.682.871.616l21.98-2.757c.948-.152.804-1.558-.155-1.514l-18.904,1.359c-.378.017-.711-.245-.783-.617l-5.71-29.5c-.088-.452-.553-.724-.99-.578Z" })
      ]
    }
  )
);
NavApplicantsIcon.displayName = "NavApplicantsIcon";
var applicants_default = NavApplicantsIcon;

// lib/icons/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var icons = {
  AlertOctagon: AlertOctagonIcon,
  AlertTriangle: AlertTriangleIcon,
  AtSign: AtSignIcon,
  Banknote: BanknoteIcon,
  BookMarked: BookMarkedIcon,
  BriefcaseBusiness: BriefcaseBusinessIcon,
  ChevronDown: ChevronDownIcon,
  Chevronleft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  ChevronsUpDown: ChevronsUpDownIcon,
  ChevronUp: ChevronUpIcon,
  Circle: CircleIcon,
  Clock: ClockIcon,
  ExternalLink: ExternalLinkIcon,
  Facebook: FacebookIcon,
  File: FileIcon,
  Gavel: GavelIcon,
  Github: GithubIcon,
  Gmail: GmailIcon,
  HelpCircle: HelpCircleIcon,
  Image: ImageIcon,
  Inbox: InboxIcon,
  Instagram: InstagramIcon,
  Languages: LanguagesIcon,
  Linkedin: LinkedinIcon,
  Mail: MailIcon,
  MapPin: MapPinIcon,
  Megaphone: MegaphoneIcon,
  Menu: MenuIcon,
  MoreHorizontal: MoreHorizontalIcon,
  PaperAirplane: SendIcon,
  Phone: PhoneIcon,
  Telegram: TelegramIcon,
  TikLogo: tik_logo_default,
  Tiktok: TiktokIcon,
  X: XIcon,
  NavGuild: guild_default,
  NavFuksis: fuksis_default,
  NavCompanies: companies_default,
  NavEvents: events_default,
  NavApplicants: applicants_default,
  Handshake: HandshakeIcon
};
function RenderIcon({ name, ...props }) {
  var _a;
  const IconComponent = (_a = icons[name]) != null ? _a : icons.HelpCircle;
  return /* @__PURE__ */ jsx10(IconComponent, { ...props });
}

// lib/components/navigation-menu/index.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var NavigationMenu = React10.forwardRef(({ className, children, delayDuration = 0, ...props }, ref) => /* @__PURE__ */ jsxs6(
  NavigationMenuPrimitive.Root,
  {
    className: cn(
      "relative z-50 flex max-w-max items-center justify-center bg-gray-900 font-mono text-gray-100",
      className
    ),
    delayDuration,
    ref,
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx11(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  NavigationMenuPrimitive.List,
  {
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-2",
      className
    ),
    ref,
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva2(
  "group inline-flex h-full w-max items-center justify-center rounded-md px-4 py-2 text-lg font-semibold underline-offset-2 outline-gray-100 transition-colors hover:text-gray-400 focus-visible:text-gray-400 disabled:pointer-events-none disabled:opacity-50 data-[active]:underline data-[state=open]:underline"
);
var NavigationMenuTrigger = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
  NavigationMenuPrimitive.Trigger,
  {
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ref,
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx11(
        ChevronDownIcon,
        {
          "aria-hidden": "true",
          className: "relative top-px ml-1 size-6 transition duration-200 group-data-[state=open]:rotate-180"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  NavigationMenuPrimitive.Content,
  {
    className: cn(
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:slide-in-from-top data-[motion^=to-]:slide-out-to-top data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 left-0 right-0 top-0 flex w-full justify-center md:absolute md:w-auto",
      className
    ),
    ref,
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11("div", { className: cn("absolute left-0 top-full flex w-full justify-center"), children: /* @__PURE__ */ jsx11(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border-b-2 border-gray-900 bg-gray-100 text-gray-900",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  NavigationMenuPrimitive.Indicator,
  {
    className: cn(
      "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
      className
    ),
    ref,
    ...props,
    children: /* @__PURE__ */ jsx11("div", { className: "relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-gray-900 shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// lib/components/scroll-area/index.tsx
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React11 from "react";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var ScrollArea = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs7(
  ScrollAreaPrimitive.Root,
  {
    className: cn("relative overflow-hidden", className),
    ref,
    ...props,
    children: [
      /* @__PURE__ */ jsx12(ScrollAreaPrimitive.Viewport, { className: "size-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx12(ScrollBar, {}),
      /* @__PURE__ */ jsx12(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React11.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx12(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      className
    ),
    orientation,
    ref,
    ...props,
    children: /* @__PURE__ */ jsx12(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-gray-900" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// lib/components/separator/index.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React12 from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var Separator = React12.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx13(
    SeparatorPrimitive.Root,
    {
      className: cn(
        "shrink-0 bg-gray-900",
        orientation === "horizontal" ? "h-[2px] w-full" : "h-full w-[2px]",
        className
      ),
      decorative,
      orientation,
      ref,
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

// lib/components/sheet/index.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva as cva3 } from "class-variance-authority";
import * as React13 from "react";
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var Sheet = SheetPrimitive.Root;
var SheetTrigger = SheetPrimitive.Trigger;
var SheetClose = SheetPrimitive.Close;
function SheetPortal(props) {
  return /* @__PURE__ */ jsx14(SheetPrimitive.Portal, { ...props });
}
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
var SheetOverlay = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-gray-100/80 backdrop-blur-sm",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva3(
  "data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 border-gray-900 bg-gray-100 transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b-2",
        bottom: "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t-2",
        left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 size-full max-w-xs border-r-2 sm:max-w-sm",
        right: "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 size-full max-w-xs border-l-2 sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React13.forwardRef(
  ({
    side = "right",
    closeLabel,
    className,
    "aria-describedby": ariaDescribedby,
    children,
    ...props
  }, ref) => /* @__PURE__ */ jsxs8(SheetPortal, { children: [
    /* @__PURE__ */ jsx14(SheetOverlay, {}),
    /* @__PURE__ */ jsxs8(
      SheetPrimitive.Content,
      {
        className: cn(sheetVariants({ side }), className),
        ref,
        "aria-describedby": ariaDescribedby,
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs8(SheetPrimitive.Close, { className: "absolute right-4 top-4 -m-2 rounded-full p-2 hover:bg-gray-300 focus:ring-2 focus:ring-gray-900 focus-visible:outline-none disabled:pointer-events-none data-[state=open]:bg-gray-900", children: [
            /* @__PURE__ */ jsx14(XIcon, { className: "size-6" }),
            /* @__PURE__ */ jsx14("span", { className: "sr-only", children: closeLabel != null ? closeLabel : "Close" })
          ] })
        ]
      }
    )
  ] })
);
SheetContent.displayName = SheetPrimitive.Content.displayName;
function SheetHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      ),
      ...props
    }
  );
}
SheetHeader.displayName = "SheetHeader";
function SheetFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      ),
      ...props
    }
  );
}
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  SheetPrimitive.Title,
  {
    className: cn("text-lg font-semibold text-gray-900", className),
    ref,
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
  SheetPrimitive.Description,
  {
    className: cn("text-sm text-gray-800", className),
    ref,
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// lib/components/tabs/index.tsx
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React14 from "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var TabsList = TabsPrimitive.List;
var TabsContent = TabsPrimitive.Content;
var TabsTrigger = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  TabsPrimitive.Trigger,
  {
    className: cn(
      "border-2 border-gray-900 bg-gray-100 px-4 py-1 font-mono font-bold outline-none drop-shadow-[4px_4px_black] first:rounded-l-lg last:rounded-r-lg data-[state=active]:translate-x-1 data-[state=active]:translate-y-1 data-[state=active]:border-l-0 data-[state=active]:border-r-0 data-[state=active]:bg-gray-400 data-[state=active]:drop-shadow-none data-[state=active]:first:border-l-2 data-[state=active]:last:border-r-2",
      className
    ),
    ref,
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// lib/components/textarea/index.tsx
import * as React15 from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var Textarea = React15.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx16(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border-2 border-gray-900 bg-gray-100 px-3 py-2 text-sm ring-offset-gray-800 placeholder:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// lib/components/progress/index.tsx
import * as React16 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { jsx as jsx17 } from "react/jsx-runtime";
var Progress = React16.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx17(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-6 w-full overflow-hidden rounded-md border-2 border-gray-900 bg-gray-200",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx17(
      ProgressPrimitive.Indicator,
      {
        className: cn(
          "bg-primary-500 h-full w-full flex-1 border-gray-900 transition-all",
          value !== 100 && "border-r-2"
        ),
        style: { transform: `translateX(-${(100 - (value != null ? value : 0)).toFixed()}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// lib/plugin.ts
import defaultTheme from "tailwindcss/defaultTheme.js";
import twPlugin from "tailwindcss/plugin.js";
var config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          900: "var(--color-primary-900)",
          800: "var(--color-primary-800)",
          700: "var(--color-primary-700)",
          600: "var(--color-primary-600)",
          500: "var(--color-primary-500)",
          400: "var(--color-primary-400)",
          300: "var(--color-primary-300)",
          200: "var(--color-primary-200)",
          100: "var(--color-primary-100)"
        },
        secondary: {
          900: "var(--color-secondary-900)",
          800: "var(--color-secondary-800)",
          700: "var(--color-secondary-700)",
          600: "var(--color-secondary-600)",
          500: "var(--color-secondary-500)",
          400: "var(--color-secondary-400)",
          300: "var(--color-secondary-300)",
          200: "var(--color-secondary-200)",
          100: "var(--color-secondary-100)"
        },
        danger: {
          900: "var(--color-danger-900)",
          800: "var(--color-danger-800)",
          700: "var(--color-danger-700)",
          600: "var(--color-danger-600)",
          500: "var(--color-danger-500)",
          400: "var(--color-danger-400)",
          300: "var(--color-danger-300)",
          200: "var(--color-danger-200)",
          100: "var(--color-danger-100)"
        },
        gray: {
          900: "var(--color-gray-900)",
          800: "var(--color-gray-800)",
          700: "var(--color-gray-700)",
          600: "var(--color-gray-600)",
          500: "var(--color-gray-500)",
          400: "var(--color-gray-400)",
          300: "var(--color-gray-300)",
          200: "var(--color-gray-200)",
          100: "var(--color-gray-100)"
        },
        success: {
          900: "var(--color-success-900)",
          800: "var(--color-success-800)",
          700: "var(--color-success-700)",
          600: "var(--color-success-600)",
          500: "var(--color-success-500)",
          400: "var(--color-success-400)",
          300: "var(--color-success-300)",
          200: "var(--color-success-200)",
          100: "var(--color-success-100)"
        },
        warning: {
          900: "var(--color-warning-900)",
          800: "var(--color-warning-800)",
          700: "var(--color-warning-700)",
          600: "var(--color-warning-600)",
          500: "var(--color-warning-500)",
          400: "var(--color-warning-400)",
          300: "var(--color-warning-300)",
          200: "var(--color-warning-200)",
          100: "var(--color-warning-100)"
        },
        special: {
          900: "var(--color-special-900)",
          600: "var(--color-special-600)"
        },
        normal: {
          900: "var(--color-normal-900)",
          600: "var(--color-normal-600)"
        },
        guild_room: {
          900: "var(--color-guild-room-900)",
          600: "var(--color-guild-room-600)"
        },
        sauna: {
          900: "var(--color-sauna-900)",
          600: "var(--color-sauna-600)"
        },
        food: {
          900: "var(--color-food-900)",
          600: "var(--color-food-600)"
        }
      },
      boxShadow: {
        solid: "var(--box-shadow-solid)",
        "solid-lg": "var(--box-shadow-solid-lg)",
        "solid-xl": "var(--box-shadow-solid-xl)",
        underline: "var(--box-shadow-underline)"
      }
    }
  }
};
var plugin = twPlugin(({ addUtilities, matchUtilities }) => {
  matchUtilities({
    "content-alt": (value) => ({
      '@supports (content: "x" / "y")': {
        content: `var(--tw-content) / ${value}`
      }
    })
  });
  addUtilities({
    ".content-alt-empty": {
      '@supports (content: "x" / "y")': {
        content: `var(--tw-content) / ''`
      }
    }
  });
}, config);
export {
  AlertOctagonIcon,
  AlertTriangleIcon,
  AtSignIcon,
  BanknoteIcon,
  BookMarkedIcon,
  BriefcaseBusinessIcon,
  Button,
  Card,
  Checkbox,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  ClockIcon,
  Collapsible,
  CollapsibleContent2 as CollapsibleContent,
  CollapsibleTrigger2 as CollapsibleTrigger,
  ExternalLinkIcon,
  FacebookIcon,
  FileIcon,
  GavelIcon,
  GithubIcon,
  GmailIcon,
  HandshakeIcon,
  HelpCircleIcon,
  ImageIcon,
  InboxIcon,
  Input,
  InstagramIcon,
  LanguagesIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  MegaphoneIcon,
  MenuIcon,
  MoreHorizontalIcon,
  applicants_default as NavApplicantsIcon,
  companies_default as NavCompaniesIcon,
  events_default as NavEventsIcon,
  fuksis_default as NavFuksisIcon,
  guild_default as NavGuildIcon,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  PhoneIcon,
  Progress,
  Radio,
  RenderIcon,
  ScrollArea,
  ScrollBar,
  SendIcon,
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
  TabsList,
  TabsTrigger,
  TelegramIcon,
  Textarea,
  tik_logo_default as TikLogo,
  TiktokIcon,
  XIcon,
  buttonVariants,
  cn,
  config,
  plugin as default,
  icons,
  navigationMenuTriggerStyle,
  plugin
};
