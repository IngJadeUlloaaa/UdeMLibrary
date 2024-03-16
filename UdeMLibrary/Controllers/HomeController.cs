using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using UdeMLibrary.Models;

namespace UdeMLibrary.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        // Login
        public IActionResult Index()
        {
            return View();
        }

        // userInterface /* HOME */
        public IActionResult UserInterface()
        {
            return View();
        }

        // cartegoriesInterface
        public IActionResult Categories()
        {
            return View();
        }

        // ==========================================================//
        // ==================== wishList ============================//
        // ==========================================================//
        public IActionResult Whishlist()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddToWishlist(int bookId)
        {
            // Lógica para agregar el libro a la lista de deseos
            // Puedes almacenar en una base de datos, sesión, etc.

            // Redirige al usuario a la página de la lista de deseos
            return RedirectToAction("wishlist");
        }
        // ==========================================================//
        // ==========================================================//
        // ==========================================================//

        // profile
        public IActionResult Profile()
        {
            return View();
        }

        //settings
        public IActionResult Settings()
        {
            return View();
        }

        // chatSupport interface
        public IActionResult ChatSupport()
        {
            return View();
        }

        /**[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }**/
    }
}