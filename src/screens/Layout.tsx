import { AppShell } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { HeaderLinks, HeaderMenuColored } from "../components/Header"
export const Layout: React.FC = () => {
  return (

     <AppShell
      header={<HeaderMenuColored links={HeaderLinks.links as any}/>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], padding: 0 },
        
      })}
    >
    <Outlet/>
    </AppShell>
  )
}