import * as Cesium from "cesium";
import "cesium/Widgets/widgets.css";
import { Map, View } from "ol";
import { Tile } from "ol/layer";
import { OSM } from "ol/source";
import OLCesium from "olcs/OLCesium";
import React, { useCallback, useEffect, useRef } from "react";

type MapCompProps = {
  default3D?: boolean;
};

window.Cesium = Cesium;

export const MapComp = ({ default3D = false }: MapCompProps) => {
  const map = useRef(
    new OLCesium({
      map: new Map({
        layers: [
          new Tile({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 0,
        }),
      })
    })
  );
  const updateTarget = useCallback(
    (target: HTMLDivElement) => {
      map.current.getOlMap().setTarget(target);
    },
    [map]
  );
  useEffect(() => {
    map.current?.setEnabled(default3D);
  }, [map, default3D]);
  return <div ref={updateTarget} style={{ height: "100%", width: "100%" }} />;
};
