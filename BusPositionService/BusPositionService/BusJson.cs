﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusPositionService
{
    public class BusJson
    {
        public string SerialNumber { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }

        public BusJson(string serial, Waypoint GL)
        {
            SerialNumber = serial;
            Lat = GL.Lat;
            Lon = GL.Lon;
        }
    }
}
