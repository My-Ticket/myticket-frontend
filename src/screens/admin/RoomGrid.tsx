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
    //Structure
    testGridState[25] = {state: "hall"};
    testGridState[45] = {state: "hall"};
    testGridState[65] = {state: "hall"};
    testGridState[85] = {state: "hall"};
    testGridState[105] = {state: "hall"};
    testGridState[125] = {state: "hall"};
    testGridState[145] = {state: "hall"};
    testGridState[165] = {state: "hall"};
    testGridState[185] = {state: "hall"};

    testGridState[34] = {state: "hall"};
    testGridState[54] = {state: "hall"};
    testGridState[74] = {state: "hall"};
    testGridState[94] = {state: "hall"};
    testGridState[114] = {state: "hall"};
    testGridState[134] = {state: "hall"};
    testGridState[154] = {state: "hall"};
    testGridState[174] = {state: "hall"};
    testGridState[194] = {state: "hall"};

    //Reserved
    testGridState[0] = {state: "reserved"};
    testGridState[199] = {state: "reserved"};
    testGridState[198] = {state: "reserved"};
    testGridState[1] = {state: "reserved"};
    testGridState[2] = {state: "reserved"};
    testGridState[3] = {state: "reserved"};
    testGridState[120] = {state: "reserved"};
    testGridState[121] = {state: "reserved"};
    testGridState[8] = {state: "reserved"};
    testGridState[9] = {state: "reserved"};
    testGridState[10] = {state: "reserved"};
    testGridState[12] = {state: "reserved"};
    testGridState[13] = {state: "reserved"};
    testGridState[110] = {state: "reserved"};
    testGridState[111] = {state: "reserved"};
    testGridState[112] = {state: "reserved"};
    testGridState[113] = {state: "reserved"};


    //selected
    testGridState[140] = {state: "selected"};
    testGridState[141] = {state: "selected"};
    testGridState[142] = {state: "selected"};
    testGridState[143] = {state: "selected"};

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
