/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-4dbac9ba'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "0cc5fd1ac9a2974e547e.js",
    "revision": "1eb62cef2a99684d784b03f1ed667710"
  }, {
    "url": "41d09c285bb976d959d9.js",
    "revision": "36bf08f7b9fb5ec977a4cc945759633b"
  }, {
    "url": "74a45d2cfe8fefb285b0.js",
    "revision": "8b716a979321f448801b47861ba86c0c"
  }, {
    "url": "7baca3bb032be381b324.js",
    "revision": "8bd3a4a77f357822620fa9e6a10b641e"
  }, {
    "url": "95a97d2bb1b02e011c75.js",
    "revision": "8e173fad6be9effc8a5bb199599eb9e8"
  }, {
    "url": "a6c2b6bf359c9475a248.js",
    "revision": "7723ee2ed5492153664b6c4a36a34b0e"
  }, {
    "url": "base-element.d.ts",
    "revision": "c7f14e6b1b0b94397065577abf5b40ef"
  }, {
    "url": "c54b1caf7665ed3097d6.js",
    "revision": "46c0b7fa2656a7cb3a9a7d4b90fbbbc9"
  }, {
    "url": "container/ripple-container.d.ts",
    "revision": "fb3281d7ce51e41802258db95131ba2c"
  }, {
    "url": "custom-components/cards/card-component.d.ts",
    "revision": "3ba7fe603442de5495a0ea62faf14867"
  }, {
    "url": "custom-components/cards/carousel-component.d.ts",
    "revision": "873c0bf48c3d34a0ebf0d1990ab521af"
  }, {
    "url": "custom-components/clock/custom-counter.d.ts",
    "revision": "46c45ab5ffa28bcd6c64fdb31116c174"
  }, {
    "url": "custom-components/input/custom-input.d.ts",
    "revision": "ecc956d809e3df8cfa8e09d64a4bec67"
  }, {
    "url": "custom-components/layout/app-drawer.d.ts",
    "revision": "043a98476be489789f21ad6ad66ca69f"
  }, {
    "url": "custom-components/layout/app-header.d.ts",
    "revision": "38dae91c0a770ba99c272cf87c27ad1a"
  }, {
    "url": "data/tmp-data.d.ts",
    "revision": "db196c5b8286c85e39fb81ac7cb99698"
  }, {
    "url": "icons/icons.d.ts",
    "revision": "89ec2c08c802e4ab3248c4931ae0bfbc"
  }, {
    "url": "index.html",
    "revision": "0aca78e68a7720841ece35fa5aa0badc"
  }, {
    "url": "main-app-05ca62b492f5a83f9eb1.js",
    "revision": "43f22979a53ed1aa7e1698b2b7c1e573"
  }, {
    "url": "main-app.d.ts",
    "revision": "87a017dd2119df8a52c69e1e9693c544"
  }, {
    "url": "pages/auction-view.d.ts",
    "revision": "1072cb2a11dd118c1ceeaf151401842f"
  }, {
    "url": "pages/error-view.d.ts",
    "revision": "a747cc05116281605cb712bdfb528d96"
  }, {
    "url": "pages/home-view.d.ts",
    "revision": "ef22e96538db212e59864a08f62e32ae"
  }, {
    "url": "pages/login-view.d.ts",
    "revision": "46e5eb68b7546d3f298dfd8007d62a8f"
  }, {
    "url": "pages/page-view.d.ts",
    "revision": "51f56e357ea4b839501bbe4a86277e70"
  }, {
    "url": "pages/profile-view.d.ts",
    "revision": "70c03ee4380dbca2aa0d66e2e8a58ed6"
  }, {
    "url": "requests/request.d.ts",
    "revision": "5581dd8a8f9e23708dd93064061e2051"
  }, {
    "url": "requests/socket.d.ts",
    "revision": "7ab3515d046971468bb6080eaa1306e9"
  }, {
    "url": "snack-bar.d.ts",
    "revision": "ccdfb28e3b1bf4aec509867abe3d9bcd"
  }, {
    "url": "styles/main-shared-style.d.ts",
    "revision": "444710741310ecfbfd53765b7cf53bf2"
  }, {
    "url": "utilities/helpers.d.ts",
    "revision": "3ff60ad84b810ab55c116963ff1119ac"
  }, {
    "url": "utilities/media-query.d.ts",
    "revision": "de0c738e02bea141c3b3ce51ca244433"
  }, {
    "url": "utilities/metadata.d.ts",
    "revision": "8d2f37ad39684e90fea63f056a0823af"
  }, {
    "url": "utilities/network.d.ts",
    "revision": "e32e78d280bf35dcfd1e1b1fb02a3fcf"
  }, {
    "url": "utilities/router.d.ts",
    "revision": "22a02cec7073476652e97d64e1a918c3"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
