const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const Main = "#ffbb00";
const MainLight = "#ffbb11";
const MainDark = "#ffaa00";
const Shark = "#1B1E24"; //Shark
const Mako = "#444854"; //Mako
const PaleSky = "#6D7881"; //PaleSky
const Iron = "#CCCECE"; //Iron
const Silver = "#EDEDED"; //Silver
const Smoke = "#F9F9F9"; //Smoke
const White = "#FFFFFF"; //White
const Keppel = "#36ABA6"; //Keppel
const KeppelTitle = "#206663";
const KeppelInfo = "#5ebbb7";
const Grassland = "#1DBD55"; //Grassland
const GrasslandTitle = "#117133";
const GrasslandInfo = "#60d088";
const Saffron = "#F7B617"; //Saffron
const Monza = "#D0021B"; //Monza
const BlueSky = "#0D31F5"; //BlueSky
const Indigo = "#2B387F"; //Indigo
const PurpleRain = "#992A8C"; //PurpleRain
const Error = "#FF5252";
const Highlight = "#FFCB47";

export default {
    main: Main,
    mainLight: MainLight,
    mainDark: MainDark,
    highlight: Highlight,
    shark: Shark,
    mako: Mako,
    paleSky: PaleSky,
    iron: Iron,
    silver: Silver,
    smoke: Smoke,
    white: White,
    keppel: Keppel,
    keppelTitle: KeppelTitle,
    keppelInfo: KeppelInfo,
    grassland: Grassland,
    grasslandTitle: GrasslandTitle,
    grasslandInfo: GrasslandInfo,
    saffron: Saffron,
    monza: Monza,
    bluesky: BlueSky,
    indigo: Indigo,
    purpleRain: PurpleRain,
    error: Error,
    light: {
        text: Mako,
        background: White,
        tint: tintColorLight,
        tabIconDefault: Smoke,
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: White,
        background: "#000",
        tint: tintColorDark,
        tabIconDefault: Silver,
        tabIconSelected: tintColorDark,
    },
};
