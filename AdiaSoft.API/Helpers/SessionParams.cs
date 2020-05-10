using System;

namespace AdiaSoft.API.Helpers
{
    public class SessionParams
    {
        public int ScheduleId { get; set; }
        public DateTime SessionDate { get; set; }
        public string Comment { get; set; }
    }
}