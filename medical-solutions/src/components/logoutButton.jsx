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
  useToast,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/authContext";

export function Logout({ val }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  const { logout } = useContext(AuthContext);

  function handleLogout() {
    onClose();
    toast({
      position: "top",
      title: "Successfully Logged Out",
      // description: "You can book the vaccination slot now",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // localStorage.removeItem("adminData");
    // localStorage.removeItem("userData");
    logout();
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
              Logout
            </AlertDialogHeader>

            <AlertDialogBody color="#013442" fontSize="lg">
              Are you sure you want to logout?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={onClose}
                backgroundColor="#97E7FE"
                fontWeight="500"
              >
                Cancel
              </Button>
              <Button
                backgroundColor="#97E7FE"
                onClick={handleLogout}
                ml={3}
                fontWeight="500"
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
