import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  // page has two row each row has two columns
  //   row-1 cols:
  //     nav
  //     nav
  //   row-2 cols:
  //     aside
  //     main
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem area="nav" bg="#000033">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="#000077">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" bg="#0000ff">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
