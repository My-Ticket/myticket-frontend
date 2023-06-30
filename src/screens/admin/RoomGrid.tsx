import { ActionIcon, Center } from "@mantine/core";
import { IconArmchair } from "@tabler/icons-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
interface RoomGridProps {
  height: number;
  width: number;
}

function RoomGrid({ height, width }: RoomGridProps) {

  const [grid, setGrid] = useState<JSX.Element[][]>([]);

  useEffect(() => {
    if (grid.length > 0) return;
    const testGridState: SeatState[] = [];
    testGridState[2] = {state: "hall"};
    testGridState[199] = {state: "hall"};
    setGrid(makeGrid(height, width, testGridState, setGrid))
  }, [])

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

interface SeatState {
  state: "free" | "reserved" | "selected" | "hall";
} 


function makeGrid(h: number, w: number, roomState: SeatState[], gridSetter: Function) {


  // letters from A to Z
  const rowNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
                    "V", "W", "X", "Y", "Z"];
  let grid = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      const {color, show= true} = (() => {
        if (roomState.length === 0) return ({color: "white"});
        switch(roomState[i*w + j]?.state || "free") {
          case "free":
            return {color: "white" };
          case "reserved":
            return {color: "yellow" };
          case "selected":
            return {color: "green"};
          case "hall":
            return {color: "red", show: false};
        }
      })()
      row.push(
        <ActionIcon size={"xl"} key={nanoid()} onClick={() => {}}  variant={"transparent"} >
          <IconArmchair size="2.125rem" color={color} style={show! === false ? {display: "none"} : undefined} />
        </ActionIcon>
      );
    }
    grid.push(row);
  }
  return grid;
}

export default RoomGrid;
