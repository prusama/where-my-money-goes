using Api.Application.DTOs;
using Api.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionController : ControllerBase
{
    private readonly ITransactionService _transactionService;

    public TransactionController(ITransactionService transactionService)
    {
        _transactionService = transactionService;
    }

    [HttpGet]
    public async Task<ActionResult<List<TransactionDto>>> GetAllTransactions()
    {
        var transactions = await _transactionService.GetAllTransactionsAsync();
        return Ok(transactions);
    }

    [HttpGet("groupedByYear")]
    public async Task<ActionResult<List<YearlyTransactionGroupDto>>> GetGroupedTransactionsByYear()
    {
        var groupedTransactions = await _transactionService.GetTransactionsGroupedByYearAsync();
        return Ok(groupedTransactions);
    }
}