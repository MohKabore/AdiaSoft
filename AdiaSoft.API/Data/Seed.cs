using System;
using System.Collections.Generic;
using System.Linq;
using AdiaSoft.API.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace AdiaSoft.API.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context, UserManager<User> userManager, RoleManager<Role> roleManager)
        {

            if (!userManager.Users.Any())
            {
                // var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                // var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<Role> {
                    new Role { Name = "Moderator" },
                    new Role { Name = "Admin" },
                    new Role { Name = "Operator" }

                };

                foreach (var role in roles)
                {
                    roleManager.CreateAsync(role).Wait();
                }

                var adminUser = new User
                {
                    UserName = "Admin",
                    FirstName = "admin",
                    LastName = "admin",
                    Email = "adminUser@AdiaSoft.com",
                    EmailConfirmed = true,
                    ValidatedCode = true
                };

                IdentityResult result = userManager.CreateAsync(adminUser, "password").Result;

                if (result.Succeeded)
                {
                    var admin = userManager.FindByNameAsync("Admin").Result;
                    userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" }).Wait();
                }

                //add students
                // for(int i = 0; i < 100; i++)
                // {
                //     byte sex = 0;
                //     if(i % 2 == 0)
                //         sex = 1;
                //     var Student = new User
                //     {
                //         UserName = "User" + i,
                //         FirstName = "Fuser" + i,
                //         LastName = "Luser" + i,
                //         Gender = sex,
                //         UserTypeId = 1
                //     };

                //     IdentityResult result1 = userManager.CreateAsync(Student, "password").Result;

                //     if(result1.Succeeded)
                //     {
                //         userManager.AddToRolesAsync(Student, new[] {"élève"}).Wait();
                //     }
                // }

            }
        }
    }
}