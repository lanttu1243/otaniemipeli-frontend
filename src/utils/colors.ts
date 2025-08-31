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
      } break
    case false:
      switch (type) {
        case "normal": return "#eed056"
        case "food": return "#aebd79"
        case "guild": return "#80b4d9"
        case "sauna": return "#d45949"
        case "special": return "#bd8f90"
      } break
  }
  return "#EEC156"
}
