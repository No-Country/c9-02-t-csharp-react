using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class addedFKIdServiceintransactionModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Transactions_IdService",
                table: "Transactions",
                column: "IdService");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Services_IdService",
                table: "Transactions",
                column: "IdService",
                principalTable: "Services",
                principalColumn: "IdService");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Services_IdService",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_IdService",
                table: "Transactions");
        }
    }
}
