using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using IDFSpa.Models;
using Microsoft.AspNetCore.Mvc;

namespace IDFSpa.Controllers
{
    [Route("api/[controller]")]
    public class BankController : Controller
    {

        private readonly SpaContext _context;
        private readonly SpaContext _contextSeed;
        public static long key = 1;
        public static long keyFind = 1;

        public BankController(SpaContext context)
        {
            _context = context;
            _contextSeed = context;

            if (_contextSeed.AcctItems.Count() == 0)
            {
                _contextSeed.AcctItems.Add(new AccountModel
                {
                    Id = key++,
                    CustomerId = 1,
                    Balance = 0.00,
                    Credit = 100000.00
                });
                // _context.AcctItems.Add(new AccountModel { Id = 2, CustomerId = 1, Balance = 2.00, Credit = 200000.00 });
                _contextSeed.SaveChanges();
            }
        }




        [HttpGet("{id}")]
        public ActionResult<IEnumerable<ClientAccountModel>> Get(long id)
        {

            var ret = _context.AcctItems.Find(id);
            return new List<ClientAccountModel>
            {
                new ClientAccountModel {Balance = ret.Balance, Credit = ret.Credit}
            };
            //   return new[] { ret.Balance.ToString(CultureInfo.InvariantCulture), ret.Credit.ToString(CultureInfo.InvariantCulture) };

        }


        [HttpGet]
        public ActionResult<ClientAccountModel> Get()
        {
            var ret = _context.AcctItems.Find(keyFind);
            //if (ret != null)
            //{
            //    ret.Balance++;
            //    _context.AcctItems.Update(ret);
            //    _context.SaveChanges();
            //}


            return new ClientAccountModel {Balance = ret.Balance, Credit = ret.Credit};
        }


        // POST api/values
        [HttpPut]
        public void Put([FromBody] double value)
        {
            var draw = value;
            var ret = _context.AcctItems.Find(keyFind);
            if (ret != null)
            {
                ret.Credit -= draw;
                ret.Balance += draw;

                _context.AcctItems.Update(ret);
                _context.SaveChanges();
            }
        }

    }
}