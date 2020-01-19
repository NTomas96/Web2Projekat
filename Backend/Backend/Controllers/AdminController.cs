﻿using Backend.Models;
using Backend.Models.Web;
using Backend.Persistence.UnitOfWork;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class AdminController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public AdminController(IUnitOfWork u)
        {
            this.unitOfWork = u;
        }

        #region Lines
        [HttpGet("lines")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(IQueryable<Line>))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult GetLines()
        {
            return Success(unitOfWork.Lines.GetAll());
        }

        [HttpGet("lines/{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(Line))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult GetLine(int id)
        {
            var item = unitOfWork.Lines.Get(id);

            if (item == null)
            {
                return Error(8001, "Line not found!");
            }

            return Success(item);
        }

        [HttpPost("lines")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(bool))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult AddLine([FromBody] Line item)
        {
            try
            {
                item.Id = 0;
                unitOfWork.Lines.Add(item);
                unitOfWork.Complete();

                return Success(true);
            }
            catch
            {
                return Error(8002, "Error while saving. Are you sure that Line doesn't already exist?");
            }

        }

        [HttpPost("lines/{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(bool))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult EditLine(int id, [FromBody] Line item)
        {
            try
            {
                item.Id = id;
                unitOfWork.Lines.Update(item);
                unitOfWork.Complete();

                return Success(true);
            }
            catch
            {
                return Error(8003, "Error while editing. Are you sure that Line exists?");
            }
        }

        [HttpDelete("lines/{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(bool))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult DeleteLine(int id)
        {
            try
            {
                Line line = new Line() { Id = id };
                unitOfWork.Lines.Remove(line);
                unitOfWork.Complete();

                return Success(true);
            }
            catch
            {
                return Error(8004, "Error while deleting. Are you sure that Line exists?");
            }
        }
        #endregion

        #region Stations
        [HttpGet("stations")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(IQueryable<Station>))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult GetStations()
        {
            return Success(unitOfWork.Stations.GetAll());
        }

        [HttpGet("stations/{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(Station))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult GetStation(int id)
        {
            var item = unitOfWork.Stations.Get(id);

            if (item == null)
            {
                return Error(8101, "Station not found!");
            }

            return Success(item);
        }

        [HttpPost("stations")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(bool))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult AddStation([FromBody] Station item)
        {
            try
            {
                item.Id = 0;
                unitOfWork.Stations.Add(item);
                unitOfWork.Complete();

                return Success(true);
            }
            catch
            {
                return Error(8102, "Error while saving. Are you sure that Station doesn't already exist?");
            }

        }

        [HttpPost("stations/{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(bool))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult EditStation(int id, [FromBody] Station item)
        {
            try
            {
                item.Id = id;
                unitOfWork.Stations.Update(item);
                unitOfWork.Complete();

                return Success(true);
            }
            catch
            {
                return Error(8103, "Error while editing. Are you sure that Station exists?");
            }
        }

        [HttpDelete("stations/{id}")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(200, Type = typeof(bool))]
        [ProducesResponseType(400, Type = typeof(ErrorApiResponse))]
        public IActionResult DeleteStation(int id)
        {
            try
            {
                Station line = new Station() { Id = id };
                unitOfWork.Stations.Remove(line);
                unitOfWork.Complete();

                return Success(true);
            }
            catch
            {
                return Error(8104, "Error while deleting. Are you sure that Station exists?");
            }
        }

        #endregion
    }
}
