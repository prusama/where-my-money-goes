using Api.Application.DTOs;
using Api.Application.Extensions;
using Api.Domain.Entities;
using Api.Domain.Enums;

namespace Api.Application.Mapping;

public static class TransactionMapping
{
    public static List<YearlyTransactionGroupDto> GroupTransactionsByYear(List<Transaction> transactions)
    {
        return transactions
            .GroupBy(transaction => transaction.Date.Year)
            .Select(yearGroup => new YearlyTransactionGroupDto
            {
                Year = yearGroup.Key,
                YearIncomes = yearGroup.Where(t => t.Type == TransactionType.Income).Sum(t => t.Amount),
                YearExpanses = yearGroup.Where(t => t.Type == TransactionType.Expense).Sum(t => t.Amount),
                Months = yearGroup
                    .GroupBy(t => t.Date.Month)
                    .Select(monthGroup => new MonthlyTransactionGroupDto
                    {
                        Month = monthGroup.Key,
                        Year = yearGroup.Key,
                        MonthIncomes = monthGroup.Where(t => t.Type == TransactionType.Income).Sum(t => t.Amount),
                        MonthExpenses = monthGroup.Where(t => t.Type == TransactionType.Expense).Sum(t => t.Amount),
                        Transactions = monthGroup.Select(t => t.ToDto())
                            .ToList()
                    }).ToList()
            }).ToList();
    }
}