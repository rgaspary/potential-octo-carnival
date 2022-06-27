import React from 'react'
import { PageTitle, PageDescription, DocumentList } from '../../components'
import { Box } from '@chakra-ui/react'

export const MoreInformationPage = () => {
  const pageCopy = [
    'Veniam proident fugiat ut non incididunt eiusmod amet laboris qui culpa enim.',
    'Magna nisi cupidatat laborum sit ut cillum elit enim aliqua commodo.',
  ]
  const mockFiles = [
    {
      fileName: 'Presentation.pdf',
      fileSize: '1.5 MB',
      fileType: 'PDF',
      fileDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      fileName: 'Partners.jpg',
      fileSize: '2.5 MB',
      fileType: 'JPG',
      fileDescription: 'Nisi minim duis ipsum dolore.',
    },
    {
      fileName: 'UsefulLinks.doc',
      fileSize: '1.0 MB',
      fileType: 'DOC',
      fileDescription:
        'Irure sit fugiat duis sunt in est commodo veniam quis non laborum eu commodo.',
    },
  ]
  return (
    <Box data-testid="more-information-page">
      <PageTitle headingType="h1" heading="More Information" />
      <PageDescription copy={pageCopy} />
      <DocumentList documents={mockFiles} />
    </Box>
  )
}
