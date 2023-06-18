import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function MoviesAdmin() {
  
  return (
    <div>
      <div
        style={{
          marginTop: "5em",
          marginInline: "10em",
        }}
      >
        <Input icon={<IconSearch />} placeholder="Rapidos y Furiosos" />
      </div>
    </div>
  );
}

export default MoviesAdmin;
