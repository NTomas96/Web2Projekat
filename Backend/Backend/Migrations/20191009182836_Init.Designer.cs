﻿// <auto-generated />
using System;
using Backend.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20191009182836_Init")]
    partial class Init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Backend.Models.Line", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Color");

                    b.Property<int>("LineType");

                    b.Property<string>("Name");

                    b.Property<string>("WaypointsInternal");

                    b.HasKey("Id");

                    b.ToTable("Lines");
                });

            modelBuilder.Entity("Backend.Models.Pricelist", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("PassengerType");

                    b.Property<double>("Price");

                    b.Property<int>("TicketType");

                    b.HasKey("Id");

                    b.HasIndex("TicketType", "PassengerType")
                        .IsUnique()
                        .HasName("Pricelist_1");

                    b.ToTable("Pricelists");
                });

            modelBuilder.Entity("Backend.Models.Station", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Lat");

                    b.Property<double>("Lon");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Stations");
                });

            modelBuilder.Entity("Backend.Models.StationLine", b =>
                {
                    b.Property<int>("StationId");

                    b.Property<int>("LineId");

                    b.HasKey("StationId", "LineId");

                    b.HasIndex("LineId");

                    b.ToTable("StationLine");
                });

            modelBuilder.Entity("Backend.Models.Ticket", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PayPalData");

                    b.Property<string>("PayPalOrderId")
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("TicketNumber")
                        .HasColumnType("VARCHAR(15)");

                    b.Property<int>("TicketType");

                    b.Property<DateTime>("TimeBought");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("PayPalOrderId")
                        .IsUnique()
                        .HasFilter("[PayPalOrderId] IS NOT NULL");

                    b.HasIndex("TicketNumber")
                        .IsUnique()
                        .HasFilter("[TicketNumber] IS NOT NULL");

                    b.HasIndex("UserId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("Backend.Models.Timetable", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DayOfWeek");

                    b.Property<string>("DeparturesInternal");

                    b.Property<int?>("LineId");

                    b.HasKey("Id");

                    b.HasIndex("LineId");

                    b.ToTable("Timetables");
                });

            modelBuilder.Entity("Backend.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active");

                    b.Property<string>("AdditionalInfo");

                    b.Property<string>("Address");

                    b.Property<DateTime>("DayOfBirth");

                    b.Property<string>("Email")
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<int>("PassengerType");

                    b.Property<string>("Password");

                    b.Property<int>("UserType");

                    b.Property<int>("VerificationStatus");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique()
                        .HasFilter("[Email] IS NOT NULL");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Backend.Models.Vehicle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Lat");

                    b.Property<int?>("LineId");

                    b.Property<double>("Lon");

                    b.Property<string>("Name");

                    b.Property<string>("TrackerSerial")
                        .HasColumnType("VARCHAR(100)");

                    b.HasKey("Id");

                    b.HasIndex("LineId");

                    b.HasIndex("TrackerSerial")
                        .IsUnique()
                        .HasFilter("[TrackerSerial] IS NOT NULL");

                    b.ToTable("Vehicles");
                });

            modelBuilder.Entity("Backend.Models.StationLine", b =>
                {
                    b.HasOne("Backend.Models.Line", "Line")
                        .WithMany("Stations")
                        .HasForeignKey("LineId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Backend.Models.Station", "Station")
                        .WithMany("Lines")
                        .HasForeignKey("StationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Backend.Models.Ticket", b =>
                {
                    b.HasOne("Backend.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Backend.Models.Timetable", b =>
                {
                    b.HasOne("Backend.Models.Line", "Line")
                        .WithMany()
                        .HasForeignKey("LineId");
                });

            modelBuilder.Entity("Backend.Models.Vehicle", b =>
                {
                    b.HasOne("Backend.Models.Line", "Line")
                        .WithMany()
                        .HasForeignKey("LineId");
                });
#pragma warning restore 612, 618
        }
    }
}