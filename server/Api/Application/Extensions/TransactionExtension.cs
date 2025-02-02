using Api.Application.DTOs;
using Api.Domain.Entities;

namespace Api.Application.Extensions;

public static class TransactionExtension
{
    public static TransactionDto ToDto(this Transaction transaction)
    {
        return new TransactionDto
        {
            Id = transaction.Id,
            Date = transaction.Date,
            Type = transaction.Type,
            Amount = transaction.Amount,
            Currency = transaction.Currency,
            AccountName = transaction.AccountName,
        };
    }
}