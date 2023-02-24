using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class ChangesinTransactionandTransactionDTOmodels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdService",
                table: "Transactions",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdService",
                table: "Transactions");
        }
    }
}
