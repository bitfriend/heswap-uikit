import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.luckychip.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.luckychip.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://luckychip.info",
      },
      {
        label: "Tokens",
        href: "https://luckychip.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://luckychip.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://luckychip.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.luckychip.finance",
      },
      {
        label: "Github",
        href: "https://github.com/luckychip",
      },
      {
        label: "Docs",
        href: "https://docs.luckychip.finance",
      },
      {
        label: "Blog",
        href: "https://luckychip.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/luckychip",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/luckychipIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/luckychip_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/luckychipVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/luckychip_ita",
      },
      {
        label: "русский",
        href: "https://t.me/luckychip_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/luckychipturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/luckychipPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/luckychipEs",
      },
      {
        label: "日本語",
        href: "https://t.me/luckychipjp",
      },
      {
        label: "Français",
        href: "https://t.me/luckychipfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/luckychipAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/luckychipWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/luckychip",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
