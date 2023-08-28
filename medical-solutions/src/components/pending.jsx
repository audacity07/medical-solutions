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

export function Pending({ children, className, item, func, disabled = false }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  // console.log(item);

  const { logout, userInfo } = useContext(AuthContext);

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
    logout();
  }

  async function updateStatus(item) {
    let dose = "";
    if (item.dose1.status === false) {
      dose = "dose1";
    } else {
      dose = "dose2";
    }

    // if (dose === "dose1" && item.hospital === "") {
    //   toast({
    //     position: "top",
    //     title: "User has not scheduled for Dose 1",
    //     // description: "You can book the vaccination slot now",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   return;
    // }

    // if (dose === "dose2" && item.hospital === "") {
    //   toast({
    //     position: "top",
    //     title: "User has not scheduled for Dose 2",
    //     // description: "You can book the vaccination slot now",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   return;
    // }

    let obj = {
      [dose]: {
        ...item[dose],
        status: true,
      },
    };

    try {
      await fetch(
        `https://medical-solutions-server.onrender.com/users/${item.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      func();
    } catch (error) {
      console.log(error);
    }
  }

  function handleYes() {
    updateStatus(item);
    onClose();
  }

  return (
    <>
      <button className={className} onClick={onOpen} disabled={disabled}>
        {children}
      </button>

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
              Is the user vaccinated?
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
                onClick={handleYes}
                ml={3}
                fontWeight="500"
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
