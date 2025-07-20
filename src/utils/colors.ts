export function getPlaceColor(placeType: string, hover: boolean): string {
  const type = placeType.toLowerCase();
  switch (hover) {
    case true:
      switch (type) {
        case "normal": return "#efc232"
        case "food": return "#babf55"
        case "guild": return "#5598da"
        case "sauna": return "#d14629"
        case "special": return "#bc5e5f"
      }
    case false:
      switch (type) {
        case "normal": return "#EEC156"
        case "food": return "#B8BD79"
        case "guild": return "#80B1D9"
        case "sauna": return "#D45F49"
        case "special": return "#BD8A8B"
      }
    default: return "#EEC156"
  }
}
