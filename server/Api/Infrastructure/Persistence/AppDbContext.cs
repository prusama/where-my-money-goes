using Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> dbContextOptions) : base(dbContextOptions)
    {
    }
    
    public DbSet<Transaction> Transactions { get; set; }
}