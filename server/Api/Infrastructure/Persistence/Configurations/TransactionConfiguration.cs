using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Api.Infrastructure.Persistence.Configurations;

public class TransactionConfiguration : IEntityTypeConfiguration<Transaction>
{
    public void Configure(EntityTypeBuilder<Transaction> builder)
    {
        var transactions = new List<Transaction>
        {
            new Transaction
            {
                Id = new Guid("ea9c1742-75ee-4482-b1a9-64c1cb3795f1"),
                Date = new DateTime(2021, 12, 10),
                Type = "EXPENSE",
                Amount = 1000,
                Currency = "CZK",
                AccountName = "Tesco"
            },
            new Transaction
            {
                Id = new Guid("e60c279b-3048-4106-8d9f-817c4c213ae9"),
                Date = new DateTime(2021, 12, 14),
                Type = "INCOME",
                Amount = 41000,
                Currency = "CZK",
                AccountName = "Some Company"
            }
        };
        
        builder.HasData(transactions);
    }
}