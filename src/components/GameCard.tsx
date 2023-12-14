import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
        {/* {game.parent_platforms.map((platform) => (
          <Text>{platform.platform.name}</Text>
        ))} */}
        {/* {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))} */}
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
