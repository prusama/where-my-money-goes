using Api.Domain.Entities;

namespace Api.Application.Interfaces;

public interface ITransactionRepository
{
    Task<List<Transaction>> GetAllTransactionsAsync();
}