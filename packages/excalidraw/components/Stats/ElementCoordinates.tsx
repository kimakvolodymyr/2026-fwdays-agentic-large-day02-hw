import MultiPosition from "./MultiPosition";
import Position from "./Position";

import type { ElementsMap, ExcalidrawElement } from "@excalidraw/element/types";
import type { Scene } from "@excalidraw/element";
import type { AtomicUnit } from "./utils";
import type { AppState } from "../../types";

type SingleSelectionProps = {
  type: "single";
  element: ExcalidrawElement;
  elementsMap: ElementsMap;
  scene: Scene;
  appState: AppState;
};

type MultipleSelectionProps = {
  type: "multiple";
  elements: readonly ExcalidrawElement[];
  elementsMap: ElementsMap;
  atomicUnits: AtomicUnit[];
  scene: Scene;
  appState: AppState;
};

type ElementCoordinatesProps =
  | SingleSelectionProps
  | MultipleSelectionProps;

const ElementCoordinates = (props: ElementCoordinatesProps) => {
  if (props.type === "single") {
    return (
      <>
        <Position
          element={props.element}
          property="x"
          elementsMap={props.elementsMap}
          scene={props.scene}
          appState={props.appState}
        />
        <Position
          element={props.element}
          property="y"
          elementsMap={props.elementsMap}
          scene={props.scene}
          appState={props.appState}
        />
      </>
    );
  }

  return (
    <>
      <MultiPosition
        property="x"
        elements={props.elements}
        elementsMap={props.elementsMap}
        atomicUnits={props.atomicUnits}
        scene={props.scene}
        appState={props.appState}
      />
      <MultiPosition
        property="y"
        elements={props.elements}
        elementsMap={props.elementsMap}
        atomicUnits={props.atomicUnits}
        scene={props.scene}
        appState={props.appState}
      />
    </>
  );
};

export default ElementCoordinates;
