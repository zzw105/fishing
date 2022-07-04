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

interface fishingGroundProps {
  id: number;
  name: string;
  fish: fishProps[];
}

interface fishingGroundStateProps {
  allFishingGround: fishingGroundProps[];
}

interface userStoreProps {
  title: string;
  money: number;
  fish: fishProps[];
  nowGround: fishingGroundProps | null;
}
