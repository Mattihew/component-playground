import React, { useCallback, useRef } from "react";
import { Map, View } from "ol";
import { Tile } from "ol/layer";
import { OSM } from "ol/source";
type MapCompProps = {
  default3D?: boolean
};

export const MapComp = ({ default3D = false }: MapCompProps) => {
  const map = useRef(
    new Map({
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
  );

  const updateTarget = useCallback((node: HTMLDivElement) => map.current.setTarget(node), []);
  return <div ref={updateTarget} style={{ height: "100%", width: "100%" }} />;
};
