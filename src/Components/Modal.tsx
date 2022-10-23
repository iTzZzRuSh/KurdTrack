import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    Flex,
    Text
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
            <ModalHeader textAlign="center">Kontakt</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                    <Flex justifyContent="space-evenly">
                        <Text>Dolores Dworaczyk </Text>
                        <Text>Pshtewan Rahim</Text>
                    </Flex>
                        <Flex justifyContent="space-evenly">
                            <Text>+48 999 999 999</Text>
                            <Text>+48 888 888 888</Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                        <Text>email@gmail.com </Text>
                        <Text>email@yahoo.com</Text>
                        </Flex>
            </ModalBody>
  
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }