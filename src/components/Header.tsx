import styled from "styled-components";
import { Colors } from "../utils/color";
import { headerMenu, userMenu } from "../contants";

const Layout = styled.header`
  display: flex;
  position: fixed;
  width: 96%;
  top: 0;
  left: 0;
  padding: 14.4px 2% 10px;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.White};
  z-index: 2000;
  border-bottom: 1px solid #ccc;
`;

const MenuLayout = styled.ul`
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  list-style-type: none;
  margin-right: 26px;
  &: last-child {
    margin: 0;
  }
`;

const Text = styled.a<{ $type: string }>`
  font-size: ${props => props.$type === "menu" ? "0.9rem" : "1.2rem"};
  color: ${Colors.Black};
  font-weight: bold;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Layout>
      <MenuLayout>
        {headerMenu.map((item) => (
          <Menu key={item.idx}>
            <Text $type="menu" href={item.path}>{item.text}</Text>
          </Menu>
        ))}
      </MenuLayout>
      <Text $type="logo" href="/">BUY THIS CLOTHES</Text>
      <MenuLayout>
        {userMenu.map((item) => (
          <Menu key={item.idx}>
            <Text $type="menu" href={item.path}>{item.text}</Text>
          </Menu>
        ))}
      </MenuLayout>
    </Layout>
  );
};

export default Header;