using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class changesinCVUfieldformat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CBU_CVU",
                table: "Accounts",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "CBU_CVU",
                table: "Accounts",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
