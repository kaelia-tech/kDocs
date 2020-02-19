(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{284:function(e,t,o){"use strict";o.r(t);var s=o(2),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),o("h2",{attrs:{id:"query"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),o("h3",{attrs:{id:"marshallcomparisonquery-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#marshallcomparisonquery-hook"}},[e._v("#")]),e._v(" marshallComparisonQuery(hook)")]),e._v(" "),o("p",[e._v("Converts from client/server side comparison types (e.g. numbers) to basic JS types, which is usually required when querying the database. Applies to "),o("code",[e._v("$lt")]),e._v(", "),o("code",[e._v("$lte")]),e._v(", "),o("code",[e._v("$gt")]),e._v(" and "),o("code",[e._v("$gte")]),e._v(" operators.")]),e._v(" "),o("blockquote",[o("p",[e._v("Reads the query object to process from "),o("code",[e._v("hook.params.query")])])]),e._v(" "),o("h3",{attrs:{id:"populateobject-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#populateobject-options"}},[e._v("#")]),e._v(" populateObject(options)")]),e._v(" "),o("blockquote",[o("p",[e._v("Return a hook function according to provided options")])]),e._v(" "),o("p",[e._v("Retrieve the target object(s) required by a subsequent operation from its service. The object(s) are populated in "),o("code",[e._v("hook.params")]),e._v(" according to the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("serviceField")]),e._v(": name of the field where to read the name of the target service on "),o("code",[e._v("hook.data")]),e._v(" or "),o("code",[e._v("hook.params.query")])]),e._v(" "),o("li",[o("strong",[e._v("nameServiceAs")]),e._v(": name of the field where to write the target service when found on "),o("code",[e._v("hook.params")])]),e._v(" "),o("li",[o("strong",[e._v("idField")]),e._v(": name of the field where to read the "),o("code",[e._v("_id")]),e._v(" of the target object on "),o("code",[e._v("hook.data")]),e._v(" or "),o("code",[e._v("hook.params.query")])]),e._v(" "),o("li",[o("strong",[e._v("nameIdAs")]),e._v(": name of the field where to write the target object when found on "),o("code",[e._v("hook.params")])]),e._v(" "),o("li",[o("strong",[e._v("throwOnNotFound")]),e._v(": boolean indicating if an error should be raised when either the target service or object is not found")])]),e._v(" "),o("blockquote",[o("p",[e._v("If when applied existing object(s) and/or service are found in "),o("code",[e._v("hook.params")]),e._v(" they are reused as is (i.e. not updated)")])]),e._v(" "),o("h3",{attrs:{id:"populateobjects-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#populateobjects-options"}},[e._v("#")]),e._v(" populateObjects(options)")]),e._v(" "),o("p",[e._v("Similar to "),o("a",{attrs:{href:"./HOOKS.MD#populateobjectshook"}},[e._v("populateObject")]),e._v(" except that if no object ID is found it will retrieve all objects from the target servic using "),o("code",[e._v("service.find({ query: {} })")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"data-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[e._v("#")]),e._v(" Data model")]),e._v(" "),o("h3",{attrs:{id:"processperspectives-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#processperspectives-hook"}},[e._v("#")]),e._v(" processPerspectives(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("Usually used as a app-level hook")])]),e._v(" "),o("p",[e._v("Discard all perspectives declared on the model by default. Will for any to be included when using "),o("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/querying.html#select",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("$select")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("blockquote",[o("p",[e._v("Take care of a subset of perspective fields like when using "),o("code",[e._v("$select: ['perspective.fieldName']")])])]),e._v(" "),o("h3",{attrs:{id:"preventupdateperspectives-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preventupdateperspectives-hook"}},[e._v("#")]),e._v(" preventUpdatePerspectives(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("Usually used as a app-level hook")])]),e._v(" "),o("p",[e._v("When a perspectives is present in your data model you must disallow update it in order to avoid erasing it. Indeed, when requesting an object e.g. for edition they are not retrieved by default, su sending it back for update will erase the missing perspective fields.")]),e._v(" "),o("h3",{attrs:{id:"serialize-rules-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serialize-rules-options"}},[e._v("#")]),e._v(" serialize(rules, options)")]),e._v(" "),o("blockquote",[o("p",[e._v("Return a hook function according to provided options")])]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("rules")]),e._v(" argument contains the list of transformations to be applied, it is an array of objects like the following:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("source")]),e._v(": the path of the source property to read value from")]),e._v(" "),o("li",[o("strong",[e._v("target")]),e._v(": the path of the target property where to write value to")]),e._v(" "),o("li",[o("strong",[e._v("delete")]),e._v(": boolean indicating if the source property should be deleted after transformation")])]),e._v(" "),o("p",[e._v("Modify the data structure of operation item (i.e. data/result in before/after hook) according to the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("throwOnNotFound")]),e._v(": boolean indicating if an error should be raised when either the target service or object is not found")])]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" hooks "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kCore'")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Will transform hook data from { name: 'toto' } to { profile: { name: 'toto' } }")]),e._v("\nservice"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("hooks")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" before"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" create"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" hooks"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("serialize")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" source"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'name'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" target"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'profile.name'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" throwOnNotFound"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),o("h3",{attrs:{id:"processobjectids-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#processobjectids-hook"}},[e._v("#")]),e._v(" processObjectIDs(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("Usually used as a app-level hook")])]),e._v(" "),o("p",[e._v("Transform any value bound to an "),o("code",[e._v("_id")]),e._v(" like key from a string into a "),o("a",{attrs:{href:"https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mongo ObjectID"),o("OutboundLink")],1),e._v(" on client queries.")]),e._v(" "),o("blockquote",[o("p",[e._v("Take care of "),o("code",[e._v("$in")]),e._v(", "),o("code",[e._v("$nin")]),e._v(" and "),o("code",[e._v("$or")]),e._v(" operators recursively, as well as nested fields query like "),o("code",[e._v("field._id")])])]),e._v(" "),o("h3",{attrs:{id:"convertobjectids-properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#convertobjectids-properties"}},[e._v("#")]),e._v(" convertObjectIDs(properties)")]),e._v(" "),o("blockquote",[o("p",[e._v("Return a hook function according to provided property list")])]),e._v(" "),o("p",[e._v("Transform a known set of properties from strings into a "),o("a",{attrs:{href:"https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mongo ObjectIDs"),o("OutboundLink")],1),e._v(" on client queries.")]),e._v(" "),o("blockquote",[o("p",[e._v("Fields are searched on "),o("code",[e._v("hook.data")]),e._v(" or "),o("code",[e._v("hook.params.query")])])]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" hooks "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kCore'")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Will convert data.participant and data.event to ObjectIDs")]),e._v("\nservice"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("hooks")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" before"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" all"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" hooks"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("convertObjectIDs")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'participant'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'event'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),o("h3",{attrs:{id:"convertdates-properties-asmoment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#convertdates-properties-asmoment"}},[e._v("#")]),e._v(" convertDates(properties, asMoment)")]),e._v(" "),o("blockquote",[o("p",[e._v("Return a hook function according to provided property list and Date/moment object flag")])]),e._v(" "),o("p",[e._v("Transform a known set of properties from strings into a Data or "),o("a",{attrs:{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("moment"),o("OutboundLink")],1),e._v(" object on client queries.")]),e._v(" "),o("blockquote",[o("p",[e._v("Fields are searched on "),o("code",[e._v("hook.data")]),e._v(" or "),o("code",[e._v("hook.params.query")])])]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" hooks "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kCore'")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Will convert data.expireAt to Date")]),e._v("\nservice"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("hooks")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" before"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" create"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" hooks"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("convertDates")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v("'expireAt'")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),o("h3",{attrs:{id:"setasdeleted-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setasdeleted-hook"}},[e._v("#")]),e._v(" setAsDeleted(hook)")]),e._v(" "),o("p",[e._v("Flag the item as deleted when required by subsequent operations.")]),e._v(" "),o("blockquote",[o("p",[e._v("Delete flag is stored in the "),o("code",[e._v("deleted")]),e._v(" field")])]),e._v(" "),o("h3",{attrs:{id:"populatepreviousobject-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#populatepreviousobject-hook"}},[e._v("#")]),e._v(" populatePreviousObject(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("To be used a a before hook")])]),e._v(" "),o("p",[e._v("Retrieve the target object before an update or a patch operation.")]),e._v(" "),o("blockquote",[o("p",[e._v("Previous object is stored in "),o("code",[e._v("hook.params.previousItem")])])]),e._v(" "),o("h3",{attrs:{id:"setexpireafter-delayinseconds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setexpireafter-delayinseconds"}},[e._v("#")]),e._v(" setExpireAfter(delayInSeconds)")]),e._v(" "),o("blockquote",[o("p",[e._v("To be used a a before hook\nReturn a hook function according to provided delay")])]),e._v(" "),o("p",[e._v("Set the MongoDB "),o("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/expire-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TTL"),o("OutboundLink")],1),e._v(" on the target object.")]),e._v(" "),o("blockquote",[o("p",[e._v("TTL is stored in the "),o("code",[e._v("expireAt")]),e._v(" field")])]),e._v(" "),o("h2",{attrs:{id:"service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[e._v("#")]),e._v(" Service")]),e._v(" "),o("h3",{attrs:{id:"ratelimit-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ratelimit-options"}},[e._v("#")]),e._v(" rateLimit(options)")]),e._v(" "),o("blockquote",[o("p",[e._v("To be used a a before hook\nReturn a hook function according to provided options")])]),e._v(" "),o("p",[e._v("Rate limit the call of a target service (and possibly operation) according to the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("tokensPerInterval")]),e._v(": the number of allowed tokens in the given delay (1 service call = 1 token)")]),e._v(" "),o("li",[o("strong",[e._v("interval")]),e._v(": the delay to fill the bucket with the given number of tokens in")]),e._v(" "),o("li",[o("strong",[e._v("operation")]),e._v(": will only apply to this operation when given")]),e._v(" "),o("li",[o("strong",[e._v("service")]),e._v(": will only apply to this service when given (usefull when used as a app-level hook)")])]),e._v(" "),o("blockquote",[o("p",[e._v("Rely on the "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Token_bucket",target:"_blank",rel:"noopener noreferrer"}},[e._v("token bucket algorithm"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"authorisations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorisations"}},[e._v("#")]),e._v(" Authorisations")]),e._v(" "),o("h3",{attrs:{id:"populatesubjects-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#populatesubjects-hook"}},[e._v("#")]),e._v(" populateSubjects(hook)")]),e._v(" "),o("p",[e._v("Retrieve the target subject object(s) for an authorisation operation.")]),e._v(" "),o("p",[e._v("Specialises "),o("a",{attrs:{href:"./HOOKS.MD#populateobjectshook"}},[e._v("populateObjects")]),e._v(" with the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("serviceField")]),e._v(": "),o("code",[e._v("'subjectsService'")])]),e._v(" "),o("li",[o("strong",[e._v("idField")]),e._v(": "),o("code",[e._v("'subjects'")])]),e._v(" "),o("li",[o("strong",[e._v("throwOnNotFound")]),e._v(": "),o("code",[e._v("true")])])]),e._v(" "),o("h3",{attrs:{id:"populateresource-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#populateresource-hook"}},[e._v("#")]),e._v(" populateResource(hook)")]),e._v(" "),o("p",[e._v("Retrieve the target resource object for an authorisation operation.")]),e._v(" "),o("p",[e._v("Specialises the "),o("a",{attrs:{href:"./HOOKS.MD#populateobjecthook"}},[e._v("populateObject")]),e._v(" with the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("serviceField")]),e._v(": "),o("code",[e._v("'resourcesService'")])]),e._v(" "),o("li",[o("strong",[e._v("idField")]),e._v(": "),o("code",[e._v("'resource'")])]),e._v(" "),o("li",[o("strong",[e._v("throwOnNotFound")]),e._v(": "),o("code",[e._v("true")])])]),e._v(" "),o("h3",{attrs:{id:"authorise-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorise-hook"}},[e._v("#")]),e._v(" authorise(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("Usually used as a app-level hook")])]),e._v(" "),o("p",[e._v("Check permissions to access target resource object(s) for current user on the performed operation.")]),e._v(" "),o("p",[e._v("If the operation is authorised the "),o("code",[e._v("hook.params.authorised")]),e._v(" flag will be set to "),o("code",[e._v("true")]),e._v(".")]),e._v(" "),o("p",[e._v("If you'd like to force/unforce authorisation check use the "),o("code",[e._v("hook.params.checkAuthorisation")]),e._v(" flag.")]),e._v(" "),o("blockquote",[o("p",[e._v("By default check will only be performed when called from a client not from the server itself.")])]),e._v(" "),o("h3",{attrs:{id:"updateabilities-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updateabilities-options"}},[e._v("#")]),e._v(" updateAbilities(options)")]),e._v(" "),o("blockquote",[o("p",[e._v("Return a hook function according to provided options")])]),e._v(" "),o("p",[e._v("Update cached subject abilities when permissions have changed according to the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("subjectAsItem")]),e._v(": boolean indicating if the subject is the item of the current operation (e.g. when applied on the users service) or provided by "),o("code",[e._v("hook.params.user")])]),e._v(" "),o("li",[o("strong",[e._v("fetchSubject")]),e._v(": boolean indicating if the subject object has to be entirely fetched from the underlying service (usefull when the item does not include permissions)")])]),e._v(" "),o("h2",{attrs:{id:"users"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[e._v("#")]),e._v(" Users")]),e._v(" "),o("h3",{attrs:{id:"enforcepasswordpolicy-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enforcepasswordpolicy-options"}},[e._v("#")]),e._v(" enforcePasswordPolicy(options)")]),e._v(" "),o("blockquote",[o("p",[e._v("To be used a a before hook\nReturn a hook function according to provided options")])]),e._v(" "),o("p",[e._v("Check password policy when creating/updating the user's password according to the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("userAsItem")]),e._v(": boolean indicating if the user is the item of the current operation (e.g. when applied on the users service) or provided by "),o("code",[e._v("hook.params.user")])]),e._v(" "),o("li",[o("strong",[e._v("passwordField")]),e._v(": the name of the field containing the clear password on the item (defaults to "),o("code",[e._v("clearPassword")]),e._v(")")]),e._v(" "),o("li",[o("strong",[e._v("previousPasswordsField")]),e._v(": the name of the field containing the hashed password history on the item (defaults to "),o("code",[e._v("previousPasswords")]),e._v(")")])]),e._v(" "),o("blockquote",[o("p",[e._v("For more information read about "),o("RouterLink",{attrs:{to:"/guides/basics/step-by-step.html#configuring-a-kapp"}},[e._v("password policy configuration")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"storepreviouspassword-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#storepreviouspassword-options"}},[e._v("#")]),e._v(" storePreviousPassword(options)")]),e._v(" "),o("blockquote",[o("p",[e._v("To be used a a before hook\nReturn a hook function according to provided options")])]),e._v(" "),o("p",[e._v("Update the password history when updating the user's password according to the following options:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("userAsItem")]),e._v(": boolean indicating if the user is the item of the current operation (e.g. when applied on the users service) or provided by "),o("code",[e._v("hook.params.user")])]),e._v(" "),o("li",[o("strong",[e._v("passwordField")]),e._v(": the name of the field containing the current hashed password on the item (defaults to "),o("code",[e._v("password")]),e._v(")")]),e._v(" "),o("li",[o("strong",[e._v("previousPasswordsField")]),e._v(": the name of the field containing the hashed password history on the item (defaults to "),o("code",[e._v("previousPasswords")]),e._v(")")])]),e._v(" "),o("blockquote",[o("p",[e._v("For more information read about "),o("RouterLink",{attrs:{to:"/guides/basics/step-by-step.html#configuring-a-kapp"}},[e._v("password policy configuration")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"generatepassword-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generatepassword-hook"}},[e._v("#")]),e._v(" generatePassword(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("To be used a a before hook")])]),e._v(" "),o("p",[e._v("Generate a random password according to password policy (if any) and store it in the "),o("strong",[e._v("password")]),e._v(" item field.")]),e._v(" "),o("blockquote",[o("p",[e._v("For more information read about "),o("RouterLink",{attrs:{to:"/guides/basics/step-by-step.html#configuring-a-kapp"}},[e._v("password policy configuration")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"logs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[e._v("#")]),e._v(" Logs")]),e._v(" "),o("h3",{attrs:{id:"log-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log-hook"}},[e._v("#")]),e._v(" log(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("Usually used as a app-level hook")])]),e._v(" "),o("ul",[o("li",[e._v("Log error for each hook in error with error log level.")]),e._v(" "),o("li",[e._v("Log information for each hook ran with verbose (respectively debug for client) log level.")]),e._v(" "),o("li",[e._v("Log detailed information for each hook ran with debug (respectively trace for client) log level.")])]),e._v(" "),o("h2",{attrs:{id:"events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),o("h3",{attrs:{id:"emit-hook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#emit-hook"}},[e._v("#")]),e._v(" emit(hook)")]),e._v(" "),o("blockquote",[o("p",[e._v("Usually used as a app-level hook")])]),e._v(" "),o("p",[e._v("Emit an event named "),o("code",[e._v("{hook_type}Hook")]),e._v(" (e.g. "),o("code",[e._v("beforeHook")]),e._v(" or "),o("code",[e._v("afterHook")]),e._v(") for each hook ran, the payload of the event being the hook object.")])])}),[],!1,null,null,null);t.default=a.exports}}]);