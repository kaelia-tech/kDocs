(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{276:function(e,t,o){"use strict";o.r(t);var r=o(2),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),o("p",[e._v("These sections details the available external (i.e. REST/Websocket) as well as the internal (i.e. Classes/Functions) "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Application_programming_interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),o("OutboundLink")],1),e._v(" within each module of the KDK. If you'd like to check the detailed API of a given module please select it in the menu.")]),e._v(" "),o("blockquote",[o("p",[e._v("Modules are published under the "),o("code",[e._v("@kalisio")]),e._v(" namespace with a "),o("code",[e._v("kdk")]),e._v(" prefix in NPM, e.g. "),o("code",[e._v("kCore")]),e._v(" NPM package is named "),o("code",[e._v("@kalisio/kdk-core")])])]),e._v(" "),o("p",[e._v("Each module is internally broken into 3 different parts.")]),e._v(" "),o("ul",[o("li",[e._v("client API ("),o("code",[e._v("client")]),e._v(" folder in module "),o("code",[e._v("src")]),e._v(" folder) to be used within the browser and imported like this:")])]),e._v(" "),o("p",[o("code",[e._v("import { xxx } from '@kalisio/kdk-core/client'")])]),e._v(" "),o("ul",[o("li",[e._v("common API ("),o("code",[e._v("common")]),e._v(" folder in module "),o("code",[e._v("src")]),e._v(" folder)  to be used within the browser or NodeJS and imported like this:")])]),e._v(" "),o("p",[o("code",[e._v("import { xxx } from '@kalisio/kdk-core/common'")])]),e._v(" "),o("ul",[o("li",[e._v("backend API (all other files in module "),o("code",[e._v("src")]),e._v(" folder) to be used within NodeJS and imported like this:")])]),e._v(" "),o("p",[o("code",[e._v("import { xxx } from '@kalisio/kdk-core'")])]),e._v(" "),o("h2",{attrs:{id:"services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),o("p",[e._v("On the client/server side each service API is exposed using the "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/client.html#universal-isomorphic-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers isomorphic API"),o("OutboundLink")],1),e._v(" and the "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/querying.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers common database query API"),o("OutboundLink")],1),e._v(". Although only web sockets are usually used on the client side, both the "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/rest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST"),o("OutboundLink")],1),e._v(" and the "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/socketio.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Socket"),o("OutboundLink")],1),e._v(" interfaces are configured.")]),e._v(" "),o("p",[e._v("KDK usually exposes the available items of a service (e.g. users) through the "),o("code",[e._v("items")]),e._v(" (e.g. "),o("code",[e._v("users")]),e._v(") service. For example you can request the available users like this on the client side:")]),e._v(" "),o("div",{staticClass:"language-javascript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" response "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" api"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("getService")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'users'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("find")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nresponse"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("forEach")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("user")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Do something with the current user")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),o("blockquote",[o("p",[e._v("Depending on the permissions set on the user by the application he might not have access to all items of the service.")])]),e._v(" "),o("h2",{attrs:{id:"hooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),o("p",[e._v("KDK modules provide a collection of "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hooks"),o("OutboundLink")],1),e._v(" to be used by plugins or "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/client.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("client applications"),o("OutboundLink")],1),e._v(". They often rely on "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks-common.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers common hooks"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("blockquote",[o("p",[o("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hooks"),o("OutboundLink")],1),e._v(" are the main way to introduce business logic into applications and plugins so we recommend to understand them well first before reading this.")])]),e._v(" "),o("p",[e._v("Each service can include a set of "),o("em",[e._v("internal")]),e._v(" "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hooks"),o("OutboundLink")],1),e._v(", i.e. hooks required to make the service work. They are built-in with the service and cannot usually be removed.")]),e._v(" "),o("p",[e._v("Each module then exposes a set of "),o("em",[e._v("external")]),e._v(" "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hooks"),o("OutboundLink")],1),e._v(" you can use to extend the capabilities of your application. They are not built-in with the services and are usually added or removed on-demand by your application. The main reason is that you must have control over the order of execution when mixing different hooks to best fit your application logic and avoid any side effect.")]),e._v(" "),o("p",[e._v("We try to organise hooks in different categories:")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("query")]),e._v(": hooks targetting the processing of input query")]),e._v(" "),o("li",[o("em",[e._v("data model")]),e._v(": hooks targetting the processing of output data")]),e._v(" "),o("li",[o("em",[e._v("logs")]),e._v(": hooks targetting logging features")]),e._v(" "),o("li",[o("em",[e._v("service")]),e._v(": hooks targetting generic service setup\nOthers hooks are usually service-centric and so attached to the target service.")])]),e._v(" "),o("h2",{attrs:{id:"data-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[e._v("#")]),e._v(" Data model")]),e._v(" "),o("p",[e._v("Each service can declare a set of "),o("em",[e._v("perspectives")]),e._v(", which are not retrieved by default when querying the object(s), you will need to use "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/querying.html#select",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("$select")]),o("OutboundLink")],1),e._v(" to do so. A perspective is simply a field of the data model containing a nested object, like the "),o("strong",[e._v("profile")]),e._v(" field containing the user's profile information on the user data model.")]),e._v(" "),o("blockquote",[o("p",[e._v("All dates/times in KDK are managed as date or "),o("a",{attrs:{href:"https://momentjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("moment"),o("OutboundLink")],1),e._v(" objects and expressed in "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_Universal_Time",target:"_blank",rel:"noopener noreferrer"}},[e._v("UTC"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),o("p",[e._v("KDK modules provide a collection of reusable "),o("em",[e._v("mixins")]),e._v(" and "),o("em",[e._v("components")]),e._v(" to be used by plugins or applications.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://vuejs.org/v2/guide/mixins.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mixins"),o("OutboundLink")],1),e._v(" are a flexible way to distribute reusable functionalities for "),o("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue components"),o("OutboundLink")],1),e._v('. A mixin object can contain any component options. When a component uses a mixin, all options in the mixin will be "mixed" into the component\'s own options.')]),e._v(" "),o("p",[e._v("Although "),o("code",[e._v(".vue")]),e._v(" "),o("a",{attrs:{href:"https://vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("single file components"),o("OutboundLink")],1),e._v(' are stored at the module level to ensure synchronized configuration management with backend code they are not "processed" within. Instead, the application processes them directly using '),o("a",{attrs:{href:"https://medium.com/front-end-hacking/webpack-and-dynamic-imports-doing-it-right-72549ff49234",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebPack dynamic imports"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Single component files are temporarily copied into the application folder during the build process, in development mode they are directly imported from (linked) modules using hot reload.")])]),e._v(" "),o("h2",{attrs:{id:"testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),o("p",[e._v("You will find "),o("a",{attrs:{href:"https://documenter.getpostman.com/view/3473756/RztfxCRc",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" a collection of ready-to-go REST requests to test the API with the great "),o("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("POSTMAN"),o("OutboundLink")],1),e._v(" tool. Simply download it and import it in your POSTMAN installation.")]),e._v(" "),o("p",[e._v("You should do the following:")]),e._v(" "),o("ol",[o("li",[e._v("make your application run (the collection is configured for default dev port "),o("code",[e._v("8080")]),e._v(" but you can easily switch to "),o("code",[e._v("8081")]),e._v(" for production mode for instance or any other)")]),e._v(" "),o("li",[e._v("use the authenticate request with a registered user e-mail/password to retrieve an authorization token")]),e._v(" "),o("li",[e._v("set this token in the header of other requests in order to be authorized to perform the request")]),e._v(" "),o("li",[e._v("renew your token when expired (step 2)")])])])}),[],!1,null,null,null);t.default=a.exports}}]);