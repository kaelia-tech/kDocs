(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{293:function(t,o,e){"use strict";e.r(o);var i=e(2),n=Object(i.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("The default frontend configuration file can be found "),e("a",{attrs:{href:"https://github.com/kalisio/kano/blob/master/config/default.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v('.\nMost options come from the "standard" frontend '),e("RouterLink",{attrs:{to:"/guides/basics/step-by-step.html#configuring-a-kapp"}},[t._v("configuration")]),t._v(" of KDK-based app, here are the main one:")],1),t._v(" "),e("ul",[e("li",[e("strong",[t._v("appName")]),t._v(": displayed application name,")]),t._v(" "),e("li",[e("strong",[t._v("appLogo")]),t._v(": displayed application logo,")]),t._v(" "),e("li",[e("strong",[t._v("publisher")]),t._v(": 'Kalisio',")]),t._v(" "),e("li",[e("strong",[t._v("screens")]),t._v(": connection screens configuration\n"),e("ul",[e("li",[e("strong",[t._v("banner")]),t._v(": displayed application banner,")]),t._v(" "),e("li",[e("strong",[t._v("login")]),t._v(": login screen configuration\n"),e("ul",[e("li",[e("strong",[t._v("providers")]),t._v(": array of OAuth2 providers to be used (like "),e("code",[t._v("['google', 'github']")]),t._v("),")]),t._v(" "),e("li",[e("strong",[t._v("links")]),t._v(": links displayed at the bottom of the screen,")])])]),t._v(" "),e("li",[e("strong",[t._v("logout")]),t._v(": logout screen configuration\n"),e("ul",[e("li",[e("strong",[t._v("links")]),t._v(": links displayed at the bottom of the screen,")])])]),t._v(" "),e("li",[e("strong",[t._v("changeEndpoint")]),t._v(": change endpoint screen configuration (only useful for mobile apps)\n"),e("ul",[e("li",[e("strong",[t._v("links")]),t._v(": links displayed at the bottom of the screen,")])])])])]),t._v(" "),e("li",[e("strong",[t._v("layout")]),t._v(": layout configuration, see "),e("a",{attrs:{href:"https://quasar.dev/layout/layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quasar docs"),e("OutboundLink")],1),t._v(" for details,")]),t._v(" "),e("li",[e("strong",[t._v("sideNav")]),t._v(": side navigation component configuration\n"),e("ul",[e("li",[e("strong",[t._v("banner")]),t._v(": displayed application banner,")]),t._v(" "),e("li",[e("strong",[t._v("components")]),t._v(": key/value pairs of components displayed in side navigation (an entry looks like "),e("code",[t._v("user_actions: 'layout/KLinksPanel'")]),t._v("),")])])]),t._v(" "),e("li",[e("strong",[t._v("XXX")]),t._v(": configuration object for component YYY of e.g. side navigation")]),t._v(" "),e("li",[e("strong",[t._v("mapCatalog")]),t._v(": 2D map layers panel configuration\n"),e("ul",[e("li",[e("strong",[t._v("filter")]),t._v(": global layer filter,")]),t._v(" "),e("li",[e("strong",[t._v("categories")]),t._v(": list of categories to be displayed in 2D map layers panel,")])])]),t._v(" "),e("li",[e("strong",[t._v("globeCatalog")]),t._v(": 2D globe layers panel configuration\n"),e("ul",[e("li",[e("strong",[t._v("filter")]),t._v(": global layer filter,")]),t._v(" "),e("li",[e("strong",[t._v("categories")]),t._v(": list of categories to be displayed in 3D globe layers panel,")])])]),t._v(" "),e("li",[e("strong",[t._v("mapActivity")]),t._v(": 2D map activity configuration\n"),e("ul",[e("li",[e("strong",[t._v("tools")]),t._v(": active UI tools in the navigation bar among "),e("code",[t._v("['side-nav', 'zoom', 'track-location', 'location-bar', 'globe', 'fullscreen', 'catalog']")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("actions")]),t._v(": active UI action in the FAB among "),e("code",[t._v("['probe-location']")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("layerActions")]),t._v(": active UI action in layer menu among "),e("code",[t._v("['zoom-to', 'save', 'edit', 'edit-data', 'remove']")])])])]),t._v(" "),e("li",[e("strong",[t._v("globeActivity")]),t._v(": 3D globe activity configuration\n"),e("ul",[e("li",[e("strong",[t._v("tools")]),t._v(": active UI tools in the navigation bar among "),e("code",[t._v("['side-nav', 'zoom', 'track-location', 'location-bar', 'map', 'fullscreen', 'catalog', 'vr']")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("actions")]),t._v(": active UI action in the FAB among "),e("code",[t._v("['probe-location', 'create-layer']")]),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("layerActions")]),t._v(": active UI action in layer menu among "),e("code",[t._v("['zoom-to', 'save', 'edit', 'remove']")])])])]),t._v(" "),e("li",[e("strong",[t._v("map")]),t._v(": 2D map view configuration\n"),e("ul",[e("li",[e("strong",[t._v("viewer")]),t._v(": 2D map initialization "),e("a",{attrs:{href:"https://leafletjs.com/reference.html#map-option",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),e("OutboundLink")],1),t._v(",")]),t._v(" "),e("li",[e("strong",[t._v("featureStyle")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#map-style"}},[t._v("layer style")]),t._v(" for polygons/lines,")],1),t._v(" "),e("li",[e("strong",[t._v("pointStyle")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#map-style"}},[t._v("layer style")]),t._v(" for points,")],1),t._v(" "),e("li",[e("strong",[t._v("popup")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#map-popup"}},[t._v("popup style")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("tooltip")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#map-tooltip"}},[t._v("tooltip style")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("cluster")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#map-style"}},[t._v("clustering style")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("fileLayers")]),t._v(": default file layer "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#file-layer"}},[t._v("options")]),t._v(",")],1)])]),t._v(" "),e("li",[e("strong",[t._v("globe")]),t._v(": 3D globe view configuration\n"),e("ul",[e("li",[e("strong",[t._v("viewer")]),t._v(": 3D globe initialization "),e("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/Viewer.html#Viewer",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("strong",[t._v("fileLayers")]),t._v(": default file layer "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#file-layer"}},[t._v("options")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("featureStyle")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#globe-style"}},[t._v("layer style")]),t._v(" for polygons/lines/points,")],1),t._v(" "),e("li",[e("strong",[t._v("entityStyle")]),t._v(": default "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#globe-style"}},[t._v("entity style")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("tooltip")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#globe-tooltip"}},[t._v("tooltip style")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("popup")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#globe-popup"}},[t._v("popup style")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("clusterStyle")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#globe-style"}},[t._v("clustering style")]),t._v(",")],1),t._v(" "),e("li",[e("strong",[t._v("cluster")]),t._v(": default GeoJSON "),e("RouterLink",{attrs:{to:"/api/kmap/mixins.html#globe-style"}},[t._v("cluster options")])],1)])])])])}),[],!1,null,null,null);o.default=n.exports}}]);