import * as Cesium from "cesium";
import { Map } from "ol";

declare global {
  interface Window {
    Cesium: typeof Cesium;
  }
}

declare module "olcs/OLCesium" {
  type OLCesiumOptions = {
    /** The OpenLayers map we want to show on a Cesium scene. */
    map: Map;
    /** Target element for the Cesium scene. */
    target?: HTMLElement | string;
    /** Callback function which will be called by the OLCesium
     * constructor to create custom synchronizers. Receives an `ol.Map` and a `Cesium.Scene` as arguments,
     * and needs to return an array of {@link import('olcs/AbstractSynchronizer.js').default}. */
    createSynchronizers?: (
      map: Map,
      scene: Cesium.Scene,
      dataSources: Cesium.DataSourceCollection
    ) => unknown[];
    /** Control the current time used by Cesium. */
    time?: () => Cesium.JulianDate;
    /** Prevent propagation of mouse/touch events to OpenLayers when Cesium is active. */
    stopOpenLayersEventsPropagation?: boolean;
    /** Allows the passing of property value to the `Cesium.Scene`. */
    sceneOptions?: unknown;
  };

  export default class OLCesium {
    constructor(options: OLCesiumOptions);
    getOlMap(): Map;
    /**
     * Enables/disables the Cesium.
     * This modifies the visibility style of the container element.
     * @param {boolean} enable
     * @api
     */
    setEnabled(enable: boolean): void;
  }
}
