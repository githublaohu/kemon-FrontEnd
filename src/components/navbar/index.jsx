import { View, Text, Button, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";

import logo from "@/asset/logo.png";
import "./index.scss";

const Navbar = () => {
  return (
    <View className="navbar navbar-wrapper">
      <Image src={logo} className="logo" />
      <View className="action">
        <View className="icon-action at-icon at-icon-sketch"></View>
        <View className="icon-action at-icon at-icon-search"></View>
        <View className="icon-action at-icon at-icon-user"></View>
      </View>
    </View>
  );
};

export default Navbar;
