﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Index(IsUnique = true)]
        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime DayOfBirth { get; set; }
        public string Address { get; set; }
        public PassengerType PassengerType { get; set; }
        public string AdditionalInfo { get; set; }
        public UserType UserType { get; set; }
        public bool Active { get; set; }
        public VerificationStatus VerificationStatus { get; set; }
    }
}