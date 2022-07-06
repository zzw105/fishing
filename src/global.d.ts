interface targetStyleProps {
  left: number;
  width: number;
}

interface targetLineStyleProps {
  left: number;
  width: number;
}

interface fishProps {
  id: number;
  name: string;
  price: number;
  difficulty: number;
}

interface groundProps {
  id: number;
  number: number;
  autoFish: boolean;
}

interface fishingGroundProps {
  id: number;
  name: string;
  fish: fishProps[];
  ground: groundProps[];
}

interface globalStateProps {
  title: string;

  allFishingGround: fishingGroundProps[];
  nowGround: fishingGroundProps;
}

interface itemProps {
  id: number;
  name: string;
  number: number;
}

interface userStoreProps {
  money: number;
  fish: fishProps[];
  items: itemProps[];
}
