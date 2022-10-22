import { HStack, Icon, IconButton, Link, } from "@chakra-ui/react";
import { FiHome, FiMessageCircle, FiShoppingBag } from 'react-icons/fi'
import { SiGooglestreetview } from "react-icons/si";



export const Navbar = () => {
  return (
        <HStack w="full" mt="15px" justifyContent="space-evenly">
            <Link href="https://www.youtube.com">
            <IconButton icon={<FiHome/>} aria-label="Home"/>
            </Link>
            <Link href="https://www.youtube.com">
            <IconButton icon={<FiMessageCircle/>} aria-label="Kontakt"/>
            </Link>
            <Link href="https://www.youtube.com">
            <IconButton icon={<FiShoppingBag/>} aria-label="Sklep"/>
            </Link>
            <Link href="https://www.youtube.com">
            <IconButton icon={<SiGooglestreetview/>} aria-label="Adres"/>
            </Link>
            
        </HStack>
  );
}