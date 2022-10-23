import { HStack, Icon, IconButton, Link, } from "@chakra-ui/react";
import { FiFacebook, FiHome, FiMessageCircle, FiShoppingBag } from 'react-icons/fi';
import { SiGooglestreetview } from "react-icons/si";
import { ColorMode } from "./ColorMode";
import BasicUsage from "./Modal";



export const Navbar = () => {
  return (
        <HStack w="full" mt="15px" justifyContent="space-evenly">
            <Link href="https://kurdtrack.vercel.app/">
            <IconButton icon={<FiHome/>} color="orange.300" aria-label="Home"/>
            </Link>
            <BasicUsage/>
            <Link href="#">
            <IconButton icon={<FiShoppingBag/>} color="pink.300" aria-label="Sklep"/>
            </Link>
            <Link isExternal={true} href="https://goo.gl/maps/6NV3XGe9KUCKcqfy8">
            <IconButton icon={<SiGooglestreetview/>} color="gray.500" aria-label="Adres"/>
            </Link>
            <Link isExternal={true} href="https://www.facebook.com/kurdtruckparts.kurdtruckparts">
            <IconButton icon={<FiFacebook/>} color="facebook.500" aria-label="Adres"/>
            </Link>
            <ColorMode/>
            
        </HStack>
  );
}