export var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
export var links = [
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
                href: "https://exchange.heswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.heswap.finance/#/pool",
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
                href: "https://heswap.info",
            },
            {
                label: "Tokens",
                href: "https://heswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://heswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://heswap.info/accounts",
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
                href: "https://voting.heswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/heswap",
            },
            {
                label: "Docs",
                href: "https://docs.heswap.finance",
            },
            {
                label: "Blog",
                href: "https://heswap.medium.com",
            },
        ],
    },
];
export var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/heswap",
            },
            {
                label: "Bahasa Indonesia",
                href: "https://t.me/HeSwapIndonesia",
            },
            {
                label: "中文",
                href: "https://t.me/HeSwap_CN",
            },
            {
                label: "Tiếng Việt",
                href: "https://t.me/HeSwapVN",
            },
            {
                label: "Italiano",
                href: "https://t.me/heswap_ita",
            },
            {
                label: "русский",
                href: "https://t.me/heswap_ru",
            },
            {
                label: "Türkiye",
                href: "https://t.me/heswapturkiye",
            },
            {
                label: "Português",
                href: "https://t.me/HeSwapPortuguese",
            },
            {
                label: "Español",
                href: "https://t.me/HeswapEs",
            },
            {
                label: "日本語",
                href: "https://t.me/heswapjp",
            },
            {
                label: "Français",
                href: "https://t.me/heswapfr",
            },
            {
                label: "Announcements",
                href: "https://t.me/HeSwapAnn",
            },
            {
                label: "Whale Alert",
                href: "https://t.me/HeSwapWhales",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/heswap",
    },
];
export var MENU_HEIGHT = 64;
export var MENU_ENTRY_HEIGHT = 48;
export var SIDEBAR_WIDTH_FULL = 240;
export var SIDEBAR_WIDTH_REDUCED = 56;
