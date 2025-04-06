using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace SalesTaxAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchasesController : ControllerBase
    {
        [HttpPost("calculate")]
        public IActionResult CalculateTax([FromBody] List<Purchase> purchases, string state)
        {
            if (purchases == null || !purchases.Any())
            {
                return Ok(new { TotalTax = 0 });
            }

            var calculator = new Calculator();
            var totalTax = calculator.CalculateTax(purchases, state);
            return Ok(new { TotalTax = totalTax });
        }

        [HttpGet("states")]
        public IActionResult GetStates()
        {
            var states = new List<string>
            {
                "California",
                "New York",
                "Texas",
                "Florida",
                "Washington",
                "Oregon",
                "Idaho",
                "Utah",
                "Montana",
                "New Mexico",
                "Arizona",
                "Wyoming",
                "Kansas",
                "Arkansas",
                "Georgia",
                "Alabama",
                "Louisiana"
            };

            var otherStates = new List<string>
            {
                "Alaska",
                "Hawaii",
                "Maine",
                "North Dakota",
                "South Dakota",
                "Nebraska",
                "Iowa",
                "Missouri",
                "Kentucky",
                "Tennessee",
                "West Virginia",
                "Mississippi",
                "South Carolina",
                "North Carolina",
                "Virginia",
                "Maryland",
                "Delaware"
            };

            states.AddRange(otherStates);
            states = states.OrderBy(s => s).ToList(); 
            return Ok(states);
        }

        [HttpGet("items")]
        public IActionResult GetItems()
        {
            var items = new List<Purchase>
            {
                new Purchase { Name = "Item1", Price = 10.00m },
                new Purchase { Name = "Item2", Price = 20.00m },
                new Purchase { Name = "Item3", Price = 30.00m }
            };
            return Ok(items);
        }
    }
}
