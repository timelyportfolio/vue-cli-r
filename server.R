library(shiny)
library(leaflet)

# add resources from dist direction which contains vue-cli build files
shiny::addResourcePath("js",file.path(here::here(),"dist","js"))
shiny::addResourcePath("css",file.path(here::here(),"dist","css"))
shiny::addResourcePath("img",file.path(here::here(),"dist","img"))

function(input, output, session) {
  ###  leaflet widget example
  # helper function to extract x from a widget
  get_widget_data <- function(widget) { htmltools::as.tags(widget)[[2]]$children[[1]] }
  # functions from leaflet example
  rand_lng <- function(n = 10) rnorm(n, -93.65, .01)
  rand_lat <- function(n = 10) rnorm(n, 42.0285, .01)
  # quick leaflet widget
  p <- leaflet() %>%
    addTiles() %>%
    addCircles(rand_lng(50), rand_lat(50), radius = runif(50, 50, 150))

  # update Shiny input with leaflet data and options
  session$sendCustomMessage(
    "setShinyInput",
    list(input = "leafsettings", value = get_widget_data(p))
  )

  # just for fun update the circles in leaflet from R/Shiny
  # update with leaflet proxy but this loses the bind/connection with Vue
  #   since Vue `x` will deviate from proxy updated `x`
  observe({
    invalidateLater(1000, session)
    leafletProxy("leaf1") %>%
      clearShapes() %>%
      addCircles(rand_lng(50), rand_lat(50), radius = runif(50, 50, 150))
  })
}
