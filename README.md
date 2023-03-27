  # remove node-modules & build in mac
  `"clean": "rm -rf ./node-modules ./build"`
  # on windows
  ` "clean": "rd /s /q node_modules build"`

 # "dependencies": {
    "@emotion/css                                    is a library designed for writing css styles with JavaScript

    "@testing-library/jest-dom
    "@testing-library/react                          unit tests
    "@testing-library/user-event
   
    "react"
    "react-dom"                                      react needed  
    "react-router-dom"
    "react-scripts"

    "redux"
    "react-redux"                                   redux needed  
    "redux-actions"
    "redux-devtools-extension"
    "redux-saga"                                    redux saga needed

    "reselect"                                      to createSelectors in selectors 
    "lodash"                                        to support iteration between environments for arrays, strings, and objects
  },
# "devDependencies": {
    "@babel/preset-env"                              ES6 compiler
    "@babel/preset-react"

  
    "@welldone-software/why-did-you-render"
    "concurrently"                                  run couple task in the same time
    "env-cmd"                                       using to run .env files

    "eslint"
    "eslint-config-prettier"
    "eslint-plugin-flowtype"
    "eslint-plugin-import"
    "eslint-plugin-prettier"                        for linting
    "eslint-plugin-react"
    "prettier"
    "stylelint"
    "@nake/stylelint-config"
    "@stylelint/postcss-css-in-js"
    "@emotion/eslint-plugin"

    "nodemon"                                       to run mockserver
    "npm-run-all"                                   run multiple npm-scripts in parallel or sequential

     "@cucumber/cucumber": "^7.3.1",
  - "cross-env": "^7.0.3",                         for e2e
  - "gherkin-testcafe": "^5.1.0",
  - "testcafe": "^1.16.1"
  

   "cross-env": "^7.0.3",                           run tests
   "string.prototype.replaceall": "^1.0.6",         for unit tests tests

  }

  # for .prettierrc.json you should add in newest version
  "bracketSameLine":true

  "check:code-quality": "run-s -c lint:js lint:style prettier",


  # ########################### e2e test ###########################################

  I packages:

  - "@cucumber/cucumber": "^7.3.1", - remember this version!
  - "cross-env": "^7.0.3",
  - "gherkin-testcafe": "^5.1.0",
  - "testcafe": "^1.16.1"


 II setting files:
 
  testcaferc.json:
 {
  "browsers": ["chrome"],
  "screenshots": {
    "path": "./tests/e2e/screenshots",
    "fullPage": false,
    "pathPattern": "${USERAGENT}/${TEST_INDEX}/${FILE_INDEX}.png"
  },
  "src": ["./tests/e2e/scenarios/test.feature", "./tests/e2e/steps/test.js"],
  "selectorTimeout": 20000,
  "assertionTimeout": 20000,
  "pageLoadTimeout": 20000,
  "pageRequestTimeout": 40000,
  "ajaxRequestTimeout": 40000,
  "browserInitTimeout": 3600000,
  "color": true,
  "hostname": "127.0.0.1",
  "quarantineMode": true,
  "debugMode": false,
  "debugOnFail": false,
  "stopOnFirstFail": false,
  "skipJsErrors": true,
  "skipUncaughtErrors": true,
  "speed": 0.1,
  "port1": 8000,
  "port2": 8001,
  "disablePageCaching": true,
  "developmentMode": true,
  "disableScreenshots": false,
  "retryTestPages": true,
  "proxyBypass": ["127.0.0.1"]
}

tests
   e2e
    scenarios
       example.feature
    steps 
       example.js
    screenshot
    utils
    reports 
    config.js

  III. run:


      "test:e2e": "cross-env ENV_TYPE=local gherkin-testcafe"

# ##################### unit test ############################################

I . packages:

"cross-env": "^7.0.3",
"string.prototype.replaceall": "^1.0.6",
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^11.2.7",
 npm i full-icu 
"jest-junit": "^14.0.1"

II. settings files:

jest.config.json -> setupTests.js -> renderWithRouter.js & enhancedRender.js

III. run:

"test": "cross-env NODE_ICU_DATA=node_modules/full-icu react-scripts test",
"test:update-snapshots": "cross-env NODE_ICU_DATA=node_modules/full-icu react-scripts test -u",
"test:ci": "cross-env CI=true NODE_ICU_DATA=node_modules/full-icu react-scripts test --coverage --testResultsProcessor=\"jest-junit\" --watchAll=false",  -  odpalane w jenkinsie

# ##################### setting json  #####################

- zembatka
- command palette
- wpisujesz : Preferences: Open Settings (JSON):

{
  "editor.fontLigatures": true,
  "editor.fontFamily": "Fira Code",
  "editor.fontSize": 18,
 
  "editor.tabSize": 2,
  "prettier.requireConfig": false,
  "prettier.semi": false,
  "editor.codeActionsOnSave": { "source.fixAll": true },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "html.format.wrapAttributes": "force-aligned",
  "html.format.enable": false,
  "htmlhint.enable": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
 
  "emmet.triggerExpansionOnTab": true,
 
  "editor.minimap.enabled": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "files.autoSave": "afterDelay",
  "editor.wordWrap": "on",
  "window.zoomLevel": 1,
  "extensions.confirmedUriHandlerExtensionIds": [],
  "terminal.integrated.profiles.windows": {
    "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe (migrated)": {
      "path": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
      "args": ["-ExecutionPolicy", "Bypass"]
    }
  },
  "terminal.integrated.fontFamily": "monospace",
  "editor.renderWhitespace": "all",
  "editor.lineHeight": 30,
  "editor.linkedEditing": true,
  "editor.smartSelect.selectLeadingAndTrailingWhitespace": false,
  "editor.cursorBlinking": "expand",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.cursorWidth": 2,
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.snippetSuggestions": "top",
  "editor.suggestSelection": "first",
  "files.autoSaveDelay": 1,
  "workbench.hover.delay": 1500,
  "workbench.list.smoothScrolling": true,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.preferredHighContrastColorTheme": "Default Dark+",
  "workbench.preferredDarkColorTheme": "Abyss",
  "workbench.preferredLightColorTheme": "Default High Contrast",
  "workbench.sideBar.location": "right",
  "window.openWithoutArgumentsInNewWindow": "off",
  "explorer.openEditors.visible": 0,
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorWidth": 2,
  "terminal.integrated.rightClickBehavior": "selectWord",
  "terminal.integrated.sendKeybindingsToShell": true,
  "security.workspace.trust.untrustedFiles": "open",
  "settingsSync.keybindingsPerPlatform": false,
  "sync.gist": "8a19be18aa5340b926e4f1d6634ea808",
  "sync.autoDownload": false,
  "sync.autoUpload": false,
  "sync.forceDownload": false,
  "sync.removeExtensions": true,
  "sync.syncExtensions": true,
  "sync.forceUpload": false,
  "sync.quietSync": false,
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "gitlens.hovers.currentLine.over": "line",
  "gitlens.keymap": "alternate",
  "projectManager.git.baseFolders": [
    "template"
  ],
  "security.workspace.trust.startupPrompt": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "bracketPairColorizer.depreciation-notice": false,
  "githubPullRequests.createOnPublishBranch": "never",
  "npm.packageManager": "npm",
  "editor.bracketPairColorization.enabled": false


# ##################### packages # #####################
packages: 
1 npm login skociuba ,barbara81= 
2 npm publish


 "react-router-dom": "^6.2.1",