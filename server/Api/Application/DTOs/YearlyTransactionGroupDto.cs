namespace Api.Application.DTOs;

public class YearlyTransactionGroupDto
{
    public int Year { get; set; }
    public decimal YearIncomes { get; set; }
    public decimal YearExpanses { get; set; }
    public decimal YearBalance => YearIncomes - YearExpanses;
    public List<MonthlyTransactionGroupDto> Months { get; set; } = new();
}