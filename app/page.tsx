
import { AddIcon, AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Box, Button, ButtonGroup, ButtonIcon, ButtonText, Center, CloseIcon, HStack, Heading, Icon, Text } from "@gluestack-ui/themed";
import Image from "next/image";
import React from "react";
import ExampleButton from "./components/newbtn";


export default function Home() {
  return (

    <main>

      <Container />


    </main>
  );
}




const Container = () => {
  return (
    <Box flex={1} bg="$black" $web-h={"100vh"}>
      <Box
        position="absolute"
        $base-h={500}
        $base-w={500}
        $lg-w={700}
        $lg-h={700}
      >
        <Image src="/gradient.svg" alt="Gradient" fill priority />
      </Box>
      <Box
        flex={1}
        $base-my={"$16"}
        $base-mx={"$5"}
        $lg-my={"$24"}
        $lg-mx={"$32"}
        alignItems="center"
      >
       
        

      <ExampleButton/>
        </Box>
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          $base-h={20}
          $base-w={300}
          $lg-h={160}
          $lg-w={400}
        ></Box>
   
        <Box flexDirection="column" $md-flexDirection="row"></Box>
      </Box>

  );
};


function Example(){
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  return (
    <Center h={300}>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
        setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size='lg'>Deactivate account</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size='sm'>
              Are you sure you want to deactivate your account? Your data will be permanently removed and cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
           <ButtonGroup space="lg">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              bg='$error600'
              action="negative"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>Deactivate</ButtonText>
            </Button>
             </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Center>
  );
}
