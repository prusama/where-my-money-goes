using Api.Domain.Enums;

namespace Api.Domain.Entities;

public class Transaction
{
    public Guid Id { get; set; }
    public DateTime Date { get; set; }
    public TransactionType Type { get; set; }
    public decimal Amount { get; set; }
    public string Currency { get; set; }
    public string AccountName { get; set; }
}