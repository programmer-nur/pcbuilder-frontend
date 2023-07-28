import React, { useState } from "react";

import { Drawer, Button, Menu, Layout } from "antd";
import { DesktopOutlined, HomeOutlined, MenuOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Header} = Layout;

const categories = [
  { key: "processor", label: "Processor" },
  { key: "motherboard", label: "Motherboard" },
  { key: "ram", label: "RAM" },
  { key: "Power Supply Unit", label: "Power Supply Unit" },
  { key: "Monitors", label: "Monitors" },
  { key: "Mouse", label: "Mouse" },
];

function AppHeader() {
  const [selectedKeys, setSelectedKeys] = useState("");
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (e) => {
    setSelectedKeys(e.key);
  };

  const generateCategoryMenuItems = (categories) => {
    return categories.map((category) => (
      <Menu.Item key={category.key}>
        <Link href={`/categories/${category.key}`}>{category.label}</Link>
      </Menu.Item>
    ));
  };
  return (
    <Header
     className="flex justify-between shadow-lg items-center bg-transparent"
    >
      <div className="brand-logo">
      <Link href="/">
      <h2 className="text-black uppercase cursor-pointer">
          Extreme Pc
        </h2>
      </Link>
        
      </div>
      <div className="logo" />
      <Menu  mode="horizontal" defaultSelectedKeys={["home"]} className="leading-9 bg-transparent border-none hidden md:block text-black">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.SubMenu key="categories" title="Categories" icon={<UnorderedListOutlined />}>
       {
        categories.map(category=>(
          <Menu.Item key={category.key}>
          <Link href={`/categories/${category.key}`}>
            <span>{category.label}</span>
          </Link>
        </Menu.Item>
        ))
       }
      </Menu.SubMenu>
      <Menu.Item key="featured" icon={<UnorderedListOutlined />}>
          <Link href="/featured">
            <span>Featured</span>
          </Link>
        </Menu.Item>
      <Menu.Item key="pc_builder" icon={<DesktopOutlined />}>
        <Link href="/pc_builder">
          <span>PC Builder</span>
        </Link>
      </Menu.Item>
    </Menu>

      <div className=" block md:hidden">
        <Button
          className=" block md:hidden"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer placement="right" onClose={onClose} open={open}>
          <Menu
            mode="vertical"
            selectedKeys={selectedKeys}
            onClick={handleMenuItemClick}
          >
            <Menu.Item key="home">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="pc_builder">
              <Link href="/pc_builder">PC Builder</Link>
            </Menu.Item>
            <Menu.SubMenu key="categories" title="Categories">
              {generateCategoryMenuItems(categories)}
            </Menu.SubMenu>
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
}

export default AppHeader;
