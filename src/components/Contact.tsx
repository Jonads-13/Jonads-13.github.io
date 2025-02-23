import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import styles for toast

const CustomTextField = styled(TextField) <{ mode: string }>(({ mode }) =>  ({
  '& .MuiInputBase-input': {
    color: mode === 'dark' ? 'white' : 'black'
  },
  '& .MuiInputLabel-root' : {
    color: mode === 'dark' ? 'white': 'black'
  },
  '& .MuiOutlinedInput-root' :{
    '&.Mui-focused fieldset': {
      borderColor: mode === 'dark' ? '#0c8df0' : '#860cf0'
    },
  }
}));

function Contact({parentToChild}: any) {

  const mode = parentToChild.mode;  

  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    console.log("we are trying to send");

    const newErrors = {
      name: formData.from_name === '',
      email: formData.from_email === '',
      message: formData.message === '',
    };
    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return; // Stop if there are validation errors
    }

    if (form.current) {
      let toastId = toast.loading('Sending your message...', {
        position: "bottom-center",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? 'default_service_id',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? 'default_template_id',
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.update(toastId, {
            render: "Message Successfully Sent!",
            type: "success",
            position: "bottom-center",
            isLoading: false,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          setFormData({ from_name: '', from_email: '', message: '' }); // Reset form
        },
        (error) => {
          console.log('FAILED...', error);
          toast.update(toastId, {
            render: 'Message failed to send!',
            type: 'error',
            position: "bottom-center",
            isLoading: false,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Looking to collaborate, or just chat? Feel free to drop a message.</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <CustomTextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                name='from_name'
                value={formData.from_name}
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                error={errors.name}
                helperText={errors.name ? 'Please enter your name' : ''}
                mode={mode}
              />
              <CustomTextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                name='from_email'
                value={formData.from_email}
                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                error={errors.email}
                helperText={errors.email ? 'Please enter your email or phone number' : ''}
                mode={mode}
              />
            </div>
            <CustomTextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              name='message'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              error={errors.message}
              helperText={errors.message ? 'Please enter the message' : ''}
              mode={mode}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Contact;