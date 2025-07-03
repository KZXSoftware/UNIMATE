namespace UNIMATE
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            app.UseDefaultFiles();  // serve index.html automatically
            app.UseStaticFiles();   // serve static files from wwwroot
            app.Run();
        }
    }
}