import RoomGrid from "./RoomGrid"
import { io } from "socket.io-client";

function Rooms() {
  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    console.log("connected");
  });

  return (
    <div style={{
      minHeight: "100%",
    }}>

    <RoomGrid height={10} width={20} />  
    </div>
  )
}

export default Rooms