import styled from "styled-components";
import { Colors } from "../utils/color";
import { headerMenu, userMenu } from "../contants/menu";
import useDataStore from "../store/useDataStore";
import { CommonProps } from "../navigation";
import { useCallback, useEffect, useState } from "react";
import useAppStore from "../store/useAppStore";
import { Link } from "react-router-dom";

const Layout = styled.header`
  display: flex;
  position: sticky;
  width: calc(100% - 3.75rem);
  top: 0;
  left: 0;
  padding: 14.4px 1.875rem 10px;
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
  margin-right: 20px;
  &: last-child {
    margin: 0;
  }
`;

const Text = styled(Link)<{ $type: string }>`
  font-size: ${props => props.$type === "menu" ? "0.75rem" : "1.2rem"};
  color: ${Colors.Black};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

const Header = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const { isLogin } = useAppStore();
  const { basket } = useDataStore();
  const [ menus, setMenus ] = useState<Props.HeaderMenu[]>([]);

  useEffect(() => {
    const login = isLogin ? "false" : "true";
    const menu = userMenu.filter((v) => v.login !== login);
    setMenus(menu);
  }, [isLogin]);

  return (
    <Layout>
      <MenuLayout>
        {headerMenu.map((item) => (
          <Menu key={item.idx}>
            <Text $type="menu" to={item.path}>{item.text}</Text>
          </Menu>
        ))}
      </MenuLayout>
      <Text $type="logo" to="/">BUY THIS CLOTHES</Text>
      <MenuLayout>
        {menus.map((item) => (
          <Menu key={item.idx}>
            <Text $type="menu" to={item.path}>
              {item.text === "Cart" ? `${item.text}(${basket.length})` : item.text}
            </Text>
          </Menu>
        ))}
      </MenuLayout>
    </Layout>
  );
};

export default Header;