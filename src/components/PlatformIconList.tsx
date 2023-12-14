import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaXbox,
  FaPlaystation,
  FaAndroid,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { SiWindows11, SiNintendoswitch } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // name: PlayStation
    // slug: playstation
    pc: SiWindows11,
    xbox: FaXbox,
    playstation: FaPlaystation,
    android: FaAndroid,
    linux: FaLinux,
    nintendo: SiNintendoswitch,
    mac: FaApple,
    iphone: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        // <Text>{platform.name}</Text>
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
