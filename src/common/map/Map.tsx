import React, { useCallback } from "react";
import {
  CesiumWidget,
  SceneMode,
  BaseLayerPickerViewModel,
  ProviderViewModel,
  buildModuleUrl,
  OpenStreetMapImageryProvider,
} from "cesium";

import "cesium/Widgets/widgets.css";

type MapCompProps = {
  default3D?: boolean;
};

export const MapComp = ({ default3D = false }: MapCompProps) => {
  const ref = useCallback((element: HTMLDivElement) => {
    const viewModels = [
      new ProviderViewModel({
        name: "OSM",
        tooltip: "OSM maps",
        iconUrl: buildModuleUrl(
          "Widgets/Images/ImageryProviders/openStreetMap.png"
        ),
        creationFunction: () => {
          return new OpenStreetMapImageryProvider({
            url: "https://a.tile.openstreetmap.org/",
          });
        },
      }),
    ];
    const widget = new CesiumWidget(element, {
      sceneMode: SceneMode.SCENE3D,
      imageryProvider: false,
    });
    const layerPicker = new BaseLayerPickerViewModel({
      globe: widget.scene.globe,
      imageryProviderViewModels: viewModels,
    });
  }, []);
  return <div ref={ref} />;
};
