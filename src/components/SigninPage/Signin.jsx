"use client";
import { useState } from 'react';
import style from '@/components/SigninPage/SignIn.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignIn , setShowSignIn] = useState(true);
  const [ showSignUp, setShowSignUp] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  function showPasswordHandler(){
    setShowPassword(!showPassword);
  }
  function showSignUpHandler(){
    setShowSignUp(!showSignUp);
    setShowSignIn(!showSignIn);
  }
  function showSignInHandler(){
    setShowSignUp(!showSignUp);
    setShowSignIn(!showSignIn);
  }
  function ResetPassword(){
    setShowSignUp(false);
    setShowSignIn(false);
    setShowResetPassword(!showResetPassword);
  }
  function showSignInPage(){
    setShowSignIn(true);
    setShowResetPassword(!showResetPassword);
  }
  return (
    <>
    <div className={style.signInContainer}>
      {showSignIn&&(
        <div className={style.loginform}>
  <Image src="/login-side-image.avif" alt='login Image' height={50} width={50} unoptimized priority/>
  <form action="" method='post'>
    <h3>Sign In</h3>
     <div className={style.login_input}>
     <label htmlFor="">Email <span className={style.redStar}>*</span></label>
      <input type="email" required="required" placeholder='Enter Your Email'/>
     </div>
     
     <div className={style.login_input}>
     <label htmlFor="">Password <span className={style.redStar}>*</span></label>
      <input type={showPassword? "text":"password"} required="required" placeholder='Enter Your Password'/>
      <Image src={showPassword? "/icons/eye.svg" : "/icons/eye-slash.svg"} height={20} width={20} alt='eye image' unoptimized onClick={showPasswordHandler} />
     </div>
     <input type="submit" value="Sign In"/>
     <span onClick={ResetPassword}>Forgot Password?</span>
     <p>Don't have a account? <span onClick={showSignUpHandler}>Create a account</span></p>
     <div><p>Or Sign In With</p></div>
     <Link href="/">Google <Image src="/google-logo.webp" unoptimized height={30} width={30} alt='google logo image' /></Link>
  </form>
</div>
      )}

{showSignUp && (
  <div className={style.loginform}>
  <Image src="/login-side-image.avif" alt='login Image' height={50} width={50} unoptimized priority/>
  <form action="" method='post'>
    <h3>Sign Up</h3>
     <div className={style.login_input}>
     <label htmlFor="">Name <span className={style.redStar}>*</span></label>
      <input type="text" required="required" placeholder='Enter Your Name'/>
     </div>
     <div className={style.login_input}>
     <label htmlFor="">Email <span className={style.redStar}>*</span></label>
      <input type="email" required="required" placeholder='Enter Your Email'/>
     </div>
     <div className={style.login_input}>
     <label htmlFor="">Password <span className={style.redStar}>*</span></label>
      <input type={showPassword? "text":"password"} required="required" placeholder='Enter Your Password'/>
      <Image src={showPassword? "/icons/eye.svg" : "/icons/eye-slash.svg"} height={20} width={20} alt='eye image' unoptimized onClick={showPasswordHandler} />
     </div>
     <input type="submit" value="Sign Up"/>
     <p>Already have an account? <span onClick={showSignInHandler}>Sign In</span></p>
     <div><p>Or Sign Up With</p></div>
     <Link href="/">Google <Image src="/google-logo.webp" unoptimized height={30} width={30} alt='google logo image' /></Link>
  </form>
</div>
)}
{showResetPassword && (
  <div className={style.loginform}>
  <Image src="/login-side-image.avif" alt='login Image' height={50} width={50} unoptimized priority/>
  <form action="" method='post'>
    <h3>Reset Your Password</h3>
  <p>OTP will sent to your registered email id and mobile number</p>
     <div className={style.login_input}>
     <label htmlFor="">Email <span className={style.redStar}>*</span></label>
      <input type="email" required="required" placeholder='Enter email address'/>
     </div>

     <input type="submit" value="Send OTP"/>
     <div><p>Or Sign In With Password</p></div>
     <article onClick={showSignInPage}> Sign In With Password</article>
     <Link href="/">Google <Image src="/google-logo.webp" unoptimized height={30} width={30} alt='google logo image' /></Link>
  </form>
</div>
)}

    </div>

    </>
  )
}

export default Signin