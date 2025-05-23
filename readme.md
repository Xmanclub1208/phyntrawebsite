# GamerVault Hosting

GamerVault Hosting is a comprehensive website template designed for game hosting services. This template includes several key pages to help you set up a professional and functional hosting website quickly and efficiently.

## Pages Included

- **Index**: The main landing page.
- **Minecraft**: Dedicated page for Minecraft hosting services.
- **Game Hosting**: General game hosting services page.
- **Discord Bot**: Page for hosting Discord bots.
- **VPS**: Virtual Private Server hosting page.
- **Dedicated**: Dedicated server hosting page.
- **About**: Information about the company.
- **Knowledgebase**: Knowledgebase articles for customer support.

## Customization

### Company Name

To change the name displayed in the navbar, follow these steps:

1. Open `script.js`.
2. Locate the configuration section.
3. Modify the `companyName` value to your desired name.

Example:

// script.js
### const config = {
###     companyName: "GamerVault Hosting",
###     discordServerID: "1160224295348359348"
### };

### Server Pinging

To add server pinging functionality, follow these steps:

1. Open `ping.js`.
2. Add your server details to the configuration section.

Example:

// ping.js
### const locations = [
###     {
###         id: "chic-usa",
###         name: "Chicago",
###         url: "https://google.com"
###     },
###     {
###         id: "ny-usa",
###         name: "New York",
###         url: "https://google.com"
###     },
###     {
###         id: "lon",
###         name: "London",
###         url: "https://google.com"
###     },
###     {
###         id: "syd",
###         name: "Sydney AU",
###         url: "https://google.com"
###     }
### ];

---

This template was created by Mattie/JasiriTheHyena (She/Her).
