import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Imagenes from "./ImagenPerson";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  height:"30rem",
  bgcolor: '#0F172A',
  border: '2px solid #F59E0B',
  boxShadow: 5,
  overflowY: 'scroll',
  p: 4,
};
const styleButton={
  color:"white"
}

//Componente modal de Material UI
export default function TransitionsModal({datos}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      
      <Button onClick={handleOpen} sx={styleButton}>
          <lord-icon src="https://cdn.lordicon.com/auvicynv.json" trigger="loop-on-hover" delay="25" style={{width:20, height:20}}></lord-icon>
         <span className=' text-sm'> Ver los personajes</span>
      </Button>
      <Modal
        
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className=" rounded-lg">
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" className=" text-center">
              {datos.name}
            </Typography>
              <div>
                  <Imagenes data={datos}/>
              </div>
          </Box>
        </Fade>
        
      </Modal>
    </div>
    
  );
}