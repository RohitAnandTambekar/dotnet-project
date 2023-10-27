import { Button, Container, Menu } from "semantic-ui-react";

interface Props{
  formOpen: ()=>void;
}


function Navbar({formOpen}:Props) {

  
  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="../../public/assests/logo.png" alt="logo" style={{marginRight: "10px"}} />
            Reactivities
          </Menu.Item>

          <Menu.Item name="Activities" />
          <Menu.Item>
            <Button positive content="Create Activity" onClick={formOpen}/>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default Navbar;
