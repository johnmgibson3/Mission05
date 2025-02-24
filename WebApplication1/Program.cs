using Microsoft.AspNetCore.Mvc.ApplicationParts;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serving static files change app.MapGet
// app.MapGet("/", () => "Hello World!");
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();