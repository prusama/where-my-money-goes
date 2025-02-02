namespace Api.Domain.Entities;

public class Transaction
{
    public Guid Id { get; private set; }
    public DateTime Date { get; private set; }
    public string Type { get; private set; }
    public decimal Amount { get; private set; }
    public string Currency { get; private set; }
    public string AccountName { get; private set; }

    public Transaction(DateTime date, string type, decimal amount, string currency, string accountName)
    {
        Date = date;
        Type = type;
        Amount = amount;
        Currency = currency;
        AccountName = accountName;
    }
}