import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Game
  // Genre Games
  // Platform Games
  // Platform Genre Games

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" fontSize="6xl" marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
