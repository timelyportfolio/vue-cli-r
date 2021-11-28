library(leaflet)
###  use empty leaflet for dependencies
p <- leaflet()

htmltools::attachDependencies(
  htmlTemplate("dist/index.html"),
  htmlwidgets::getDependency("leaflet","leaflet")[-(2)]
)
