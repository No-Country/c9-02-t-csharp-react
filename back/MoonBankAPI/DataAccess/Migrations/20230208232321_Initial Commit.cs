using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class InitialCommit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    IdAccount = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "VARCHAR(50)", nullable: false),
                    LastName = table.Column<string>(type: "VARCHAR(50)", nullable: false),
                    Email = table.Column<string>(type: "VARCHAR(50)", nullable: false),
                    Password = table.Column<string>(type: "VARCHAR(20)", nullable: false),
                    Alias = table.Column<string>(type: "VARCHAR(50)", nullable: false),
                    CBU_CVU = table.Column<int>(type: "int", nullable: false),
                    Balance = table.Column<decimal>(type: "DECIMAL(11,2)", nullable: false),
                    RewardPoints = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.IdAccount);
                });

            migrationBuilder.CreateTable(
                name: "Rewards",
                columns: table => new
                {
                    IdReward = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "VARCHAR(50)", nullable: false),
                    Points = table.Column<int>(type: "int", nullable: false),
                    RewardUrlImage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rewards", x => x.IdReward);
                });

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    IdAccountService = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "VARCHAR(50)", nullable: false),
                    Amount = table.Column<decimal>(type: "DECIMAL(11,2)", nullable: false),
                    ServiceUrlImage = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.IdAccountService);
                });

            migrationBuilder.CreateTable(
                name: "Transactions",
                columns: table => new
                {
                    IdTransaction = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypeTransaction = table.Column<int>(type: "int", nullable: false),
                    TypeDeposit = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Amount = table.Column<decimal>(type: "DECIMAL(11,2)", nullable: false),
                    IdSourceAccount = table.Column<int>(type: "int", nullable: false),
                    IdDestinationAccount = table.Column<int>(type: "int", nullable: false),
                    IdReward = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.IdTransaction);
                    table.ForeignKey(
                        name: "FK_Transactions_Accounts_IdDestinationAccount",
                        column: x => x.IdDestinationAccount,
                        principalTable: "Accounts",
                        principalColumn: "IdAccount");
                    table.ForeignKey(
                        name: "FK_Transactions_Accounts_IdSourceAccount",
                        column: x => x.IdSourceAccount,
                        principalTable: "Accounts",
                        principalColumn: "IdAccount");
                    table.ForeignKey(
                        name: "FK_Transactions_Rewards_IdReward",
                        column: x => x.IdReward,
                        principalTable: "Rewards",
                        principalColumn: "IdReward");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_IdDestinationAccount",
                table: "Transactions",
                column: "IdDestinationAccount");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_IdReward",
                table: "Transactions",
                column: "IdReward");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_IdSourceAccount",
                table: "Transactions",
                column: "IdSourceAccount");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.DropTable(
                name: "Transactions");

            migrationBuilder.DropTable(
                name: "Accounts");

            migrationBuilder.DropTable(
                name: "Rewards");
        }
    }
}
