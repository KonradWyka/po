package main

import (
	"github.com/labstack/echo"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"net/http"
)

type Weather struct {
	ID     uint `gorm:"primaryKey"`
	City   string
	Status string
}

var db *gorm.DB

func main() {
	var err error
	db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&Weather{})
	preloadData()

	e := echo.New()

	g := e.Group("/api")

	g.GET("/weather", getWeather)

	e.Start(":8080")
}

func preloadData() {
	weatherList := []Weather{
		{City: "Warszawa", Status: "sunny"},
		{City: "Kraków", Status: "rainy"},
		{City: "Wrocław", Status: "rainy"},
	}

	for _, w := range weatherList {
		db.Create(&w)
	}
}

func getWeather(c echo.Context) error {
	var weather Weather
	city := c.QueryParam("city")
	result := db.Where("city = ?", city).First(&weather)
	if result.Error != nil {
		return c.String(http.StatusNotFound, "City not found")
	}
	return c.JSON(http.StatusOK, weather)
}
