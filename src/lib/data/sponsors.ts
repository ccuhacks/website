export enum SponsorType {
    // monetary tiers
    TITLE = 'title',
    GOLD = 'gold',
    SILVER = 'silver',
    BRONZE = 'bronze',
    // non monetary
    IN_KIND = 'in_kind',
    FOOD_PARTNER = 'food_partner',
    COMMUNITY_PARTNER = 'community_partner'
}

export type Sponsor = {
    type: SponsorType;
    name: string;
    href: string;
    logo: string;
};

export const sponsors: Sponsor[] = [
    {
        type: SponsorType.GOLD,
        name: 'CodeCrafters',
        href: 'https://codecrafters.io',
        logo: '/assets/sponsors/codecrafters.svg'
    },
    {
        type: SponsorType.SILVER,
        name: 'JLCPCB',
        href: 'https://jlcpcb.com',
        logo: '/assets/sponsors/jlcpcb.png'
    },
    {
        type: SponsorType.SILVER,
        name: 'EasyEDA',
        href: 'https://easyeda.com/',
        logo: '/assets/sponsors/EasyEDA_logo.svg.png'
    },
    {
        type: SponsorType.SILVER,
        name: 'Wolfram Research',
        href: 'https://wolfram.com',
        logo: '/assets/sponsors/wolfram.png'
    },
    {
        type: SponsorType.BRONZE,
        name: 'n8n',
        href: 'https://n8n.io',
        logo: '/assets/sponsors/n8n_pink_white_logo.png'
    },
    {
        type: SponsorType.IN_KIND,
        name: 'StacksKB',
        href: 'https://stackskb.com',
        logo: '/assets/sponsors/stackskb_alt.png'
    },
    // {
    //  type: SponsorType.IN_KIND,
    //  name: 'Desk Theory',
    //  href: 'https://desktheory.in',
    //  logo: '/assets/sponsors/desk-theory-logo.png'
    // },
    {
        type: SponsorType.IN_KIND,
        name: 'PlotArmour',
        href: '',
        logo: '/assets/sponsors/plotarmrlogowhite.png'
    },
    {
        type: SponsorType.IN_KIND,
        name: 'PicoCad 2',
        href: '',
        logo: '/assets/sponsors/PicoCAD_2_Logo.webp'
    },

    {
        type: SponsorType.FOOD_PARTNER,
        name: 'Protein Matters',
        href: '',
        logo: '/assets/sponsors/proteinmatters.png'
    }
    // {
    //  type: SponsorType.FOOD_PARTNER,
    //  name: 'The Essentials',
    //  href: '',
    //  logo: '/assets/sponsors/plotarmrlogowhite.png'
    // },
    // //
    // {
    //  type: SponsorType.COMMUNITY_PARTNER,
    //  name: 'GDGoC AOT',
    //  href: '',
    //  logo: '/assets/sponsors/plotarmrlogowhite.png'
    // }
];

const grouped = Object.groupBy(sponsors, (sponsor) => sponsor.type);

export const sponsorsGrouped = {
    title: grouped[SponsorType.TITLE] ?? [],
    gold: grouped[SponsorType.GOLD] ?? [],
    silver: grouped[SponsorType.SILVER] ?? [],
    bronze: grouped[SponsorType.BRONZE] ?? [],

    inKind: grouped[SponsorType.IN_KIND] ?? [],
    food: grouped[SponsorType.FOOD_PARTNER] ?? [],
    community: grouped[SponsorType.COMMUNITY_PARTNER] ?? []
};

export const sponsorLabels = {
    title: 'TITLE SPONSOR',
    gold: 'GOLD SPONSOR',
    silver: 'SILVER SPONSOR',
    bronze: 'BRONZE SPONSOR',
    inKind: 'IN-KIND SPONSOR',
    food: 'FOOD PARTNER',
    community: 'COMMUNITY PARTNER'
} as const;