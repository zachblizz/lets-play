export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type HomeParamList = {
  Home: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type SportTypes = "tennis" | "basketball" | "football" | "soccer" | "baseball";

export type LookingFor = {
  sport: SportTypes;
  howMany: number;
  parkName: string;
  timeStamp: number;
}
