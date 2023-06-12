import { ActionIcon, Button, Center, SimpleGrid } from "@mantine/core";
import { IconArmchair } from "@tabler/icons-react";
import { nanoid } from "nanoid";

interface RoomGridProps {
  height: number;
  width: number;
}

function RoomGrid({ height, width }: RoomGridProps) {
  const grid = makeGrid(height, width);

  return (
    <Center>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${width}, minmax(0, 2rem))`,
        }}
      >
        {grid.flatMap((row) => row)}
      </div>
    </Center>
  );
}

function makeGrid(h: number, w: number) {
  // letters from A to Z
  const rowNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
                    "V", "W", "X", "Y", "Z"];
  let grid = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(
        <ActionIcon size={"xl"} key={nanoid()} onClick={() => console.log(rowNames[i], j)}>
          <IconArmchair size="2.125rem" />
        </ActionIcon>
      );
    }
    grid.push(row);
  }
  return grid;
}

export default RoomGrid;
