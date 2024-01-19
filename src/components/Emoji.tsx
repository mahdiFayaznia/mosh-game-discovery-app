import { Icon, Image, ImageProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaMeh, FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // mosh method
  // const emojiMap: { [key: number]: ImageProps } = {
  //   3: { src: FaMeh, alt: "meh" },
  //   4: { src: FaThumbsUp, alt: "ThumbsUp" },
  //   5: { src: GoGoal, alt: "Goal" },
  // };

  // return <Image {...emojiMap[rating]} />;
  // /mosh method

  // icon method
  // const emojiMap: { [key: string]: IconType } = {
  //   3: FaMeh,
  //   4: FaThumbsUp,
  //   5: GoGoal,
  // };

  // return <Icon as={emojiMap[rating]} />;
  // /icon method

  // my method
  let arr: number[] = [];
  switch (rating) {
    case 3:
      {
        arr = [3];
      }
      break;
    case 4:
      {
        arr = [3, 4];
      }
      break;
    case 5:
      {
        arr = [3, 4, 5];
      }
      break;
  }
  return (
    <>
      {arr.map((item) => (
        <Icon as={FaStar} />
      ))}
    </>
  );
  // /my method
};

export default Emoji;
