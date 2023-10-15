export default defineAppConfig({
  pages: ["pages/index/index", "pages/discover/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "index",
      },
      {
        pagePath: "pages/discover/index",
        text: "discover",
      },
    ],
  },
});
