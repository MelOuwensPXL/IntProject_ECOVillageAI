using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

using Microsoft.JSInterop;
using System.Threading;
using MySql.Data.MySqlClient;

using MySql.Data.MySqlClient.Authentication;
using MySqlCommand = MySql.Data.MySqlClient.MySqlCommand;
using System.Data;
using Microsoft.JSInterop.Infrastructure;

namespace Blazor1.Pages
{
    public class Database_Handler:JSRuntime,IJSRuntime
    {
        public static string ConnectionDB = "server=127.0.0.1;user id=root;persistsecurityinfo=True;database=ecodorp";
        public static SqlConnection Con = new SqlConnection();
        public string Email_Address = string.Empty;


        public Database_Handler()
        {
        }

        public static MySql.Data.MySqlClient.MySqlConnection OpenConn() 
        {
           
            MySql.Data.MySqlClient.MySqlConnection connect;

            connect = new MySql.Data.MySqlClient.MySqlConnection();
            connect.ConnectionString = ConnectionDB;
            try
            {

                connect.OpenAsync();

                //async Task ThrowSuccess()
                //{
                //    Database_Handler handler = new Database_Handler();




                //    await handler.InvokeVoidAsync(identifier: "ErrorMessageDB_Connection");



                //}

                //ThrowSuccess();


               

                return connect;
            }
            catch (Exception)
            {
                //async Task ThrowError()
                //{
                //    Database_Handler handler = new Database_Handler();




                //    await handler.InvokeVoidAsync(identifier: "ErrorMessageDB_Connection");



                //}

                //ThrowError();

                return null;

            }

        }

           



        

        ValueTask<TValue> IJSRuntime.InvokeAsync<TValue>(string identifier, object[] args)
        {
            throw new NotImplementedException();
        }

        ValueTask<TValue> IJSRuntime.InvokeAsync<TValue>(string identifier, CancellationToken cancellationToken, object[] args)
        {
            throw new NotImplementedException();
        }
        

        public void Login(string email , string Password) 
        {
            

            string UserLoginQ = "Select * Where Email_Address ="+email + " AND User_Password =" + Password + " FROM users";


            //MySqlCommand sqlCommand = new MySqlCommand("Login", OpenConn(),UserLoginQ);

            MySqlDataAdapter dataAdapter = new MySqlDataAdapter(UserLoginQ,OpenConn());

            DataSet ds = new DataSet();

            dataAdapter.FillAsync(ds, "users");

            //DataTable dataTable = ds.Tables["users"];

            //DataRow dataRow = dataTable.Rows[0];


            //Console.WriteLine(dataRow.ToString());
            Console.WriteLine(email);

            foreach (var item in ds.Tables)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("sup");
        }


        public void Register(string FirstName,string LastName, string Age , string Role , string UserEmail , string UserPassword) 
        {
            string InsertUser = "INSERT INTO Users(User_First_name,User_Last_name,Age,UserRole,Email_Address,User_Password) Values('"+FirstName+"', '"+LastName+"', "+Age+", '"+Role+"', '"+UserEmail+"', HASHBYTES('SHA2_512', '"+UserPassword+"')) ";
            MySqlDataAdapter dataAdapter = new MySqlDataAdapter(InsertUser, OpenConn());

            

        }


        public  void Insert_AQI_Data(string room, DateTime date, double Relitive_Humidity , double PM2_5 , int TVOC , int CO2 ,int CO, double AirPressure ,int Ozone, double NO2, int AQI_Reading) 
        {
            string InsertDataQ = "INSERT INTO sensordata(RoomType,DT,Relitive_Humidity,PM2_5,TVOC,CO2,CO,AirPressure,Ozone,NO2,AQI_Reading) VALUES('" + room+"',"+date+","+Relitive_Humidity+","+PM2_5+","+TVOC+","+CO2+","+CO+","+AirPressure+","+Ozone+","+NO2+","+ AQI_Reading + ")";
            MySqlDataAdapter dataAdapter = new MySqlDataAdapter(InsertDataQ, OpenConn());

            
             MySqlCommand command = new MySqlCommand(InsertDataQ,OpenConn());

            command.ExecuteNonQuery();

            


        }

        protected override void BeginInvokeJS(long taskId, string identifier, string argsJson, JSCallResultType resultType, long targetInstanceId)
        {
            throw new NotImplementedException();
        }

        protected override void EndInvokeDotNet(DotNetInvocationInfo invocationInfo, in DotNetInvocationResult invocationResult)
        {
            throw new NotImplementedException();
        }
    }
}
