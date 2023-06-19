import RoomGrid from "./RoomGrid"
import Rooms from "./Rooms"
import { useState, useEffect } from "react"
import { Text, NumberInput, Button, Center } from "@mantine/core"

export function CreateRoom () {

  const [rows, setRow] = useState(0)
  const [cols, setCol] = useState(0)

  return (
    <div>
      <h1>Crear Sala</h1>
      <Text>
        Indique el numero de filas y columnas de la sala
      </Text>
      {/* <input type="text" placeholder="Nombre de la sala" /> */}
      <NumberInput label="Filas" value={rows} onChange={(value) => setRow(Number(value))} />
      <NumberInput label="Columnas" value={cols} onChange={(value) => setCol(Number(value))} />
      <div>
        <RoomGrid width={cols} height={rows} />
      </div>
      <Center>
        <Button variant="outline">Crear Sala</Button>
      </Center>
    </div>
  )

}