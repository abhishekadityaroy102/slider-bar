import { useState } from 'react'
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import logo from './logo.svg'
import './App.css'
import {FaHome,FaCog,FaHeart} from "react-icons/fa";
import {MdExplore,MdTrendingUp} from "react-icons/md"
import { Box, Heading, VStack} from '@chakra-ui/react'
import {
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
    Logo
  </Button>
  <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
         <DrawerOverlay />
         <DrawerContent>
         <DrawerCloseButton />
         <DrawerHeader>Logo</DrawerHeader>
         <DrawerBody> <Box as="button" minHeight="50px" alignItems="start" display="flex" gap="14px"><FaHome/>Home</Box>
         <Box as="button" minHeight="50px" display="flex" gap="14px"><MdTrendingUp/>Trending</Box>
         <Box as="button" minHeight="50px" display="flex" gap="14px"><MdExplore/>Explore</Box>
     <Box as="button" minHeight="50px" display="flex" gap="14px">
      <FaHeart/>Favourites</Box>
     <Box as="button" minHeight="50px" display="flex" gap="14px">
      <FaCog/>Settings</Box>
      </DrawerBody>
         </DrawerContent>
   {/* <VStack  bgColor="gray.100" w="250px" height="714px" p="10" alignItems="start">
     
     <Heading size="md" paddingBottom="10" alignItems="baseline">LOGO</Heading>
     <Box as="button" minHeight="50px" alignItems="start" display="flex" gap="14px"><FaHome/>Home</Box>
     <Box as="button" minHeight="50px" display="flex" gap="14px"><MdTrendingUp/>Trending</Box>
     <Box as="button" minHeight="50px" display="flex" gap="14px"><MdExplore/>Explore</Box>
     <Box as="button" minHeight="50px" display="flex" gap="14px">
      <FaHeart/>Favourites</Box>
     <Box as="button" minHeight="50px" display="flex" gap="14px">
      <FaCog/>Settings</Box>
   </VStack> */}
   </Drawer>
   </>
  )
}

export default App
