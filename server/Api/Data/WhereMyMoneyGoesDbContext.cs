using Api.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class WhereMyMoneyGoesDbContext(DbContextOptions dbContextOptions) : DbContext(dbContextOptions)
{
    public DbSet<Transaction> Transactions { get; set; }
}