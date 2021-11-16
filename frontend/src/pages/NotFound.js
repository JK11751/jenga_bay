import NavBar from "../components/PageSections/NavBar";

const NotFound = ({cartItems}) => {
  return (
    <>
      <NavBar cartItems={cartItems} />
       <p>Error!</p>     
    </>
  );
};

export default NotFound;