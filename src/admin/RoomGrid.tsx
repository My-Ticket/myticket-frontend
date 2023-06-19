import { ActionIcon, Button, Center, SimpleGrid } from "@mantine/core";
import { IconArmchair } from "@tabler/icons-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
interface RoomGridProps {
  height: number;
  width: number;
}

function RoomGrid({ height, width }: RoomGridProps) {

  const [grid, setGrid] = useState(makeGrid(height, width));
  useEffect(() => {
    setGrid(makeGrid(height, width));
  },[height, width])

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

function makeGrid(h: number, w: number ) {
  // letters from A to Z
  const rowNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
                    "V", "W", "X", "Y", "Z"];
  const grid = [];
  for (let i = 0; i < h; i++) {
    const row = [];
    for (let j = 0; j < w; j++) {
      row.push(
        <ActionIcon size={"xl"} key={nanoid()} onClick={() =>`${rowNames[i]}${j}`}  variant={"transparent"}>
          <IconArmchair size="2.125rem" color={(i===8 || i===3) && (j ===10 || j===4) ? "red": undefined} />
        </ActionIcon>
      );
    }
    grid.push(row);
  }
  return grid;
}

export default RoomGrid;
