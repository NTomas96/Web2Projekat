﻿using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Web.Bus
{
    public class BusJson
    {
        public string SerialNumber { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
    }
}
