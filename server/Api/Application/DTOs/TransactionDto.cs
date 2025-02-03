using Api.Domain.Enums;

namespace Api.Application.DTOs;

public class TransactionDto
{
    public Guid Id { get; set; }
    public DateTime Date { get; set; }
    public TransactionType Type { get; set; }
    public decimal Amount { get; set; }
    public string Currency { get; set; }
    public string AccountName { get; set; }
}