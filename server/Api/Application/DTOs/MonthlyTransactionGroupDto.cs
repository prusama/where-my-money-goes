namespace Api.Application.DTOs;

public class MonthlyTransactionGroupDto
{
    public int Month { get; set; }
    public int Year { get; set; }
    public decimal MonthIncomes { get; set; }
    public decimal MonthExpenses { get; set; }
    public decimal MonthBalance => MonthIncomes - MonthExpenses;
    public List<TransactionDto> Transactions { get; set; } = new();
}