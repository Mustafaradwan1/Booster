import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  icon: string;
}
export interface Info {
  head: string;
  p: string;
  p2?: string;
}
export interface DivisionBoostingBox {
  title: string;
  p: string;
  rank?: string[];
  imgs: (string | StaticImageData)[];
}

export interface SelectOption {
  title: string;
  select: string[];
}

export interface Addon {
  icon: string;
  title: string;
  dis: string;
}
export interface DivisionBoostingSection {
  Info: Info;
  DivisionBoostingBox: DivisionBoostingBox[];
  selectOptions: SelectOption[];
  Addons: Addon[];
}
export interface WinBoostingSection {
  info: Info;
  WinBoostingBox: DivisionBoostingBox & { select: number[] };
  selectOptions: SelectOption[];
  Addons: Addon[];
}
export interface PlacementMatchesSection {
  info: Info;
  PlacementMatchesBox: DivisionBoostingBox & { select: number[] };
  selectOptions: SelectOption[];
  Addons: Addon[];
}
export interface DuoGamesSection {
  info: Info;
  DueGamesBox: DivisionBoostingBox & {
    select: number[];
    dueType: { span: string; title: string; price: string }[];
  };
  selectOptions: SelectOption[];
  Addons: Addon[];
}
export interface ChampionMasterySection {
  info: Info;
  ChampionMasteryBox: DivisionBoostingBox[];
  selectOptions: SelectOption[];
  Addons: Addon[];
}
export interface FormInformation {
  services: Service[];
  DivisionBoosting: DivisionBoostingSection;
  WinBoosting: WinBoostingSection;
  PlacementMatches: PlacementMatchesSection;
  DueGames: DuoGamesSection;
  ChampionMastery: ChampionMasterySection;
}