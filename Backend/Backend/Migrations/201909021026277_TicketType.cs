namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TicketType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Tickets", "TicketType", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Tickets", "TicketType");
        }
    }
}
