import { HStack, Icon, IconButton, Link, } from "@chakra-ui/react";
import { FiFacebook, FiHome, FiMessageCircle, FiShoppingBag } from 'react-icons/fi'
import { SiGooglestreetview } from "react-icons/si";
import { ColorMode } from "./ColorMode";



export const Navbar = () => {
  return (
        <HStack w="full" mt="15px" justifyContent="space-evenly">
            <Link href="http://localhost:3000/">
            <IconButton icon={<FiHome/>} color="orange.300" aria-label="Home"/>
            </Link>
            <Link href="#">
            <IconButton icon={<FiMessageCircle/>} color="green.500" aria-label="Kontakt"/>
            </Link>
            <Link href="#">
            <IconButton icon={<FiShoppingBag/>} color="pink.300" aria-label="Sklep"/>
            </Link>
            <Link href="#">
            <IconButton icon={<SiGooglestreetview/>} color="gray.500" aria-label="Adres"/>
            </Link>
            <Link href="#">
            <IconButton icon={<FiFacebook/>} color="facebook.500" aria-label="Adres"/>
            </Link>
            <ColorMode/>
            
        </HStack>
  );
}