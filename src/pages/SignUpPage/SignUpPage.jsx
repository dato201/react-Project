import classes from "./SignUpPage.module.css";


const SignUpPage = () => {

  return (
    <div className={classes.SignUpPage}>
        <div className={classes.panel}>
          <h1 className={classes.h1}>Sign Up</h1>
          <input placeholder="First Name..." />
          <input placeholder="Last Name..." />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Register</button>      
        </div>
    </div>
  );
};

export { SignUpPage };