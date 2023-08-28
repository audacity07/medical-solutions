import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/authContext";
import styles from "./status.module.css";

export function Status({ val }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  const { userInfo, setUserInfo, setIsAuth } = useContext(AuthContext);

  let dose1 = "Dose 1";
  let dose2 = "Dose 2";

  if (userInfo.dose1.status) {
    dose1 += ` - Vaccinated`;
  } else {
    dose1 += ` - Pending`;
  }

  if (userInfo.dose2.status) {
    dose2 += ` - Vaccinated`;
  } else {
    dose2 += ` - Pending`;
  }

  async function updateStatus(id) {
    try {
      let response = await fetch(
        `https://medical-solutions-server.onrender.com/users/${id}`
      );
      let data = await response.json();
      console.log(data);
      setUserInfo(data);
      toast({
        position: "top",
        title: "Refreshed successfully",
        // description: "Please enter correct email and password",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button
        fontWeight="500"
        fontSize="lg"
        backgroundColor="#97E7FE"
        color="#B76F49"
        onClick={onOpen}
      >
        {val}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="2xl" color="#013442">
              Status
            </AlertDialogHeader>

            <AlertDialogBody color="#013442" fontSize="lg">
              <Text
                mb="3px"
                className={
                  userInfo.dose1.status === true
                    ? styles.editButton
                    : styles.deleteButton
                }
              >
                {dose1}
              </Text>
              <Text
                className={
                  userInfo.dose2.status === true
                    ? styles.editButton
                    : styles.deleteButton
                }
              >
                {dose2}
              </Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                backgroundColor="#97E7FE"
                fontWeight="500"
                mr={3}
                onClick={() => updateStatus(userInfo.id)}
              >
                Refresh
              </Button>
              <Button
                ref={cancelRef}
                onClick={onClose}
                backgroundColor="#97E7FE"
                fontWeight="500"
              >
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
