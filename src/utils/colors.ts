export function getPlaceColor(placeType: string, hover: boolean): string {
  const type = placeType.toLowerCase();
  switch (hover) {
    case true:
      switch (type) {
        case "normal": return "#D3CB36"
        case "food": return "#A8D275"
        case "guild": return "#90A8B3"
        case "sauna": return "#DD4401"
        case "special": return "#DD9574"
        default: return "#f5d02c"
      }
    case false:
      switch (type) {
        case "normal": return "#F5ED58"
        case "food": return "#caf497"
        case "guild": return "#B1CAD5"
        case "sauna": return "#FF6623"
        case "special": return "#FFB796"
        default: return "#f3c702"
      }
    default: return "#f5d02c"
  }
}
