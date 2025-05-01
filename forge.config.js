// forge.config.js
module.exports = {
  packagerConfig: {
    icon: "/images/icons/icon", // ohne Dateiendung (z. B. icon.png)
  },
  makers: [
    {
      name: "@electron-forge/maker-flatpak",
      config: {
        id: "com.dolibarr.client",
        productName: "Dolibarr Client",
        options: {
          categories: ["Utility"],
          icon: "icon.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          maintainer: "Paco Krummenacher-Geiser <paco@web-stek.com>",
          homepage: "https://www.web-stek.com",
          icon: "icon.png",
          category: "utility",
        },
      },
    },
  ],
};
