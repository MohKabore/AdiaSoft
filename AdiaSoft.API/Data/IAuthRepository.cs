using System.Threading.Tasks;
using AdiaSoft.API.Models;

namespace AdiaSoft.API.Data
{
    public interface IAuthRepository
    {
        Task<bool> SaveAll();    
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
        Task<User> GetUserById(int id);



    }
}