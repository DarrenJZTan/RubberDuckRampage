import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

// LOCAL MODULES
import * as styles from './Signup.css'
import authService from '../../services/authService';
import useAuth from '../../hooks/useAuth'
import RdrCard from '../../components/common/RdrCard'
import RdrButton2 from '../../components/common/RdrButton';

function Signup() {
  // ACCESS VARIABLES FROM HOOKS
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  const passwordConfirmRef = useRef();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties
  const { username, email, password } = user;

  // FORM FUNCTIONS
  // handleTextChange handles state value change for all login data
  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // handleSubmit will submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Early Validation - Error Check First
    if(password !== passwordConfirmRef.current.value){
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    // API Call to Write User Data
    try {
      const response = await authService.register(user);
      loginSaveUser(response.data);
      navigate('/dashboard');
    } catch(err) {
      console.log(err?.response);
      setTimeout(() => {setLoading(false)}, 1000);
    }
  }

  return (
    <RdrCard title="Sign Up" authform>
      <Form onSubmit={ handleSubmit }>
        {/* GROUP 1: USERNAME */}
        <Form.Group className={styles.styledGroup} controlId="username">
          <Form.Label className={styles.styledLabel}>Username</Form.Label>
          <Form.Control
            className={styles.styledInput}
            type="text" 
            placeholder="Username"
            name="username"
            value={username}
            onChange={ handleTextChange }
            required 
          />
        </Form.Group>
        {/* GROUP 2: EMAIL */}
        <Form.Group className={styles.styledGroup} controlId="email">
          <Form.Label className={styles.styledLabel}>Email</Form.Label>
          <Form.Control className={styles.styledInput} type="email" placeholder="Email" name="email" value={email} onChange={ handleTextChange } required />
        </Form.Group>

        {/* GROUP 3: PASSWORD */}
        <Form.Group className={styles.styledGroup} controlId="password">
          <Form.Label className={styles.styledLabel}>Password</Form.Label>
          <Form.Control className={styles.styledInput} type="password" placeholder="Password" name="password" value={password} onChange={ handleTextChange } required />
        </Form.Group>

        {/* GROUP 4: PASSWORD CONFIRM */}
        <Form.Group className={styles.styledGroup} controlId="password-confirm">
          <Form.Label className={styles.styledLabel}>Confirm Password</Form.Label>
          <Form.Control className={styles.styledInput} type="password" placeholder="Password Confirmation" ref={passwordConfirmRef} required />
        </Form.Group>

        {/* SUBMIT BUTTON */}
        <RdrButton2 loadingState={loading}>
          {loading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : 'Submit'}
        </RdrButton2>
      </Form>
      <div className={styles.userNav}>
        <span>Already a member? &nbsp;
          <Link to="/login">Login Here</Link>
        </span>
      </div>
    </RdrCard>
  )
}

export default Signup