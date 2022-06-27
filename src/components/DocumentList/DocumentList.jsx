/* eslint-disable indent */
import React from 'react'
import { Box, UnorderedList, ListItem, Flex, Text } from '@chakra-ui/react'
import {
  AiOutlineFilePdf,
  AiOutlineFileText,
  AiOutlineFileWord,
  AiOutlineFileJpg,
} from 'react-icons/ai'
import { IconContext } from 'react-icons'

export const DocumentList = (data) => {
  const { documents } = data
  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'PDF':
        return <AiOutlineFilePdf aria-label="pdf file" />
      case 'DOC':
        return <AiOutlineFileWord aria-label="word doc file" />
      case 'JPG':
        return <AiOutlineFileJpg aria-label="image file" />
      default:
        return <AiOutlineFileText aria-label="plain text file" />
    }
  }
  return (
    <UnorderedList listStyleType="none" my="10">
      {documents.map((document, index) => {
        const firstRow = index === 0
        return (
          <ListItem
            key={document.fileName}
            borderTopWidth={firstRow ? 0 : '1px'}
            borderTopColor={firstRow ? 'transparent' : 'grayLight'}
            pt={firstRow ? 0 : '2'}
            mt={firstRow ? 0 : '2'}
          >
            <Flex alignItems="center" justifyContent="flex-start">
              <IconContext.Provider value={{ size: '2em' }}>
                {getFileIcon(document.fileType)}
              </IconContext.Provider>
              <Box w="85%" mx="5">
                <Text textAlign="left" fontWeight="600">
                  {document.fileName}
                </Text>
                <Text textAlign="left">{document.fileDescription}</Text>
              </Box>
              <Text ml="auto" w="10%">
                {document.fileSize}
              </Text>
            </Flex>
          </ListItem>
        )
      })}
    </UnorderedList>
  )
}
