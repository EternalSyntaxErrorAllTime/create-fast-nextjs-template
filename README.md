<p align="center">
  <img width="150" height="133" src="https://raw.githubusercontent.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/main/public/icons/logo.svg" alt="Logo">
</p>

<h1 align="center">Create fast nextjs template</h1>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/blob/main/LICENSE)
[![node](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)]()

</div>

**Create fast nextjs template** - a minimal template for quickly starting web applications on Next.js.
Contains basic project configuration, typing, file structure, and basic components.
The project structure and configuration allow you to quickly start development while maintaining consistent code and architecture standards.

<h2 id="content_list">Table of Contents 📑</h2>

- [Stack](#stack)
- [File structure](#file-structure)
- [Implemented features](#implemented-features)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

<h2 id="stack">Stack 🧰</h2>

| **Type** | **Used** |
|:--:|:--:|
| 💻 **Language** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="30" height="30" /><br>**TypeScript** |
| ⚙️ **Framework** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="30" height="30" /><br>**Next.js (App Router)** |
| 🗄️ **Database** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="30" height="30" /> + <img src="https://typeorm.io/img/typeorm-icon-white.png" width="35" height="25" /><br>**PostgreSQL + TypeORM** |
| 🌍 **Global state** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="30" height="30" /><br>**Redux** |
| 📡 **API requests** | <img src="https://raw.githubusercontent.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/main/public/icons/withReadMe/ky.svg" width="30" height="30" /> + <img src="https://tanstack.com/images/logos/logo-white.svg" width="30" height="30" /><br>**Ky + TanStack Query** |
| 🎨 **Visual** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width="30" height="30" /> + <img src="https://cdn.simpleicons.org/sass" width="30" height="30" /><br>**Material-UI + SCSS** |
| 🔒 **Validation** | <img src="https://raw.githubusercontent.com/colinhacks/zod/HEAD/logo.svg" width="30" height="30" /><br>**Zod** |
      
<h2 id="file-structure">File structure 🗂️</h2>
Below is not the complete project structure, but only the most important files and directories that reflect the basic architecture of the application.

```bash
📁 public                               # Public resources
│ ⭐ favicon.ico
│ 📁 icons
│ 📁 image
📁 src                
│ 📁 app
│ │ 📁 api
│ │ │ 📁 auth                           # API for user authentication
│ │ │ 📁 commerce                       # API for business logic
│ │ │ 📁 data                           # API for data retrieval (select)
│ │ 📄 index.scss                       # Global styles 
│ │ 📄 layout-client.tsx                     
│ │ 📄 layout.tsx                                 
│ │ 📄 theme.ts                         # Theme settings - Material-UI
│ 📁 components
│ │ 📄 Image.tsx                        # Component wrapper for images
│ │ 📁 LayoutComponents                 # Components for main structure
│ 📁 hooks                              # Custom React hooks
│ 📁 redux                              # Redux store
│ 📁 server-action                       
│ │ 📁 database                         # Working with the database
│ │ │ 📄 data-source.ts                 # Init and connect to database
│ │ │ 📁 entities                       # ORM entities
│ │ │ │ 📁 auth                         # Entities, auth schemes
│ │ │ 📁 migration                      # Database migrations
│ │ │ 📁 repo                           # Database query functions
│ │ │ 📄 transformers.ts                # Data converters
│ 📁 styles                             # Reusable styles
│ 📁 utils                              # Utilities and support functions
📄 basic.types.ts                       # Types used throughout the project
📄 constants-value.ts                   # Project constants and variables
📄 declare.types.ts                     # Types for library declarations
📄 zod-settings.ts                      # Settings for Zod validation
```

<h2 id="implemented-features">Implemented features 🧩</h2>

Details about the currently added features/components can be found in `DATA.md`.
📘 [All information about current project data](https://github.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/blob/main/DATA.md)

<h2 id="installation">Installation ⚙️</h2>

To begin development based on this template, follow these steps:
1) Clone the repository and install dependencies:
```bash
git clone https://github.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template.git
cd create-fast-nextjs-template
npm install
```
2) Create `.env` based on `.env.example`:
```bash
cp .env.example .env
```
- Configure environment variables: database, keys, etc.
3) Configure the database (PostgreSQL + TypeORM):
   Create a database corresponding to the `DB_NAME` variable in `.env`.
   Check the connection to the database.
4) Configure project files:
   - Main configuration files (if necessary):
     - metadata.ts
     - manifest.ts
     - robots.ts
     - sitemap.ts  
   - Configuring links (src/components/LayoutComponents/.../link.ts):
     - FooterWebSite
     - HeaderWebSite
5) Start the project in development mode:
```bash
npm run dev
```
The project is available at https://localhost:3000

<h2 id="contributing">Contributing 🤝</h2>

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

<h2 id="license">License 📄</h2>

This project is licensed under the terms of the  [MIT License](https://github.com/EternalSyntaxErrorAllTime/create-fast-nextjs-template/blob/main/LICENSE)