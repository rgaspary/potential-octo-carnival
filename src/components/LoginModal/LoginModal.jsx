import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'

import { NewAccountForm } from '../NewAccountForm'

export const LoginModal = () => {
  const [userUUID, setUserUUID] = useState(localStorage.getItem('userUUID'))
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    // if (userUUID === null) onOpen()
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex alignItems="center" flexDir="column">
            <Heading>Welcome to PegaWORLD 2022</Heading>
            <Text>
              Please sign up or sign in in order to save your reminders
            </Text>
            <NewAccountForm />
            <Text my="2">Or</Text>
            <Button>Log in</Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
