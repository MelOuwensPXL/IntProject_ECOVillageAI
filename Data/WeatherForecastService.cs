using Blazor1.Pages;
using System;
using System.Collections;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace Blazor1.Data
{
    public class WeatherForecastService : TempretureInfo
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };


        

        public Task<WeatherForecast[]> GetForecastAsync(DateTime startDate)
        {
            var rng = new Random();

            var tsk = Task.FromResult(Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = startDate.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
               
                Summary = Summary(Summaries, TemperatureC)[counter].ToString(),
                 counter = counter + 1

            }).ToArray()); 

            

            TempretureInfo temp = new TempretureInfo();
            temp.Settsk(tsk);
            return tsk;



           
        }
        public ArrayList Summary(string[] Summaries,int moc_temp)
        {
            ArrayList ActualSummaries = new ArrayList();

            foreach (var item in Summaries)
            {
                if ((moc_temp<0) && (moc_temp > -10))
                {
                    ActualSummaries.Add("Bracing");
                }
                else
                {
                    if (moc_temp<-10)
                    {
                        ActualSummaries.Add("Freezing");
                    }
                    else
                    {
                        if ((moc_temp>20) && (moc_temp<30))
                        {
                            ActualSummaries.Add("Warm");
                        }
                        else
                        {
                            if ((moc_temp > 30) && (moc_temp < 35))
                            {
                                ActualSummaries.Add("Hot");
                            }
                            else
                            {
                                if ((moc_temp > 35) && (moc_temp < 40))
                                {
                                    ActualSummaries.Add("Sweltering");
                                }
                                else
                                {
                                    if ((moc_temp>40))
                                    {
                                        ActualSummaries.Add("Scorching");
                                    }
                                    else
                                    {
                                        ActualSummaries.Add("Mild");
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return ActualSummaries;
            
        }

    }
}
