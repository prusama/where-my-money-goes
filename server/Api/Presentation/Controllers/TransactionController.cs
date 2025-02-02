using Microsoft.AspNetCore.Mvc;

namespace Api.Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllTransactions()
    {
        return Ok();
    }
}