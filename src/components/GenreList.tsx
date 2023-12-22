import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Stack,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  // const { genres } = useGenres();
  // const { data } = useData<Genre>("/genres");
  const { data, error, loading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // if (error) return null;

  // if (loading) return <Spinner />;

  return (
    <div>
      {error && <></>}

      {loading && (
        <Stack paddingTop={2}>
          {skeletons.map((skeleton) => (
            <Skeleton key={skeleton} height="40px" />
          ))}
        </Stack>
      )}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* <Text>{genre.name}</Text> */}
              <Button
                variant="link"
                // onClick={() => console.log("genre", genre)}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
