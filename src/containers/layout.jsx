import { useEffect } from "react";
import NavBar from "../components/navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

const Layout = (props) => {
  console.log(props);
  const navigate = useNavigate();
  useEffect(() => {
    // Logout code in firebase (call this code on logout button click)
    // auth.signOut();
    // .then((response)=>{
    //   console.log(response);
    // })
    // .catch((error)=>{
    //   console.error(error);
    // })
    // Check if the user is logged in, if not then redirect to them back to login page
    auth.onAuthStateChanged((user) => {
      if (!user) {
        // redirect back to login page
        navigate("/");
      }
      console.log(user);
    });
  }, []);

  return (
    <>
      <NavBar />
      {props.children}
      <footer>Copyright</footer>
    </>
  );
};
export default Layout;
