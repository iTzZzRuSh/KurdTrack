import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
  } from '@chakra-ui/react'

  import { FiMessageCircle } from 'react-icons/fi';

  export default function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <IconButton onClick={onOpen} icon={<FiMessageCircle/>} color="green.300" aria-label="Kontakt"/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kontakt</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                    Dolores D. <br/>
                    Nr Tel. +48 999 999 999 , <br/>
                    E-mail mojemail@gmail.com ,
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3} onClick={onClose}>
                Zamknij
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }