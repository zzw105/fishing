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
