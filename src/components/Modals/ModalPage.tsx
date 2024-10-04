import { useState } from "react";
import Modal from "./Modal";
import Button, { ButtonType } from "../Buttons/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button buttonType={ButtonType.primary} onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a tristique
        dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae dapibus
        risus. Cras sapien neque, consectetur eget ultricies eget, tempus in
        enim. Aenean volutpat semper auctor. Quisque faucibus mattis tempor.
        Curabitur commodo id erat in egestas. Nulla facilisi. Integer fringilla
        porta enim, non finibus arcu facilisis eu. Curabitur iaculis volutpat
        neque, non hendrerit ipsum dignissim id.
      </p>
    </Modal>
  );

  return (
    <div>
      <Button buttonType={ButtonType.primary} onClick={handleOpen}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
      <p>
        11. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
        tristique dui, non pulvinar eros. Vestibulum a lorem orci. Donec vitae
        dapibus risus. Cras sapien neque, consectetur eget ultricies eget,
        tempus in enim. Aenean volutpat semper auctor. Quisque faucibus mattis
        tempor. Curabitur commodo id erat in egestas. Nulla facilisi. Integer
        fringilla porta enim, non finibus arcu facilisis eu. Curabitur iaculis
        volutpat neque, non hendrerit ipsum dignissim id.
      </p>
    </div>
  );
}

export default ModalPage;
