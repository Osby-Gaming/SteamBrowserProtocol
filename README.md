# Platskarta
Bibliotek för platskartan som används i internverktyget.

## Installation
### Bun
```bash
bun add platskarta
```

### NPM
```bash
npm install platskarta
```

### Yarn
```bash
yarn add platskarta
```

### Browser 
```ts
import { Map } from "/platskarta.js";
```

## Användning
Platskartan är tillgänglig klienter och kan inkluderas på flera sätt:

### ES
```ts
import { Map } from "platskarta";
```

### CJS
```ts
const { Map } = require("platskarta");
```

## Exempel
Ett demo finns i /demo.

### Requirements
- Bun

### Install
Clone:a repot och kör dessa kommandon i terminalen:
```bash
bun install
```

### Run demo
```bash
bun run demo
```
Gå sedan till http://localhost:8080 för att se demot.


## API

### Map
Map är den primära klassen som används för att skapa platskartan.

#### Constructor
```ts
new Map(mode: MapMode, canvasId: string, mapLayout: MapLayoutInput, editMenuId?: string, toolbeltId?: string, lockedCells: number[] = []);
```

##### Mode
Moden bestämmer vilken typ av platskarta som ska skapas. Mode är en enum som kan ha följande värden:
```ts
enum MapMode {
    View,
    Edit,
    Preview,
    NoInteract
}
```

##### CanvasId
Id för html-canvas-elementet som ska användas för att rendera platskartan.

##### MapLayout
Layoutet som ska visas eller redigeras. Layouten ser ut så här:
```ts
type MapLayoutInput = {
    x: number;
    y: number;
    cells: (Cell | `${number}`)[]; // putting an Int will create the Ints amount of null cells
    globalOverride?: {
        backgroundColor?: string;
        zoomLevel?: PossibleZoomLevels;
        cellStyleOverride?: {
            seat?: CellStyleOverride
            aisle?: CellStyleOverride
            wall?: CellStyleOverride
            door?: CellStyleOverride
            custom?: CellStyleOverride
        }
    }
};
```

Cell-objektet ser ut så här:
```ts
type Cell = {
    type: "seat" | "aisle" | "wall" | "door" | "custom";
    styleOverride?: CellStyleOverride;
}
```

Style-objektet ser ut så här:
```ts
type CellStyleOverride = {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderTop?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    text?: string;
    textFont?: string;
    textWeight?: string;
    textSize?: number;
    textColor?: string;
    textOpacity?: number;
    textTranslateX?: number;
    textTranslateY?: number;
    textStrokeColor?: string;
    textStrokeLineWidth?: number;
    textRotationDegrees?: number;
    opacity?: number;
}
```

Om ett Cell-objekt inte har styleOverride-attribut så kommer alla attribut i styleOverride att ignoreras.

##### editMenuId
Id för den html-div som ska användas för att rendera en redigeringsmeny.

Div:en måste innehålla ett canvas-element och ett input-element.

##### toolbeltId
Id för den html-div som ska användas för att rendera ett verktygsfält.

Div:en måste innehålla knappar med id "generate-labels" och "delete-cells".

##### lockedCells
Array med cell-index som ska vara låsta för redigering.

#### switchLayout(mapLayout: MapLayoutInput)
Byter layouten på platskarten.

#### exportMapLayout(): MapLayoutInput
Exporterar aktuell layout optimiserat för att sparas.

#### togglePreview()
Toggle:ar förhandsgranskningen i redigeringsläge.

#### centerCamera()
Centerar kameran på platskarten.

#### zoomToLevel(level: number, mouseX?: number, mouseY?: number)
Zooma platskarten till en viss nivå. Ser till att hålla zoom-nivån i ett visst intervall.

#### unselectCells()
Avmarkerar alla valda celler på platskarten.

#### EventEmitter.on(event: "select", callback: (cellIndex: number) => void)
Händelse som utlöses när en cell väljs. Användbart för att låta användaren klicka på en cell för att välja plats där. Återger indexen på cellen som valts, som senare kan användas för att hitta info om cellen eller komma ihåg valet.

#### EventEmitter.on(event: "save", callback: (mapLayout: MapLayoutInput) => void)
Händelse som utlöses när redigeraren klickar på knappen "Spara". Användbart för att spara layouten på platskarten.

#### history: MapLayoutHistory
En instans av MapLayoutHistory som lagrar historik för layouten på platskarten.

### MapLayoutHistory
En klass som lagrar historik för layouten på platskarten.

#### mapLayout: MapLayout
Den aktuella layouten på platskarten.