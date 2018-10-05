using System;

namespace Web.DTO
{
    public class UserDto : CreditionalDto
    {
        public string LastName { get; set; }
        public string Name { get; set; }
        public string Patronymic { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
