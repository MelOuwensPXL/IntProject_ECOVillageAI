using System;

namespace Blazor1.Data
{
    public class WeatherForecast
    {
        internal int counter = 0;

        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }
}
