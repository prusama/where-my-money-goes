using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Api.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Seedtransactions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "AccountName", "Amount", "Currency", "Date", "Type" },
                values: new object[,]
                {
                    { new Guid("e60c279b-3048-4106-8d9f-817c4c213ae9"), "Some Company", 41000m, "CZK", new DateTime(2021, 12, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "INCOME" },
                    { new Guid("ea9c1742-75ee-4482-b1a9-64c1cb3795f1"), "Tesco", 1000m, "CZK", new DateTime(2021, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "EXPENSE" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: new Guid("e60c279b-3048-4106-8d9f-817c4c213ae9"));

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: new Guid("ea9c1742-75ee-4482-b1a9-64c1cb3795f1"));
        }
    }
}
