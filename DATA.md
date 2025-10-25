<h1 align="center">Implemented features 🧩</h1>

<div>
  <h2>HeaderWebSite</h2>
  Main header of the website.
  <ul>
    <li>All links (menu items) are taken from the array `src/components/LayoutComponents/HeaderWebSite/links.ts`.</li>
    <li>A theme switch is built into the header.</li>
    <li>A link to authorization has been implemented; if the user is authorized, it leads to their profile.</li>
  </ul>
  <div align="center"><img align="center" src="https://raw.githubusercontent.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/main/public/icons/withReadMe/header.png"></div>
</div>
<div>
  <h2>ConfirmationCookies</h2>
  Pop-up cookie notification.
  <ul>
    <li>Shown to the user on their first visit.</li>
    <li>When you click the confirmation button, the status is saved in localStorage and marked for 30 days — the notification will not be displayed until this period expires.</li>
  </ul>
  <div align="center"><img src="https://raw.githubusercontent.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/main/public/icons/withReadMe/cookies.png"></div>
</div>

<div>
  <h2>ButtonUp</h2>
  Button to move the page up.
  <ul>
    <li>Appears when scrolling below 450px.</li>
    <li>Smoothly scrolls the page to the top when clicked.</li>
  </ul>
  <div align="center"><img src="https://raw.githubusercontent.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/main/public/icons/withReadMe/button-up.svg" width="70" height="70"></div>
</div>

<div>
  <h2>FooterWebSite</h2>
  Main footer of the website.
  <ul>
    <li>All links (menu items) are taken from the array `src/components/LayoutComponents/FooterWebSite/link.ts`.</li>
  </ul>
  <div align="center"><img src="https://raw.githubusercontent.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/main/public/icons/withReadMe/footer.png"></div>
</div>

<div>
  <h2>Authorization page</h2>
  User authorization/login page `src/app/user/auth`.
  <ul>
    <li>Implemented login interface with support for external providers and email.</li>
    <li>The page is used as a route for signing in via next-auth (sign-in).</li>
  </ul>
  <div align="center"><img src="https://raw.githubusercontent.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/main/public/icons/withReadMe/authorization-page.png" width="750" height="600"></div>
</div>

<div>
  <h2>Authentication and sessions</h2>
  Session implemented via `next-auth` + `TypeORM`.
  <ul>
    <li>Supported providers: Email, GitHub, Google.</li>
    <li>The state of users and sessions is stored and controlled using TypeORM and TypeORMAdapter.</li>
  </ul>
</div>

<div>
  <h2>Next.js basic settings</h2>
  Set of exported metadata and sitemap / robots / manifest / viewport routes.
</div>

<div>
  <h2>Material-UI theme</h2>
  Configuring `createTheme` for material-ui.
  <ul>
    <li>`responsiveFontSizes` enabled — fonts are automatically scaled to fit different screen sizes.</li>
    <li>New variants have been added for `Link`:
      <ul>
        <li>`link-center` - Decorative, neat underlining when hovering.</li>
        <li>`link-active` - static underlining (for active state).</li>
        <li>`link-off` - without underlining.</li>
      </ul>
    </li>
      <li>The auto-converter to UPPERCASE has been removed from the button.</li>
      <li>A new `size` has been added for `Button`:
      <ul>
        <li>`default` - initially medium size, but slightly decreases when the screen is reduced.</li>
      </ul>
    </li>
  </ul>
</div>
