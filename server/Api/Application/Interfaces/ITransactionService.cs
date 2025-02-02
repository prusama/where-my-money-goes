using Api.Application.DTOs;

namespace Api.Application.Interfaces;

public interface ITransactionService
{
    Task<List<TransactionDto>> GetAllTransactionsAsync();
}