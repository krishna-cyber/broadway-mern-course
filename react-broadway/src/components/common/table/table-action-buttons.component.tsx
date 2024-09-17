import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import {
  HiArchive,
  HiOutlineExclamationCircle,
  HiPencil,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

type TableActionButtonsProps = {
  editUrl: string;
  deleteAction: any;
  rowId: string;
  disabled:boolean
};


const TableActionButtons = ({
  editUrl,
  deleteAction,
  rowId,
  disabled
}: TableActionButtonsProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <NavLink to={editUrl}>
        <Button
    
          color={"green"}
          className=" bg-green-600 w-fit text-white hover:text-black"
        >
          <HiPencil className=" h-4 w-4" />
        </Button>
      </NavLink>
      <Button
        className=" bg-red-700 text-white w-fit hover:text-black"
        color={"red"}
        disabled={disabled}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <HiArchive className=" h-4 w-4" />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Banner?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
              
                onClick={() => {
                  deleteAction(rowId);
                  setOpenModal(false);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableActionButtons;
