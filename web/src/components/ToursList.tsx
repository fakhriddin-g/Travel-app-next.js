import TourCard from "./TourCard";
import SidebarFilter from "./ToursSidebarFilter";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

const ToursList = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="w-full">
      <button onClick={onOpen} className="md:hidden text-center py-2 mb-4 w-full bg-gray-200 rounded-lg border-gray-300">
        Все фильтры
      </button>
      <div className="flex">
        <SidebarFilter />
        <TourCard />
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <SidebarFilter isModal/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ToursList;
