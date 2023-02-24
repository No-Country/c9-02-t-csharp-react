using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class updatesinCBU_CVUfield : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CBU_CVU",
                table: "Accounts",
                type: "VARCHAR(22)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CBU_CVU",
                table: "Accounts",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "VARCHAR(22)");
        }
    }
}
