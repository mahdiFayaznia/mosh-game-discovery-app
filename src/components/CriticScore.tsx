import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score >= 90
      ? "green"
      : score >= 80
      ? "yellow"
      : score >= 70
      ? "orange"
      : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize="medium"
      paddingX={2}
      borderRadius="6px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
