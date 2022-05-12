import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MapboxMap() {
  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken:
        "pk.eyJ1IjoidGhlbWFuZnJpeCIsImEiOiJjbDB6ODRtOTAxbWNiM2NrYjQxb3RiaHRoIn0.KVYpfmk4MaACLNsniKBNpQ",
      style: "mapbox://styles/mapbox/light-v10",
      center: [17.932948, 50.6660832],
      zoom: 15,
    });

    const el = document.createElement("div");
    el.className = "marker";
    new mapboxgl.Marker(el)
      .setLngLat([17.935598, 50.6660992])
      .addTo(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapboxMap;
