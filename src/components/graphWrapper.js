import React from "react";
import { chartGenerator } from "./chartGenerator";
import styles from "./graph.module.css";

export function GraphWrapper({ linksData, nodesData, nodeHoverTooltip }) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let destroyFn;

    if (containerRef.current) {
      const { destroy } = chartGenerator(containerRef.current, linksData, nodesData, nodeHoverTooltip);
      destroyFn = destroy;
    }

    return destroyFn;
  }, []);

  return <div ref={containerRef} className={styles.container} />;
}
