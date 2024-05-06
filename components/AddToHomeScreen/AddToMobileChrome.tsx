import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface Props {
  visible: boolean;
  closePrompt: () => void;
  handleInstalled: () => void;
}

export default function AddToMobileChrome(props: Props) {
  const { closePrompt, visible, handleInstalled } = props;

  return (
    <Modal isOpen={visible} onClose={closePrompt}>
      <ModalOverlay />
      <ModalContent mx="4" mt="200px">
        <ModalCloseButton />
        <ModalHeader>
          <Text fontSize={12}>نصب نرم افزار</Text>
        </ModalHeader>
        <ModalBody>
          <Text fontSize={12}>برای نصب نرم افزار از سمت راست بالای صفحه</Text>

          <Text display="flex" my="4" fontSize={12}>
            علامت سه نقطه
            <Text fontSize={14} mx="2" fontWeight={"bold"}>
              ⠇
            </Text>
            را فشار دهید.
          </Text>

          <Text display="flex" fontSize={12}>
            و بعد از آن علامت
            <Text fontSize={14} mx="2" fontWeight={"bold"}>
              install app{" "}
            </Text>{" "}
            را فشار دهید.
          </Text>
          <Flex mt="6" justify="center" w="100%">
            <Button
              size="sm"
              w="100%"
              colorScheme="green"
              onClick={handleInstalled}
            >
              نصب کردم
            </Button>
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
    // <div className="fixed top-0 left-0 right-0 h-[60%] z-50 pt-12 px-4 text-white">
    //     <ImArrowUp className="text-4xl absolute top-[10px] right-[10px] text-indigo-700 z-10 animate-bounce" />
    //     <div className="relative bg-primary p-4 h-full rounded-xl flex flex-col justify-around items-center text-center">
    //         <button className="absolute top-0 right-0 p-3" onClick={closePrompt}>
    //             <FaTimes className="text-2xl" />
    //         </button>
    //         <p className="text-lg">For the best experience, we recommend installing the Valley Trader app to your home screen!</p>
    //         <div className="flex gap-2 items-center text-lg">
    //             <p>Click the</p>
    //             <HiDotsVertical className="text-4xl" />
    //             <p>icon</p>
    //         </div>
    //         <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
    //             <p>Scroll down and then click:</p>
    //             <div className="bg-zinc-50 flex justify-between items-center w-full px-4 py-2 rounded-lg text-zinc-900">
    //                 <MdAddToHomeScreen className="text-2xl" />
    //                 <p>Add to Home Screen</p>
    //             </div>
    //         </div>
    //         <button className="border-2 p-1" onClick={doNotShowAgain}>Don&apos;t show again</button>
    //     </div>
    // </div>
  );
}
