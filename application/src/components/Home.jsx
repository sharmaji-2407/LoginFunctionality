import React,{useState, useEffect} from 'react';
import FormImg from '../media/foregroundImg.png';
import '../scss/Home.scss';
import showpass from '../media/showPass.png';
import hidepass from '../media/hidePass.png';

const Home = (prop) => {

  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [ConfPass, setConfPass] = useState("");
  // const [name, setname] = useState("");
  // const [phoneno, setphoneno] = useState("");

  const initialValues = {email: "", password: "", ConfPass: "", name: "", phoneno: "", check:""}
  const [formValues, setformValues] = useState(initialValues)

  
  const [ErrorMessage, setErrorMessage] = useState({});
  const [Login, setLogin] = useState(false);
  const [isChecked, setisChecked] = useState(false);

  const [viewPass, setviewPass] = useState({value: "password", img: showpass});
  
  const createAccount = (e) => {
    e.preventDefault();
    setErrorMessage(validate(formValues));
    if(Object.keys(ErrorMessage).length === 0 && isChecked)
      setLogin(true);
    
    
    
  }

 


  useEffect(()=>{
    console.log(ErrorMessage);
    if(Object.keys(ErrorMessage).length === 0 && Login){
      prop.isLogin(Login);
    }
  },[ErrorMessage]);



  
  const validate = (values) => {
    const errors = {}
    const Email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const Phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // const Password_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(!values.email){
      errors.email = "Email is required"; 
    }
    else if(!Email_regex.test(values.email)){
      errors.email = "Enter a valid email."
    }

    if(!values.password){
      errors.password = "Password is required"; 
    }
    else if(values.password.length < 8   &&   values.password.search(/[a-z]/i) < 0   &&   values.password.search(/[0-9]/) < 0){
      errors.password = "Enter a valid password. use atleast one special character [!@#$%^&*] and atleat one number [0-9]"
    }

    if(!values.ConfPass){
      errors.ConfPass = "Please re-enter your password"; 
    }
    else if (values.ConfPass !== values.password){
      errors.ConfPass = "Passwords dosen't match";
    }

    if(!values.name){
      errors.name = "Name is required"; 
    }

    if(!values.phoneno){
      errors.phoneno = "Phone Number is required"; 
    }
    else if(!Phone_regex.test(values.phoneno)){
      errors.phoneno = "Enter a valid phone number. Donot include (0 or country code)"
    }
    

    if(!values.check){
      errors.check = "Please check this field";
    }
    
    return errors;
  }

  const passwordViewhandler = () => {
    if(viewPass.value === "password")
      setviewPass({value: "text", img: hidepass});
    else
    setviewPass({value: "password", img: showpass});
  }

  
  


  return (
    <div className='Home'>
        <div className='Home__left'>
          <img className='Home__img' src={FormImg} alt="Foreground" />
         
          <h1 className='Home__leftHeading'>Choose a date range</h1>
          <p className="Home__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestiae temporibus?</p>
        </div>
        <div className="Home__right">
          <h1 className="Home__rightHeading">Create an account</h1>
          <form action="" className="Home__form" onSubmit={createAccount}>
            <label>You email address 
            </label>
            <input type="text" className="inputField"  autoComplete="off" value={formValues.email} onChange={e => setformValues({...formValues, email : e.target.value})}/>
            <span className="errorMessage">{ErrorMessage.email}</span>

            <label>You password 
            </label>
            <input type={viewPass.value} className="inputField" value={formValues.password} onChange={e => setformValues({...formValues, password : e.target.value})}/>
            <span className="errorMessage">{ErrorMessage.password}</span>
            <img src={viewPass.img} alt="show password" className="Home__passView" onClick={passwordViewhandler} />
            <label className='confpass'>Confirm your password 
            </label>
            <input type={viewPass.value} className="inputField" value={formValues.ConfPass} onChange={e => setformValues({...formValues, ConfPass : e.target.value})}/>
            <span className="errorMessage">{ErrorMessage.ConfPass}</span>

            <label>You full name 
            </label>
            <input type="text" className="inputField" value={formValues.name} onChange={e => setformValues({...formValues, name : e.target.value})}/>     
            <span className="errorMessage">{ErrorMessage.name}</span>

            <label>You phone number 
            </label>
            <input type="text" className="inputField" value={formValues.phoneno} onChange={e => setformValues({...formValues, phoneno : e.target.value})}/>
             <span className="errorMessage">{ErrorMessage.phoneno}</span>

            <label className='check'>I read and agree Terms and Conditions
              <input className='checkb' type="checkbox" onChange={(e)=>{
                  setisChecked(e.target.checked); 
                  setformValues({...formValues, check : e.target.checked});
                }
              } />
              </label>
              <span className="errorMessage">{ErrorMessage.check}</span>
              
              <button type={'submit'}>Create Account</button>
            
          
            </form>
        </div>
      </div> 
  )
};

export default Home;