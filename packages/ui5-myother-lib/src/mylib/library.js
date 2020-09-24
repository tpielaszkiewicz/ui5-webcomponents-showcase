/**
 * Initialization Code and shared classes of library mylib.
 */
sap.ui.define(
    ["sap/ui/core/Core", "sap/ui/core/library", "./library/bundle"], // library dependency
    () => {
        // delegate further initialization of this library to the Core
        sap.ui.getCore().initLibrary({
            name: "mylib",
            dependencies: ["sap.ui.core"],
            types: ["mylib.ListMode", "mylib.TitleDesign"],
            interfaces: [],
            controls: [
                "mylib.DatePicker",
                "mylib.Item",
                "mylib.List",
                "mylib.MultiComboBox",
                "mylib.StandardListItem",
                "mylib.Title"
            ],
            elements: [],
            noLibraryCSS: true
        })

        /**
         * UI5 Web Components controls.
         *
         * @namespace
         * @alias mylib
         * @public
         */
        const oLib = mylib

        oLib.TitleDesign = {
            Default: "",
            Center: "center",
            Left: "left",
            Right: "right"
        }
        oLib.ListMode = {
            None: "None",
            SingleSelect: "SingleSelect",
            MultiSelect: "MultiSelect",
            Delete: "Delete"
        }

        return oLib
    }
)
