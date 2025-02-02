using Api.Application.DTOs;
using Api.Application.Extensions;
using Api.Application.Interfaces;
using Api.Domain.Entities;

namespace Api.Application.Services;

public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository _transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        _transactionRepository = transactionRepository;
    }

    public async Task<List<TransactionDto>> GetAllTransactionsAsync()
    {
        var transactions = await _transactionRepository.GetAllTransactionsAsync();
        return transactions.ToDtoList();
    }
}